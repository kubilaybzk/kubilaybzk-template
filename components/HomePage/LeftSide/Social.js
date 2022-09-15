import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaMediumM,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
export default function Social() {
  return (
    <div className="flex flex-row gap-x-[15px]">
      <Link href={"https://www.linkedin.com/in/kubilaybozak/"}>
        <a className="LeftSocialContainer cursor-pointer">
          <FaLinkedinIn className="dark:text-white" />
        </a>
      </Link>
      <Link href={"https://github.com/kubilaybzk"}>
        <a className="LeftSocialContainer cursor-pointer">
          <FaGithub className="dark:text-white" />
        </a>
      </Link>
      <Link href={"https://medium.com/@kubilaybozak"}>
        <a className="LeftSocialContainer cursor-pointer">
          <FaMediumM className="dark:text-white" />
        </a>
      </Link>
      <Link href={"https://www.instagram.com/kubilaybzk/"}>
        <a className="LeftSocialContainer cursor-pointer">
          <AiFillInstagram className="dark:text-white" />
        </a>
      </Link>
      <Link href={"https://twitter.com/KubilayBzk"}>
        <a className="LeftSocialContainer cursor-pointer">
          <FaTwitter className="dark:text-white" />
        </a>
      </Link>
      <Link href={"https://tr-tr.facebook.com/Kubilaybzk/"}>
        <a className="LeftSocialContainer cursor-pointer">
          <FaFacebookF className="dark:text-white" />
        </a>
      </Link>
    </div>
  );
}
