

'use client';
import Right from "@/components/icons/Right";
import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MenuItemsPage() {
  const [menuItems, setMenuItems] = useState([]);
  const { loading } = useProfile();
  const [loadingItems, setLoadingItems] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const res = await fetch('/api/menu-items');
        const data = await res.json();
        setMenuItems(data);
      } catch (err) {
        setError("Failed to load menu items");
      } finally {
        setLoadingItems(false);
      }
    };

    fetchMenuItems();
  }, []);

  if (loading) {
    return <div>Loading user info...</div>;
  }

  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <UserTabs />
      <div className="mt-8">
        <Link className="button flex items-center" href={'/menu-items/new'}>
          <span>Create new menu item</span>
          <Right />
        </Link>
      </div>
      <div>
        <h2 className="text-sm text-gray-500 mt-8">Edit menu item:</h2>
        {loadingItems ? (
          <div>Loading menu items...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {menuItems.length > 0 ? (
              menuItems.map(item => (
                <Link
                  key={item._id}
                  href={`/menu-items/edit/${item._id}`}
                  className="bg-gray-200 rounded-lg p-4"
                >
                  <div className="relative">
                    <Image
                      className="rounded-md"
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="text-center mt-2">
                    {item.name}
                  </div>
                </Link>
              ))
            ) : (
              <div>No menu items found.</div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
