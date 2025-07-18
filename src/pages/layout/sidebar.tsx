import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaComment, FaPencilAlt, FaUsers } from "react-icons/fa";
import { IoIosLogOut, IoIosNotifications } from "react-icons/io";
import { SiBookstack } from "react-icons/si";

export function SidebarComponent() {
  const logoutFunction = () => {
    localStorage.removeItem("access_token");
    window.location.href = "/login";
  };

  return (
    <Sidebar className="h-screen flex flex-col">
      <SidebarItems className="flex flex-col flex-1">
        <SidebarItemGroup className="flex-1">
          <SidebarItem href="/users" icon={FaUsers}>
            کاربران
          </SidebarItem>
          <SidebarItem href="/books" icon={SiBookstack}>
            کتاب‌ها
          </SidebarItem>
          <SidebarItem href="/categories" icon={BiSolidCategoryAlt}>
            دسته‌بندی‌ها
          </SidebarItem>
          <SidebarItem href="/authors" icon={FaPencilAlt}>
            نویسندگان
          </SidebarItem>
          <SidebarItem href="/comments" icon={FaComment}>
            نظرات
          </SidebarItem>
          <SidebarItem href="/notifications" icon={IoIosNotifications}>
            اعلانات
          </SidebarItem>
        </SidebarItemGroup>
        <SidebarItemGroup>
          <SidebarItem onClick={logoutFunction} icon={IoIosLogOut}>
            خروج
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
