import { users } from "./data";

export async function GET() {
  //   return new Response("Hello from Posts route");
  return Response.json(users);
}

export async function POST(request) {
  const user = await request.json();
  //   const post = await request.body;

  const newUser = {
    // id: Date.now(),
    id: users.length + 1,
    name: user.name,
    email: user.email,
    phone: user.phone,
    website: user.website,
    address: {
      street: user.street,
      city: user.city,
    },
  };

  users.push(newUser);
  return new Response(JSON.stringify(users));
}

export async function DELETE(request) {
  const { id } = await request.json();
  const index = users.findIndex((user) => user.id === id);
  users.splice(index, 1);
  return Response.json({ message: "User deleted successfully" });
}

export async function PUT(request) {
  const updatedUser = await request.json();
  const index = users.findIndex((user) => user.id === updatedUser.id);
  users[index] = { ...users[index], ...updatedUser };
  return Response.json(users[index]);
}
