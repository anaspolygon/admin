import { Permission } from "@/app/entities/Permission";
import { Role } from "@/app/entities/Role";
import { getDataSource } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
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

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const dataSource = await getDataSource();
    const roleRepository = dataSource.getRepository(Role);
    const role = await roleRepository.findOne({ where: { id } });

    if (role) {
      await roleRepository.remove(role);
      console.log(`✅ Role deleted: ${role.name}`);
    }
    await dataSource.destroy();
    return NextResponse.json(
      { message: "Role deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Role delete error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}


export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { roleId,permissionIds } = await req.json(); // Expect: { permissionIds: [1, 2, 3] }

  try {
    const dataSource = await getDataSource();
    const roleRepo = dataSource.getRepository(Role);
    const permissionRepo = dataSource.getRepository(Permission);

    // Find the role
    const role = await roleRepo.findOne({ where: { id: roleId }, relations: ['permissions'] });

    if (!role) {
      return NextResponse.json({ message: 'Role not found' }, { status: 404 });
    }

    // Find all permissions by given IDs
    const newPermissions = await permissionRepo.findByIds(permissionIds);

    // Update role's permissions
    role.permissions = newPermissions;
    await roleRepo.save(role);

    return NextResponse.json({ message: 'Permissions updated successfully', role });
  } catch (error: any) {
    console.error('Error updating permissions:', error);
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}