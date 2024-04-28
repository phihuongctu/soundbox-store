/* eslint-disable import/no-unresolved */
import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import LayoutMain from "~/components/layout/LayoutMain";
import Banner from "/images/Banner.png"

export const meta: MetaFunction = () => {
  return [
    { title: "Sound Box Store" },
    { name: "description", content: "Welcome to Sound Box Store" },
  ];
};

export default function Home() {
  return (
    <>
      <LayoutMain>
        <img className="md:block object-cover w-full h-auto md:h-[600px]" src={Banner} alt="" />
        <main>
          <Outlet />
        </main>
      </LayoutMain>
    </>
  );
}
