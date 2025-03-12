import axios from "axios"; // For making requests to APIs
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const userAgent = req.headers["user-agent"] || "Unknown";
  const referrer = req.headers["referer"] || "Direct";
  const ip =
    req.headers["x-forwarded-for"] || req.socket.remoteAddress || "Unknown";

  // Slack Webhook URL
  const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL; // Store this in your .env.local file

  try {
    // Get geolocation information based on IP address
    let geolocationData = {};
    if (ip && ip !== "Unknown") {
      try {
        const response = await axios.get(`http://ip-api.com/json/${ip}`);
        console.log(response.data);
        geolocationData = response.data;
      } catch (geoError) {
        console.error("Error fetching geolocation data:", geoError.message);
      }
    }

    // Combine remoteAddress and geolocation data for Slack
    const slackMessage = {
      text: `Request Details:\n\`\`\`
IP Address: ${ip}
x-forwarded-for: ${req.headers["x-forwarded-for"] || "Unknown"}
Remote Address: ${req.socket.remoteAddress || "Unknown"}
User-Agent: ${userAgent}
Referrer: ${referrer}
Geolocation Data: ${JSON.stringify(geolocationData, null, 2)}
\`\`\``,
    };

    // Send data to Slack
    if (slackWebhookUrl) {
      try {
        await axios.post(slackWebhookUrl, slackMessage);
        console.log("Request details sent to Slack successfully.");
      } catch (slackError) {
        console.error("Error sending data to Slack:", slackError.message);
      }
    } else {
      console.error("Slack Webhook URL is not defined.");
    }

    // Serve the image
    const imagePath = path.join(process.cwd(), "public", "bq.png");
    if (!fs.existsSync(imagePath)) {
      throw new Error("Image file not found");
    }

    const imageBuffer = fs.readFileSync(imagePath);

    res.setHeader("Content-Type", "image/png");
    res.writeHead(200);
    res.end(imageBuffer);
  } catch (error) {
    console.error("Error in API handler:", error.message);

    res.status(500).json({
      error: "Failed to process the request",
      details: error.message,
    });
  }
}
