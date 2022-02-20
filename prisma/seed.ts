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
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
    ],
  });

  await prisma.job.deleteMany();
  await prisma.job.create({
    data: {
      status: Status.NEW,
      salary: "£60k",
      title: "Developer",
      company: "Microsoft",
      jobUrl: "https://microsoft.com",
      companyUrl: "https://microsoft.com",
      skills: {
        connect: [{ name: "TypeScript" }, { name: "JavaScript" }],
      },
    },
  });
  await prisma.job.create({
    data: {
      status: Status.CV_SENT,
      salary: "£20k",
      title: "Full Stack Engineer",
      company: "Ocado",
      skills: {
        connect: [
          { name: "JavaScript" },
          { name: "Java" },
          { name: "HTML" },
          { name: "CSS" },
        ],
      },
    },
  });
  await prisma.job.create({
    data: {
      status: Status.OFFERED,
      salary: "£18k",
      title: "Junior Frontend Developer",
      company: "Advance Auto Parts",
      skills: {
        connect: [{ name: "HTML" }, { name: "CSS" }],
      },
    },
  });
  await prisma.job.create({
    data: {
      status: Status.REJECTED,
      salary: "£150k",
      title: "CTO",
      company: "Zoopla",
      skills: {
        connect: [{ name: "Java" }],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
