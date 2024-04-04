export async function getUser(id: number): Promise<User> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export type User = {
  id?: number;
  name: string;
  username: string;
  email: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
};

// export type Payment = {
//   id: string;
//   username: string;
//   name: string;
//   address: { city: string };
//   email: string;
//   company: { name: string };
// };
