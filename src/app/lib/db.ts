import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "@/app/entities/User";
import { Permission } from "../entities/Permission";
import { Role } from "../entities/Role";

// Create a singleton DataSource instance
let dataSource: DataSource;

export async function getDataSource() {
  if (!dataSource) {
    dataSource = new DataSource({
      type: "mysql", // You can change this to postgres, sqlite, etc.
      host: process.env.DB_HOST || "localhost",
      port: Number.parseInt(process.env.DB_PORT || "3306"),
      username: process.env.DB_USERNAME || "root",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_NAME || "auth_db",
      entities: [User,Permission,Role],
      synchronize: true,
      // synchronize: process.env.NODE_ENV !== "production", 
      logging: process.env.NODE_ENV !== "production",
    });
  }


  if (!dataSource.isInitialized) {
    await dataSource.initialize();
    console.log("database is connected ","====================");
  }

  return dataSource;
}
