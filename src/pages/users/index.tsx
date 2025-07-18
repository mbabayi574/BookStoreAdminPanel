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
import { axiosGet } from "../../Utils";

export const UsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await axiosGet("/api/users/", {
        page: String(currentPage),
      });
      setUsers(response.results);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  console.log("Users:", users);

  return (
    <div dir="ltr" className="w-full h-full  flex flex-col  p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <Pagination
            layout="navigation"
            totalPages={10}
            currentPage={currentPage}
            onPageChange={onPageChange}
            previousLabel="قبلی"
            nextLabel="بعدی"
          />
        </div>
        <div>
          <Button color="green">افزودن</Button>
        </div>
      </div>

      <div>
        <div className="overflow-y-auto max-h-96">
          <Table hoverable className="overflow-y-auto">
            <TableHead className="sticky top-0 z-10">
              <TableRow>
                <TableHeadCell>شناسه ( id )</TableHeadCell>
                <TableHeadCell>شماره تماس</TableHeadCell>
                <TableHeadCell>وضعیت</TableHeadCell>
                <TableHeadCell>مدیر</TableHeadCell>
                <TableHeadCell>
                  <span className="sr-only">ویرایش</span>
                </TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody className="divide-y">
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  1
                </TableCell>
                <TableCell>09355033107</TableCell>
                <TableCell>فعال</TableCell>
                <TableCell>بله</TableCell>
                <TableCell>
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    ویرایش
                  </a>
                </TableCell>
              </TableRow>
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
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      ویرایش
                    </a>
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
