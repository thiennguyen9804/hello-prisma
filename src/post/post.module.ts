import { Module } from "@nestjs/common";
import { PostsService } from "./post.service";
import { PrismaService } from "src/prisma.service";

@Module({
  providers: [PrismaService, PostsService],
  exports: [PostsService]
})
export class PostsModule {}