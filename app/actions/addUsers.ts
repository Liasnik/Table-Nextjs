import { User } from "./getUser";

export async function addUser(userData: User) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to add user");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error adding user to server:", error);
    throw error;
  }
}
