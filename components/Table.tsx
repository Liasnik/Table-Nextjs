import { User } from "@/app/actions/getUser";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TableUser({ user }: { user: User }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Full name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Website</TableHead>
          <TableHead className=" text-center">City</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Phone</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.website}</TableCell>
          <TableCell className=" text-center">{user.address?.city}</TableCell>
          <TableCell>{user.company?.name}</TableCell>
          <TableCell>{user.phone}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
