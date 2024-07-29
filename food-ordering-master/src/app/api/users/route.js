// import {isAdmin} from "@/app/api/auth/[...nextauth]/route";
// import {User} from "@/models/User";
// import mongoose from "mongoose";

// export async function GET() {
//   mongoose.connect(process.env.MONGO_URL);
//   if (await isAdmin()) {
//     const users = await User.find();
//     return Response.json(users);
//   } else {
//     return Response.json([]);
//   }
// }

import { User } from "@/models/User";
import mongoose from "mongoose";

export async function GET() {
  mongoose.connect(process.env.MONGO_URL);

  try {
    const users = await User.find();
    return new Response(JSON.stringify(users), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return new Response(JSON.stringify({ error: "Error fetching users" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
