import { getData } from "@/app/actions/getAllUsers";
import { DataTable } from "@/components/DataTable";
import { columns } from "@/components/columns";
import Link from "next/link";

export default async function Home() {
  const data = await getData();
  return (
    <main className="container p-5">
      <DataTable columns={columns} data={data} />
    </main>
  );
}
