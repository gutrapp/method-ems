import { config } from "dotenv";
config();

type Variables = {
  BASE_API_URL: string;
};

type Env<T> = {
  readonly [K in keyof T]: T[K];
};

export const env: Env<Variables> = {
  BASE_API_URL: process.env.BASE_API_URL!,
};
