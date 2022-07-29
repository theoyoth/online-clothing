import { FooterDetail } from "../Reuse";

const Footer = () => {
  const itemsInformation = ["About Us", "Our Social Media"];
  const itemsFAQ = [
    "Confirm Payment",
    "Delivery",
    "Return Product",
    "How to Order",
  ];
  const itemsContact = ["Jl.Bumi ke Mars no.1", "Our WhatssApp"];

  return (
    <div>
      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border border-t-1 border-black">
        <FooterDetail title="INFORMATION" items={itemsInformation} />
        <FooterDetail title="FAQ" items={itemsFAQ} />
        <FooterDetail title="CONTACT US" items={itemsContact} />
        <div>
          <h2 className="font-semibold">SUBSCRIBE TO NEW ARRIVAL</h2>
          <form className="my-2">
            <input
              type="email"
              placeholder="your email"
              className="text-sm w-full px-4 py-2 border-b-2 border-black focus:outline-none focus:border-t-2 focus:border-black relative"
            />
            <button className="bg-gray-900 px-6 py-2 my-2 text-white">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div className="text-center my-4">
        <p className="text-sm text-gray-700">
          &copy;2022 - Theoyoth - All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
