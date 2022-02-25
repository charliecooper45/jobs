import { Status } from "@prisma/client";

const {
  NEW,
  CV_SENT,
  INTERVIEW_ONE,
  INTERVIEW_TWO,
  INTERVIEW_THREE,
  OFFERED,
  REJECTED,
  ACCEPTED,
} = Status;

const ActiveIndexes: Partial<Record<Status, number>> = {
  [NEW]: 1,
  [CV_SENT]: 2,
  [INTERVIEW_ONE]: 3,
  [INTERVIEW_TWO]: 3,
  [INTERVIEW_THREE]: 3,
  [OFFERED]: 4,
  [REJECTED]: 4,
  [ACCEPTED]: 5,
} as const;

const Widths: Partial<Record<Status, string>> = {
  [NEW]: "20%",
  [CV_SENT]: "40%",
  [INTERVIEW_ONE]: "60%",
  [INTERVIEW_TWO]: "60%",
  [INTERVIEW_THREE]: "60%",
  [OFFERED]: "80%",
  [REJECTED]: "80%",
  [ACCEPTED]: "100%",
} as const;

export { ActiveIndexes, Widths };
