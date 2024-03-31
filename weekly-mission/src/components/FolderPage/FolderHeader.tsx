"use client";

import logoImg from "@public/images/Linkbrary.png";
import "./FolderHeader.css";
import AddLink from "./AddLink";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { User } from "@/apis/user/getUser.api";
import { Nullable } from "@/types/@common/common.type";
interface Props {
  user: Nullable<User>;
  isShowModal?: (modalState: {
    linkModal: boolean;
    folderAddModal: boolean;
  }) => void;
}

const profileAccount = ({ imageSource, email }: User) => {
  return (
    <div className="profile-info">
      <img className="logo" src={imageSource} alt="프로필 이미지" />
      <div>{email}</div>
    </div>
  );
};
const FolderHeader: React.FC<Props> = ({ user, isShowModal }) => {
  const isTablet = useMediaQuery({ maxWidth: 1199 });

  return (
    <>
      <form>
        <nav className="folder-nav">
          <div className={isTablet ? "gnb-width-apply" : "gnb"}>
            <a href="/">
              <Image alt="로고이미지" src={logoImg} />
            </a>
            {user ? profileAccount(user) : <button type="submit">Login</button>}
          </div>
        </nav>
      </form>
      <AddLink setIsShowModal={isShowModal} />
    </>
  );
};

export default FolderHeader;
