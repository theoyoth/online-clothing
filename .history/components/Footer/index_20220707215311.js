const Footer = () => {
  return (
    <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border border-t-1 border-black">
      <div>
        <h2>INFORMATION</h2>
        <ul>
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
        <h2>HELP</h2>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
