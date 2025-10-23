import { posts } from "./data";

export async function GET() {
  //   return new Response("Hello from Posts route");
  return Response.json(posts);
}

export async function POST(request) {
  const post = await request.json();

  const newPost = {
    // id: Date.now(),
    id: posts.length + 1,
    title: post.title,
  };

  posts.push(newPost);
  return new Response(JSON.stringify(posts));
}

export async function DELETE(request) {
  const { id } = await request.json();
  const index = posts.findIndex((post) => post.id === id);
  posts.splice(index, 1);
  return Response.json({ message: "Post deleted successfully" });
}
