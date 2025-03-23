export type TUser = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: "admin" | "default";
    active: boolean;
  }