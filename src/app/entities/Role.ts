import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Permission } from "./Permission";

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id!: string;
  @Column()
  name!: string;
  @ManyToMany(()=>Permission,(permission)=>permission.roles)
  @JoinTable()
  permissions!: Permission[];
}
