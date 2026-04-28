import type { NextApiRequest, NextApiResponse } from "next";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { email } = req.body as { email?: string };
  if (!email || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID ?? "app0IowTPoDW3t3eI";
  const table = process.env.AIRTABLE_TABLE_NAME ?? "Website Signups";

  if (!apiKey) {
    console.error("AIRTABLE_API_KEY not set");
    return res.status(500).json({ error: "Server misconfigured" });
  }

  const response = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Email: email,
              Source: "password-page",
              Created: new Date().toISOString(),
              Status: "New",
            },
          },
        ],
      }),
    }
  );

  if (!response.ok) {
    const text = await response.text();
    console.error("Airtable error:", text);
    return res.status(500).json({ error: "Failed to save signup" });
  }

  return res.status(200).json({ ok: true });
}
