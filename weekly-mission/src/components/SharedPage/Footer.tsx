"use client";

import insta from "@public/images/ant-design_instagram-filled.png";
import youtube from "@public/images/akar-icons_youtube-fill.png";
import twitter from "@public/images/akar-icons_twitter-fill.png";
import facebook from "@public/images/akar-icons_facebook-fill.png";
import { useMediaQuery } from "react-responsive";
import "./Footer.css";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  const isTablet = useMediaQuery({ maxWidth: 1124 });
  return (
    <footer className={isTablet ? "footer-tablet" : "footer"}>
      <div className="footer-container">
        <div>©codeit - 2023</div>
        <div className="policy-faq">
          <Link href="/">
            <span>Privacy Policy</span>
          </Link>
          <Link href="/">
            <span>FAQ</span>
          </Link>
        </div>
        <div className="sns">
          <Link href="https://www.facebook.com">
            <Image src={facebook} alt="facebook" />
          </Link>
          <Link href="https://www.twitter.com">
            <Image src={twitter} alt="twitter" />
          </Link>
          <Link href="https://www.youtube.com">
            <Image src={youtube} alt="youtube" />
          </Link>
          <Link href="https://www.instagram.com">
            <Image src={insta} alt="insta" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
