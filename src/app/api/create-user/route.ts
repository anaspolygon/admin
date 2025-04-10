import { User } from "@/app/entities/User";
import { getDataSource } from "@/app/lib/db";
import { message } from "antd";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, email, password, roleId } = await request.json();
  try {
    const dataSource = await getDataSource();
    const userRepository = dataSource.getRepository(User);
    const exists = await userRepository.findOne({ where: { email } });
    if (exists) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }
    const user = userRepository.create({name, email, password, role: roleId });
    await userRepository.save(user);

    return NextResponse.json(
      { msg: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}

export async function GET(){
    try {
        const dataSource = await getDataSource();
        const userRepository = dataSource.getRepository(User);
        const users = await userRepository.find({ where:{id:"1"} });
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json(
            { error: "Failed to fetch users" },
            { status: 500 }
          );
        
    }
}