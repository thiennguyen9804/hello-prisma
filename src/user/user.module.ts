import { Module } from "@nestjs/common";
import { PostsService } from "src/post/post.service";
import { PrismaService } from "src/prisma_service/prisma.service";
import { UsersService } from "./user.service";

@Module({
  providers: [PrismaService, UsersService],
  exports: [UsersService]
})
export class UsersModule { };