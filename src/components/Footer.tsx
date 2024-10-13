import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d0d0d] py-10 text-center text-primary">
      <div className="social-media mb-5">
        <a href="#" className="mx-2"><img src="images/facebook.png" alt="Facebook" className="w-8 inline-block" /></a>
        <a href="#" className="mx-2"><img src="images/twitter.png" alt="Twitter" className="w-8 inline-block" /></a>
        <a href="#" className="mx-2"><img src="images/linkedin.png" alt="LinkedIn" className="w-8 inline-block" /></a>
      </div>
      <p>&copy; 2024 Heather Glenn - FM Payments. All rights reserved.</p>
    </footer>
  );
};

export default Footer;