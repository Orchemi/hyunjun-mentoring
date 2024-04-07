"use client";

import logoImg from "../../../public/images/Linkbrary.png";
import "./FolderHeader.css";
import AddLink from "./AddLink";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { User } from "../../api/user/getUser.api";
import { Nullable } from "../../types/common/common.type";
interface Props {
  user: Nullable<User>;
  isShowModal?: (modalState: {
    linkModal: boolean;
    folderAddModal: boolean;
  }) => void;
}

export interface UserData {
  data: Datum[];
}

interface Datum {
  id: number;
  created_at: Date;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}
const profileAccount = ({ user }: Props) => {
  if (!user) {
    return false;
  }

  return (
    <div className="profile-info">
      <img className="logo" src={user?.image_source} alt="프로필 이미지" />
      <div>{user?.email}</div>
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
            {user ? (
              profileAccount({ user })
            ) : (
              <button type="submit">Login</button>
            )}
          </div>
        </nav>
      </form>
      <AddLink setIsShowModal={isShowModal} />
    </>
  );
};

export default FolderHeader;
