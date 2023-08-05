import { FooterDetail } from "../Reuse";

const Footer = () => {
  const itemsInformation = ["About Us", "Our Social Media"];
  const itemsFAQ = [
    "Confirm Payment",
    "Delivery",
    "Return Product",
    "How to Order",
  ];
  const itemsContact = ["Our WhatssApp", "Email"];

  return (
    <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border border-t-1 border-black">
      <FooterDetail title="INFORMATION" items={itemsInformation} />
      <div>
        <h2 className="font-semibold">INFORMATION</h2>
        <ul className="text-sm my-2">
          <li>About Us</li>
          <li>Our Social Media</li>
        </ul>
      </div>
      <div>
        <h2>FAQ</h2>
        <ul>
          <li>Confirm Payment</li>
          <li>Delivery</li>
          <li>Return Product</li>
          <li>How to Order</li>
        </ul>
      </div>
      <div>
        <h2>CONTACT US</h2>
        <ul>
          <li>Our WhatssApp</li>
          <li>Email</li>
        </ul>
      </div>
      <div>
        <h2>SUBSCRIBE TO NEW ARRIVAL</h2>
        <form>
          <input type="email" placeholder="your email" />
        </form>
      </div>
    </div>
  );
};

export default Footer;
