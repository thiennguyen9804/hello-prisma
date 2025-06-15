import { Injectable, OnModuleInit } from "@nestjs/common";
import { Post, PrismaClient, User } from "@prisma/client";
import { PrismaService } from "./prisma.service";


@Injectable()
export class PrismaProxyService extends PrismaClient implements OnModuleInit {
  private userCache = {};
  private postCache = {};

  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async onModuleInit() {
    this.prisma.$connect()
  }

  async getPostById(id: number): Promise<Post | null> {
    const res = this.postCache[id];
    if (res) {
      console.log("🚀 ~ PrismaProxyService ~ getPostById ~ res from cache:", res)
      return res;
    }

    const post = await this.prisma.post.findUnique({
      where: { id: id },
    });
    if(post) {
      this.postCache[post.id] = post;
    }
    return post;
  }



}