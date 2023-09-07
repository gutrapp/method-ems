import { config } from "dotenv";
config();

type Variables = {
  API_URL: string;
};

type Env<T> = {
  readonly [K in keyof T]: T[K];
};

export const env: Env<Variables> = {
  API_URL: process.env.API_URL!,
};
