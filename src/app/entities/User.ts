import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm"
import { Role } from "./Role"

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({ length: 100 })
  name!: string

  @Column({ length: 100, unique: true })
  email!: string

  @Column()
  password!: string

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @Column({ type: 'varchar', length: 255, nullable: true })
  resetToken!: string | null

  @Column({ type: "timestamp", nullable: true })
  resetTokenExpiry!: Date | null
  @OneToOne(()=>Role)
  @JoinColumn()
  role!: Role

}

