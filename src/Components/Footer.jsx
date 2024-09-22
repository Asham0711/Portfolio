// import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn, FaXTwitter,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr/>
      <footer className="py-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://github.com/Asham0711" target="_blank">
                <FaGithub size={24} className="text-black hover:scale-110 duration-200 cursor-pointer"/>
              </a>
              <a href="https://x.com/asham0711" target="_blank">
                <FaXTwitter size={24} className="text-black hover:scale-110 duration-200 cursor-pointer"/>
              </a>
              <a href="https://www.instagram.com/__ash._______?utm_source=qr&igsh=bm81ejQwbHR2cXdv" target="_blank">
                <FaInstagram size={24} className="text-black hover:scale-110 duration-200 cursor-pointer"/>
              </a>
              <a href="https://www.linkedin.com/in/md-asham-imad-926316224/" target="_blank">
                <FaLinkedinIn size={24} className="text-black hover:scale-110 duration-200 cursor-pointer"/>
              </a>
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