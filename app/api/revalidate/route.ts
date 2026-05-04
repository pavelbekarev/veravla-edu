import { revalidateTag } from "next/cache";

export async function POST(req: Request) {
  const secret = req.headers.get("x-secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  revalidateTag("ads", "default");

  console.log("SECRET:", secret);
  console.log("ENV:", process.env.REVALIDATE_SECRET);

  return Response.json({ ok: true });
}
