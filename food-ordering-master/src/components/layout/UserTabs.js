import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserTabs() {
  const path = usePathname();
  const isAdmin = true; // Replace this with your logic to determine if the user is an admin

  return (
    <div className="flex mx-auto gap-2 tabs justify-center flex-wrap">
      <Link className={path === "/profile" ? "active" : ""} href={"/profile"}>
        Profile
      </Link>
      <Link
        href={"/categories"}
        className={path === "/categories" ? "active" : ""}
      >
        Categories
      </Link>
      <Link
        href={"/menu-items"}
        className={path.includes("menu-items") ? "active" : ""}
      >
        Menu Items
      </Link>
      <Link className={path.includes("/users") ? "active" : ""} href={"/users"}>
        Users
      </Link>
      <Link className={path === "/orders" ? "active" : ""} href={"/orders"}>
        Orders
      </Link>
    </div>
  );
}
