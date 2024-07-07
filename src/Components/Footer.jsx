import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr/>
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <FaFacebook size={24} className="text-green-500 hover:scale-110 duration-200 cursor-pointer"/>
              <FaTwitter size={24} className="text-green-500 hover:scale-110 duration-200 cursor-pointer"/>
              <FaInstagram size={24} className="text-green-500 hover:scale-110 duration-200 cursor-pointer"/>
              <FaLinkedinIn size={24} className="text-green-500 hover:scale-110 duration-200 cursor-pointer"/>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Md Asham Imad. All rights reserved.
              </p>
              <p className="text-sm">Created By ❤️ Asham</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;