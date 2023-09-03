type Admin = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: "AD" | "OP";
} & (
  | {
      type: "CL";
      clinic: Clinic;
    }
  | {
      type: "GL";
    }
);
