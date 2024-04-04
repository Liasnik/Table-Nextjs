import { User, getUser } from "@/app/actions/getUser";
import { TableUser } from "@/components/Table";

import React from "react";
import { notFound } from "next/navigation";

interface Params {
  params: {
    id: number;
  };
}

export default async function UserPage({ params: { id } }: Params) {
  const user: User = await getUser(id);

  if (!user) {
    notFound();
  }

  console.log(user);
  return (
    <div className="container p-5">
      <h2 className="text-2xl mb-5">{user.username}</h2>
      {/* <DataTable columns={columns} data={user} /> */}
      <TableUser user={user} />
    </div>
  );
}
