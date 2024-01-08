import { NextApiRequest, NextApiResponse } from "next";

const deleteCookie = (res: NextApiResponse) => {
  res.setHeader(
    "Set-Cookie",
    `${"medium_login_session"}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`
  );
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      deleteCookie(res);

      return res.status(200).json({ success: true, message: "Cookie deleted" });
    }
    return res.status(404).send("Not found");
  } catch (error: any) {
    console.log("error:", error);
    return res.status(200).send({ error: error.message });
  }
}
