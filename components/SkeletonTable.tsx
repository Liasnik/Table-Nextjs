import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonTable() {
  return (
    <div className="flex flex-col space-y-3 w-full">
      <div className="flex items-center justify-between space-y-2">
        <Skeleton className="h-9 w-[480px] rounded-sm" />
        <Skeleton className="h-9 w-[145px] rounded-sm" />
      </div>
      <div className="flex flex-col space-y-1">
        <Skeleton className="h-[50px]  rounded-sm" />
        <Skeleton className="h-[200px]  rounded-sm" />
      </div>
      <div className="flex items-center justify-end gap-3 space-y-2">
        <Skeleton className="h-8 w-[190px] rounded-sm" />
      </div>
    </div>
  );
}
