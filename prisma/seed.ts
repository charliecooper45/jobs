import { PrismaClient, Status } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Seeds the database with test data for local development.
 */
async function main() {
  await prisma.skill.deleteMany();
  await prisma.skill.createMany({
    data: [
      {
        name: "TypeScript",
      },
      {
        name: "JavaScript",
      },
      {
        name: "Python",
      },
      {
        name: "Java",
      },
      {
        name: "Rust",
      },
    ],
  });

  await prisma.job.deleteMany();
  await prisma.job.create({
    data: {
      status: Status.NEW,
      salary: "£100k a week",
      title: "Attacking Midfielder",
      company: "Liverpool",
      skills: {
        connect: [{ name: "TypeScript" }, { name: "JavaScript" }],
      },
    },
  });
  await prisma.job.create({
    data: {
      status: Status.NEW,
      salary: "£100k a week",
      title: "Attacking Midfielder",
      company: "Liverpool",
      skills: {
        connect: [{ name: "TypeScript" }, { name: "JavaScript" }],
      },
    },
  });
  await prisma.job.create({
    data: {
      status: Status.NEW,
      salary: "£100k a week",
      title: "Attacking Midfielder",
      company: "Liverpool",
      skills: {
        connect: [{ name: "TypeScript" }, { name: "JavaScript" }],
      },
    },
  });
  await prisma.job.create({
    data: {
      status: Status.NEW,
      salary: "£100k a week",
      title: "Attacking Midfielder",
      company: "Liverpool",
      skills: {
        connect: [{ name: "TypeScript" }, { name: "JavaScript" }],
      },
    },
  });
  await prisma.job.create({
    data: {
      status: Status.NEW,
      salary: "£100k a week",
      title: "Attacking Midfielder",
      company: "Liverpool",
      skills: {
        connect: [{ name: "TypeScript" }, { name: "JavaScript" }],
      },
    },
  });
  await prisma.job.create({
    data: {
      status: Status.NEW,
      salary: "£100k a week",
      title: "Attacking Midfielder",
      company: "Liverpool",
      skills: {
        connect: [{ name: "TypeScript" }, { name: "JavaScript" }],
      },
    },
  });
  await prisma.job.create({
    data: {
      status: Status.NEW,
      salary: "£100k a week",
      title: "Attacking Midfielder",
      company: "Liverpool",
      skills: {
        connect: [{ name: "TypeScript" }, { name: "JavaScript" }],
      },
    },
  });
  await prisma.job.create({
    data: {
      status: Status.NEW,
      salary: "£100k a week",
      title: "Attacking Midfielder",
      company: "Liverpool",
      skills: {
        connect: [{ name: "TypeScript" }, { name: "JavaScript" }],
      },
    },
  });
  await prisma.job.create({
    data: {
      status: Status.NEW,
      salary: "£100k a week",
      title: "Attacking Midfielder",
      company: "Liverpool",
      skills: {
        connect: [{ name: "TypeScript" }, { name: "JavaScript" }],
      },
    },
  });
  await prisma.job.create({
    data: {
      status: Status.NEW,
      salary: "£100k a week",
      title: "Attacking Midfielder",
      company: "Liverpool",
      skills: {
        connect: [{ name: "TypeScript" }, { name: "JavaScript" }],
      },
    },
  });
  await prisma.job.create({
    data: {
      status: Status.NEW,
      salary: "£100k a week",
      title: "Attacking Midfielder",
      company: "Liverpool",
      skills: {
        connect: [{ name: "TypeScript" }, { name: "JavaScript" }],
      },
    },
  });
  // await prisma.job.createMany({
  //   data: [
  //     {
  //       status: Status.NEW,
  //       salary: "£100k a week",
  //       title: "Attacking Midfielder",
  //       company: "Liverpool",
  //     },
  //     {
  //       status: Status.CV_SENT,
  //       salary: "£100k a week",
  //       title: "Attacking Midfielder",
  //       company: "Liverpool",
  //     },
  //     {
  //       status: Status.INTERVIEW_ONE,
  //       salary: "£100k a week",
  //       title: "Attacking Midfielder",
  //       company: "Liverpool",
  //     },
  //     {
  //       status: Status.INTERVIEW_THREE,
  //       salary: "£100k a week",
  //       title: "Attacking Midfielder",
  //       company: "Liverpool",
  //     },
  //     {
  //       status: Status.REJECTED,
  //       salary: "£100k a week",
  //       title: "Attacking Midfielder",
  //       company: "Liverpool",
  //     },
  //   ],
  // });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
