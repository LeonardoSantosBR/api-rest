import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log(`SEEDER INICIADO ☑️`);

  const plans = [
    {
      name: "free",
    },
    {
      name: "learner",
    },
    {
      name: "explorer",
    },
    {
      name: "master",
    },
  ];

  plans.map(async (plan: any) => {
    await prisma.plan.upsert({
      where: {
        id: plan.id || -1,
      },
      update: plan,
      create: plan,
    });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
