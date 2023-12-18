import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("nextjs-mongodb-demo");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let user = await db.collection("user").insertOne(bodyObject);
      res.json(user.ops[0]);
      break;
    case "GET":
      const allPosts = await db.collection("blogs").find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
  }
}