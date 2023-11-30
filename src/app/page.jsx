import React from "react";
import Image from "next/image";
import logo from "../images/iphone-15.png";
import SmallBanner from "@/components/SmallBanner";
const page = () => {
  return (
    <div>
      {/* main banner section */}
      <div className="bg-slate-200 w-full h-[33rem]">
        <div className="flex items-center justify-evenly">
          <div className="mb-24 ms-24">
            <h1 className="text-2xl font-bold">
              Iphone 15 pro max Titanium Black
            </h1>
            <button className="mt-4 bg-slate-900 text-white px-6 py-2 rounded-lg font-bold">
              Buy Now
            </button>
          </div>
          <div className="ms-24">
            <Image width={600} height={600} src={logo}></Image>
          </div>
        </div>
      </div>
      {/* small banner section */}
      <SmallBanner />
    </div>
  );
};

export default page;
