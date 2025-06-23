export interface User {
  id: number;
  username: string;
  email: string;
  status: "active" | "inactive";
}
