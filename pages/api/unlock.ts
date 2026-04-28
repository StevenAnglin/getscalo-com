import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { password } = req.body;
  const correct = process.env.PREVIEW_PASSWORD ?? "scalo";

  if (password === correct) {
    res.setHeader(
      "Set-Cookie",
      `scalo_access=granted; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 30}`
    );
    return res.status(200).json({ ok: true });
  }

  return res.status(401).json({ ok: false });
}
