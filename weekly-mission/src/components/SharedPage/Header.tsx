"use client";
import logoImg from "@public/images/Linkbrary.png";
import "./Header.css";
import Folder from "./Folder";
import { useMediaQuery } from "react-responsive";
import { UserType, Owner } from "../../app/shared/page";
import Image from "next/image";
import Link from "next/link";
const profileAccount = ({ user }: { user: UserType | null }) => {
  if (!user) {
    return false;
  }
  const { email, profileImageSource } = user;
  return (
    <div className="profile-info">
      <img className="logo" src={profileImageSource} alt="프로필 이미지" />
      <div>{email}</div>
    </div>
  );
};

interface HeaderProps {
  user: UserType | null;
  folderName: string | null;
  owner: Owner | null;
}
function Header({ user, folderName, owner }: HeaderProps) {
  const isTablet = useMediaQuery({ maxWidth: 1199 });
  return (
    <>
      <nav className="nav">
        <div className={isTablet ? "gnb-width-apply" : "gnb"}>
          <Link href="/">
            <Image alt="로고이미지" src={logoImg} />
          </Link>
          {user ? profileAccount({ user }) : <button>Login</button>}
        </div>
      </nav>
      <Folder folderName={folderName} owner={owner} />
    </>
  );
}

export default Header;
