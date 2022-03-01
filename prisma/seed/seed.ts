import { PrismaClient, Status } from "@prisma/client";

/**
 * Seeds the database with test data.
 */
export async function seed(prisma: PrismaClient) {
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

  const note =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed neque in enim mattis venenatis. Curabitur sit amet tellus sit amet nisl ultricies sagittis vel sagittis diam. Duis iaculis tortor augue, rutrum vehicula tortor porta sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec tincidunt euismod consequat. Donec tristique semper tortor in ornare. Proin hendrerit rhoncus egestas. Mauris gravida diam lacus, vel mollis erat feugiat in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Aliquam blandit quam nisi, in rutrum est facilisis vitae.";

  await prisma.job.deleteMany();
  await prisma.job.create({
    data: {
      status: Status.NEW,
      salary: "£60k",
      title: "Developer",
      company: "Microsoft",
      jobUrl: "https://microsoft.com",
      companyUrl: "https://microsoft.com",
      note,
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
      note,
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
      note,
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
      note,
      skills: {
        connect: [{ name: "Java" }],
      },
    },
  });
}
