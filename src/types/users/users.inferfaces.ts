import { Prisma } from "@prisma/client";

export interface createParams {
  data: Prisma.UserCreateInput;
  include?: Prisma.UserInclude;
}

export interface findAllParams {
  where?: Prisma.UserWhereInput;
  include?: Prisma.UserInclude;
  select?: Prisma.UserSelect;
  orderBy?: Prisma.UserOrderByWithAggregationInput;
  skip?: number;
  take?: number;
}

export interface findOneParams {
  where?: Prisma.UserWhereUniqueInput;
  include?: Prisma.UserInclude;
  select?: Prisma.UserSelect;
}

export interface updateOrDeleteParams {
  where: Prisma.UserWhereUniqueInput;
  data: Prisma.UserUpdateInput;
}

