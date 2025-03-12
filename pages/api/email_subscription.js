import axios from "axios";

export default async function handler(req, res) {
  // console.log(req.body)
  const reCaptchaSecretKey = process.env.BINARY_QUEST_SECRET_KEY;
  if (req.method === "POST") {
    if (!req.body)
      return res?.status(404)?.json({ error: "Don't Have form data" });

    const { email, token } = req.body;
    // console.log(email);
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${reCaptchaSecretKey}&response=${token}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        method: "POST",
      }
    );

    const captchaValidation = await response.json();
    // console.log(captchaValidation);
    if (captchaValidation.success) {
      try {
        // console.log(captchaValidation);
        // Authenticate with Odoo
        const authPayload = JSON.stringify({
          jsonrpc: "2.0",
          method: "call",
          params: {
            db: process.env.SUBSCRIBE_DB_NAME,
            login: process.env.SUBSCRIBE_EMAIL_USER,
            password: process.env.SUBSCRIBE_EMAIL_PASSWORD,
          },
        });
        const authHeaders = { "Content-Type": "application/json" };
        const authResponse = await axios.post(
          "https://erp.binaryquest.com/web/session/authenticate",
          authPayload,
          { headers: authHeaders }
        );

        // Extract cookie from response
        const cookie = authResponse.headers["set-cookie"][0].split(";")[0];
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", cookie);

        // Fetch mailing list ID for "BQ Subscriber"
        const searchPayload = JSON.stringify({
          jsonrpc: "2.0",
          method: "call",
          params: {
            model: "mailing.list",
            method: "search_read",
            args: [[["name", "=", "BQ Subscriber"]], ["id"]],
          },
        });

        const searchResponse = await fetch(
          "https://erp.binaryquest.com/web/dataset/call",
          {
            method: "POST",
            headers: myHeaders,
            body: searchPayload,
          }
        );
        const searchData = await searchResponse.json();

        if (!searchData.result.length) {
          return res
            .status(404)
            .json({ message: "Mailing list 'BQ Subscriber' not found" });
        }

        const mailingListId = searchData.result[0].id;

        // Create contact with the mailing list ID
        const createPayload = JSON.stringify({
          jsonrpc: "2.0",
          params: {
            model: "mailing.contact",
            method: "create",
            args: [
              {
                email: email,
                list_ids: [[6, 0, [mailingListId]]], // Set the mailing list ID
              },
            ],
          },
        });

        const createResponse = await fetch(
          "https://erp.binaryquest.com/web/dataset/call",
          {
            method: "POST",
            headers: myHeaders,
            body: createPayload,
          }
        );

        const createResult = await createResponse.json();

        if (createResult.error) {
          throw new Error("Failed to create contact");
        }

        return res
          .status(200)
          .json({ message: "Subscription successful", status: 200 });
      } catch (error) {
        console.error("Error:", error.message);
        return res
          .status(500)
          .json({ message: "Something went wrong", status: 500 });
      }
    } else {
      return res
        .status(442)
        .json({ message: "Unprocessable request, Invalid captcha code" });
    }
  } else {
    res
      ?.status(500)
      ?.json({ message: "HTTP method not valid only POST request accepted" });
  }
}
