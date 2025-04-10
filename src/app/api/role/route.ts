import { Permission } from "@/app/entities/Permission";
import { Role } from "@/app/entities/Role";
import { getDataSource } from "@/app/lib/db";
import { NextResponse } from "next/server";
import { In } from "typeorm";

export async function POST(request: Request) {
  try {
    const { name,permissionIds } = await request.json();
    const dataSource = await getDataSource();
    const roleRepository = dataSource.getRepository(Role);
    const exists = await roleRepository.findOne({ where: { name } });

    const permissionRepository = dataSource.getRepository(Permission);

    const permissions = await permissionRepository.findBy({
      id: In(permissionIds),
    });

    console.log("=======================================",permissions);
  

    if (!exists) {
      const role = roleRepository.create({ name,permissions });
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


export async function GET(request: Request) {
  try {
    const dataSource = await getDataSource();
    const roleRepository = dataSource.getRepository(Role);
    const roles = await roleRepository.find({ relations: ["permissions"] });
    await dataSource.destroy();
    return NextResponse.json(roles, { status: 200 });
  } catch (error) {
    console.error("Role fetch error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}