import React from "react";
// import Image from "next/image";
const SmallBanner = () => {
  return (
    <div className="w-90 mt-6 mx-auto">
      <div className="mx-20 grid grid-cols-4 gap-6">
        <div className="col-span-1 p-4 ">
          <div className="flex justify-between  gap-4">
            <img
              width={60}
              height={50}
              src="https://cdn-icons-png.flaticon.com/128/3880/3880275.png?ga=GA1.1.945868740.1697346172&semt=ais"
              alt=""
            />
            <div className="">
              <h1 className="font-bold">Free delivery</h1>
              <p>On all orders over $50.00</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 p-4 ">
          <div className="flex justify-between  gap-4">
            <img
              width={50}
              height={50}
              src="https://cdn-icons-png.flaticon.com/128/4064/4064245.png?ga=GA1.1.945868740.1697346172&semt=ais"
              alt=""
            />
            <div className="">
              <h1 className="font-bold">Free Returns</h1>
              <p>Returns are free within 9 days</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 p-4 ">
          <div className="flex justify-between  gap-4">
            <img
              width={50}
              height={50}
              src="https://cdn-icons-png.flaticon.com/128/3679/3679747.png?ga=GA1.1.945868740.1697346172&semt=ais"
              alt=""
            />
            <div className="">
              <h1 className="font-bold">100% Payment Secure</h1>
              <p>Your payment are safe with us.</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 p-4 ">
          <div className="flex justify-between  gap-4">
            <img
              width={50}
              height={50}
              src="https://cdn-icons-png.flaticon.com/128/4961/4961759.png?ga=GA1.1.945868740.1697346172&semt=ais"
              alt=""
            />
            <div className="">
              <h1 className="font-bold">Support 24/7</h1>
              <p>Contact us 24 hours a day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallBanner;
