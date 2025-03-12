import axios from "axios";

export default async function handler(req, res) {
  //   console.log(req);
  const reCaptchaSecretKey = process.env.BINARY_QUEST_SECRET_KEY;

  if (req.method === "POST") {
    const { email, name, phoneNumber, details, subject, token } = req.body;

    // Optional: reCAPTCHA Verification
    if (token) {
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
      if (!captchaValidation.success) {
        return res
          .status(442)
          .json({ message: "Unprocessable request, Invalid captcha code" });
      }
    }

    try {
      // // Step 1: Authenticate with Odoo
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

      const cookie = authResponse.headers["set-cookie"][0].split(";")[0];

      // Step 2: Create Lead in Odoo CRM with session cookie
      const leadPayload = JSON.stringify({
        jsonrpc: "2.0",
        params: {
          model: "crm.lead",
          method: "create",
          args: [
            {
              name: "contact us",
              contact_name: name,
              phone: phoneNumber,
              type: "lead",
              email_from: email,
              description: details,
              partner_name: subject,
            },
          ],
        },
      });

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookie,
        },
        body: leadPayload,
      };

      const leadResponse = await fetch(
        "https://erp.binaryquest.com/web/dataset/call",
        requestOptions
      );

      if (!leadResponse.ok) {
        return res
          .status(442)
          .json({ status: "error", message: "Failed to create lead" });
      }

      res
        .status(200)
        .json({ status: "success", message: "Lead created successfully" });
    } catch (error) {
      console.error("Error in creating lead:", error);
      res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
