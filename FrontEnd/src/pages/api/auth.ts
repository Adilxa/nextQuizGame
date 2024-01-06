import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

interface MockUser {
  id: number;
  username: string;
  isAdmin: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const mockUser: MockUser = {
    id: 1,
    username: "example",
    isAdmin: true,
  };

  const token = jwt.sign(
    {
      userId: mockUser.id,
      username: mockUser.username,
      isAdmin: mockUser.isAdmin,
    },
    "your-secret-key",
    {
      expiresIn: "1h", // Set the token expiration time
    }
  );

  // Set the token in an HttpOnly cookie for security
  res.setHeader(
    "Set-Cookie",
    `token=${token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict`
  );

  // Respond with the user information (you can customize this response)
  res.status(200).json({ user: mockUser });
}
