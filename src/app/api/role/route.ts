import { Role } from "@/app/entities/Role";
import { getDataSource } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name } = await request.json();
    const dataSource = await getDataSource();
    const roleRepository = dataSource.getRepository(Role);
    const exists = await roleRepository.findOne({ where: { name } });
    if (!exists) {
      const role = roleRepository.create({ name });
      await roleRepository.save(role);
      console.log(`✅ Role created: ${name}`);
    }
    await dataSource.destroy();
    return NextResponse.json(
      { message: "Role created successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Permission seed error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
