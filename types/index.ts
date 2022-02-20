import { Job, Skill } from "@prisma/client";

export type Statistics = {
  cvSent: number;
  interviewOne: number;
  interviewTwo: number;
  interviewThree: number;
  offered: number;
  rejected: number;
  accepted: number;
};

export type JobsResponse = (Job & {
  skills: Skill[];
})[];
