import { Permission } from "@/app/entities/Permission";
import { getDataSource } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
   try {
    const dataSource = await getDataSource();
    const permissionRepository = dataSource.getRepository(Permission);

    const permissions = [
        'user:create',
        'user:read',
        'user:update',
        'user:delete',
        'role:create',
        'role:read',
        'role:update',
        'role:delete',
      ];

    for (const permissionName of permissions) {
        const exists = await permissionRepository.findOne({
            where: { name: permissionName },
        });

        if(!exists){
            const permission = permissionRepository.create({ name: permissionName });
            await permissionRepository.save(permission);
            console.log(`✅ Inserted permission: ${permissionName}`);
        }
    }

    await dataSource.destroy();
    return NextResponse.json({ message: "Permissions seeded successfully" }, { status: 200 });
   } catch (error) {
    console.error('Permission seed error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
   }
}


export async function GET(request:NextRequest) {
    try {
     const dataSource = await getDataSource();
     const permissionRepository = dataSource.getRepository(Permission);
     const permissions = await permissionRepository.find({ relations: ["roles"] });
     await dataSource.destroy();
     return NextResponse.json(permissions, { status: 200 });
    } catch (error) {
     console.error('Permission fetch error:', error);
     return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}