import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res
      .setHeader("Allow", ["POST"])
      .status(405)
      .json({ error: "Method Not Allowed" });
  }

  try {
    const { name, email, message } = req.body;

    const newMessage = await prisma.message.create({
      data: { name, email, message },
    });

    return res.status(200).json({ success: true, data: newMessage });
  } catch (error) {
    console.error("Error saving message:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}
