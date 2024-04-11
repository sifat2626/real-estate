import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-cozy-green text-white mt-16">
      <div className="custom-container pt-16">
        <div className="grid grid-cols-6 gap-y-8">
          <div className="col-span-3 lg:col-span-2 flex flex-col gap-2">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Selling</a>
            <a className="link link-hover">Renting</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div className="col-span-3 lg:col-span-2 flex flex-col gap-2">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div className="col-span-3 lg:col-span-2">
            <h6 className="footer-title">Social</h6>
            <div className="flex gap-4 text-3xl lg:mt-6">
              <a className="link link-hover">
                <FaTwitter />
              </a>
              <a className="link link-hover">
                <FaYoutube />
              </a>
              <a className="link link-hover">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center pt-12 pb-2 font-semibold text-sm font-mon">
          Copyright © 2024 - All right reserved by CozyCrest
        </p>
      </div>
    </div>
  );
}

export default Footer;
