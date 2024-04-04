import { DataTable } from "@/components/DataTable";
import { columns } from "@/components/columns";
import { getData } from "./actions/getAllUsers";

export default async function Home() {
  const data = await getData();
  return (
    <main className="container p-5">
      <DataTable columns={columns} data={data} />
    </main>
  );
}
