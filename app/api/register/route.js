import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../library/db";
import { userData } from "../../../library/Model/users";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    await connectMongoDB();

    // Check if user already exists
    const existingUser = await userData.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists." },
        { status: 400 }
      );
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);
    await userData.create({ 
      name, 
      email, 
      password: hashedPassword,
      loginType: "credentials"
    });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    console.log({ error });
    return NextResponse.json(
      { message: "Error while registering the user." },
      { status: 500 }
    );
  }
}
