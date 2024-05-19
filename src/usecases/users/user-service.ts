import { User } from "@prisma/client";
import { paginationService } from "../../helpers/pagination/pagination-service";
import { MysqlUserRepository } from "../../repositories/users/mysql-user-repository";
import { IpaginationService } from "../../types/pagination/Ipagination-service";
import { UserDto } from "./user.dto";

export class UserService {
  constructor(private readonly userRepository: MysqlUserRepository) {}

  async create(data: UserDto) {
    const { plan, ...rest } = data;

    const newUser = await this.userRepository.create({
      data: {
        ...rest,
        plan: {
          connect: {
            id: plan,
          },
        },
      },
    });

    return newUser;
  }

  async findAll({
    page,
    limit,
    where,
    select,
    include,
    orderBy,
  }: IpaginationService) {
    const options = paginationService({
      page,
      limit,
      where,
      select,
      include,
      orderBy,
    });

    const [items, count] = await Promise.all([
      this.userRepository.findAll(options),
      this.userRepository.findAll({
        where: options.where || {},
      }),
    ]);

    const data: {
      items: Array<User>;
      count: number;
      totalCount?: number;
    } = {
      items: items,
      count: count.length,
      totalCount: count.length,
    };

    return data;
  }

  async findOne(
    id: number,
    options?: {
      where?: any;
      select?: any;
      include?: any;
    }
  ) {
    const optionsService = paginationService({
      where: { id: id, ...options?.where },
      select: options?.select,
      include: options?.include,
    });

    const data = await this.userRepository.findOne(optionsService);
    return data;
  }

  async update(id: number, data: UserDto) {
    const { plan, ...rest } = data;

    await this.userRepository.update({
      where: {
        id: id,
      },
      data: {
        ...rest,
        plan: {
          connect: {
            id: plan,
          },
        },
      },
    });
  }

  async delete(id: number) {
    await this.userRepository.delete({
      where: { id: id },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
