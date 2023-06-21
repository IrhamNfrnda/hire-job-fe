// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const body = req.body;

  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  if(!body?.email) {
    res.status(400).json({ message: "Email is required" });
    return;
  }

  if (!body?.password) {
    res.status(400).json({ message: "Password is required" });
    return;
  }

  if(body?.email === "admin@pijar.com" && body?.password === "12345678") {
    res.status(200).json({ message: "Login sucess", token: '123' });
  } else {
    res.status(400).json({ message: "Email / Password is incorect" });
  }
}
