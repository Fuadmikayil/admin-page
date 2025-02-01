"use client";

import Link from "next/link";
import Image from "next/image";
import Cart from "../app/assets/icons/admin/Cart.svg";
import Dashboard from "../app/assets/icons/admin/Dashboard.svg";
import EmptyStar from "../app/assets/icons/admin/EmptyStar.svg";
import Product from "../app/assets/icons/admin/Product.svg";
import Settings from "../app/assets/icons/admin/Settings.svg";
import Users from "../app/assets/icons/admin/Users.svg";

const AdminPage = ({ children }) => {
  return (
    <section className="flex gap-10 container mx-auto bg-white">
      <section className="flex flex-col items-start justify-start pt-6 h-screen pl-6">
        <Link href="/admin" className="flex items-center gap-[12px] mb-12">
          <h1 className="text-neutral-900  font-extrabold text-[20px]">
            Logo
          </h1>
        </Link>
        <section className="flex flex-col gap-4">
          <Link href="/admin/dashboard" className="bg-neutral-50 w-40 px-3 py-2 rounded-xl flex items-center gap-2">
            <Image src={Dashboard} alt="Dashboard" width={24} height={24} />
            <span className="text-neutral-800">Dashboard</span>
          </Link>
          <Link href="/admin/products" className="bg-neutral-50 w-40 px-3 py-2 rounded-xl flex items-center gap-2">
            <Image src={Product} alt="Products" width={24} height={24} />
            <span className="text-neutral-800"> Products </span>
          </Link>
          <Link href="/admin/order" className="bg-neutral-50 w-40 px-3 py-2 rounded-xl flex items-center gap-2">
            <Image src={Users} alt="Orders" width={24} height={24} className="scale-125" />
            <span className="text-neutral-800">Orders</span>
          </Link>
          <Link href="/admin/customers" className="bg-neutral-50 w-40 px-3 py-2 rounded-xl flex items-center gap-2">
            <Image src={Cart} alt="Customers" width={24} height={24} />
            <span className="text-neutral-800">Customers</span>
          </Link>
          <Link href="/admin/reviews" className="bg-neutral-50 w-40 px-3 py-2 rounded-xl flex items-center gap-2">
            <Image src={EmptyStar} alt="Reviews" width={24} height={24} />
            <span className="text-neutral-800">Reviews</span>
          </Link>
          <Link href="/admin/settings" className="bg-neutral-50 w-40 px-3 py-2 rounded-xl flex items-center gap-2">
            <Image src={Settings} alt="Settings" width={24} height={24} />
            <span className="text-neutral-800">Settings</span>
          </Link>
        </section>
      </section>
      <section className="flex-1">{children}</section>
    </section>
  );
};

export default AdminPage;
