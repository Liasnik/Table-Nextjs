import { User } from "./getUser";

export async function getData(): Promise<User[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const result = await response.json();
    const payments: User[] = result.map((item: User) => ({
      id: item.id,
      username: item.username,

      fullname: item.name,
      email: item.email,
      address: item.address?.city,
      company: item.company?.name,
    }));
    console.log(payments[0]);
    return payments;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
