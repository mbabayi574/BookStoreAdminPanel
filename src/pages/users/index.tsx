/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Pagination,
  Button,
} from "flowbite-react";
import { useEffect, useState, useCallback } from "react";
import { axiosDelete, axiosGet } from "../../Utils";

export const UsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  const [maxPage, setMaxPage] = useState(3);

  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await axiosGet("/api/users/", {
        page: String(currentPage),
      });
      setMaxPage(response.max_page);
      setUsers(response.results);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, [currentPage]);

  const deleteUser = useCallback(async (userId: number) => {
    try {
      await axiosDelete(`/api/users/${userId}/`);
      setUsers((prevUsers) =>
        prevUsers.filter((user: any) => user.id !== userId)
      );
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user");
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div dir="ltr" className="w-full h-screen flex flex-col p-6">
      <div className="flex justify-between items-center mb-6">
        <Pagination
          layout="navigation"
          totalPages={maxPage}
          currentPage={currentPage}
          onPageChange={onPageChange}
          previousLabel="قبلی"
          nextLabel="بعدی"
        />
        <Button color="green">افزودن</Button>
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto">
          <Table hoverable className="w-full">
            <TableHead className="sticky top-0 z-10">
              <TableRow>
                <TableHeadCell className="w-auto">شناسه ( id )</TableHeadCell>
                <TableHeadCell className="w-auto">شماره تماس</TableHeadCell>
                <TableHeadCell className="w-auto">وضعیت</TableHeadCell>
                <TableHeadCell className="w-auto">مدیر</TableHeadCell>
                <TableHeadCell className="w-auto">
                  <span className="sr-only">ویرایش</span>
                </TableHeadCell>
                <TableHeadCell className="w-auto">
                  <span className="sr-only">حذف</span>
                </TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody className="divide-y">
              {users.map((user: any) => (
                <TableRow
                  key={user.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {user.id}
                  </TableCell>
                  <TableCell>{user.phone_number}</TableCell>
                  <TableCell>{user.is_active ? "فعال" : "غیرفعال"}</TableCell>
                  <TableCell>{user.is_superuser ? "بله" : "خیر"}</TableCell>
                  <TableCell>
                    <Button
                      color="alternative"
                      pill
                      onClick={() => {
                        // Handle edit action
                        console.log(`Edit user with id: ${user.id}`);
                      }}
                    >
                      ویرایش
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      color="alternative"
                      pill
                      onClick={() => {
                        // Handle delete action
                        deleteUser(user.id);
                      }}
                    >
                      حذف
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
