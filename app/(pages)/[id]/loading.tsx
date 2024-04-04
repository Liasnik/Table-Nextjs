import { SkeletonTable } from "@/components/SkeletonTable";

export default function loader() {
  return (
    <main className="container  p-5">
      <SkeletonTable />
    </main>
  );
}
