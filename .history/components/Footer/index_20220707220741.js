import { FooterDetail } from "../Reuse";

const Footer = () => {
  const itemsInformation = ["About Us", "Our Social Media"];
  const itemsFAQ = [
    "Confirm Payment",
    "Delivery",
    "Return Product",
    "How to Order",
  ];
  const itemsContact = ["Jl.Bumi ke Mars no.1", "Our WhatssApp", "Email"];

  return (
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
            className="text-sm w-full px-4 py-2 border-b-2 border-black active:border-none"
          />
        </form>
      </div>
    </div>
  );
};

export default Footer;
