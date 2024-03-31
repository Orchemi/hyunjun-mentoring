"use client";
import "../../../globals.css";
import FolderHeader from "@components/FolderPage/FolderHeader";
import Input from "@components/SharedPage/Input";
import FolderCard from "@components/FolderPage/FolderCard";
import Footer from "@components/SharedPage/Footer";
import {
  useFolderCardDataFetch,
  useSortedMenusDataFetch,
  useAllMenuDataFetch,
} from "@apis/fetchFolder.api";
import SortedMenus from "@components/FolderPage/SortedMenus";
import { useMediaQuery } from "react-responsive";
import shareImg from "@public/images/share.png";
import deleteImg from "@public/images/delete.png";
import penImg from "@public/images/pen.png";
import Modal from "@components/Modal/Modal";
import Image from "next/image";
import Link from "next/link";
import { useFolderState } from "@/hooks/useFolderState";
import { USER_API_URL } from "@constants/url.constant";
import { User, getUser } from "@/apis/user/getUser.api";
import { useEffect, useState } from "react";
import { Nullable } from "@/types/@common/common.type";

export type LinkAddModal = {
  linkModal: boolean;
  folderAddModal: boolean;
  shareAddModal?: boolean;
  editAddModal?: boolean;
  deleteAddModal?: boolean;
  linkDeleteModal?: boolean;
  dataUrl?: string;
};
function FolderPage() {
  const isTablet = useMediaQuery({ maxWidth: 1124 });
  // const isMobile = useMediaQuery({ maxWidth: 767 });
  const {
    folderName,
    setFolderName,
    menusId,
    setAllMenuId,
    subUrl,
    setSubUrl,
    addModal,
    setAddModal,
    linkInput,
    setLinkInput,
  } = useFolderState();

  const [user, setUser] = useState<Nullable<User>>(null);

  useEffect(() => {
    const init = async () => {
      const user = await getUser(2);
      setUser(user);
    };

    init();
  }, []);

  const { data: sortedAllMenus } = useSortedMenusDataFetch(
    USER_API_URL.SORTED_ALL_MENU
  );

  const { data: folderData } = useFolderCardDataFetch(subUrl);
  const { data: allMenuData } = useAllMenuDataFetch(USER_API_URL.ALL_MENU);

  console.log(user); //로그인 부분
  console.log(sortedAllMenus); //'전체' 메뉴 제외한 메뉴들
  console.log(folderData); // '전체' 메뉴 제외한 메뉴들 데이터
  console.log(allMenuData); // '전체' 메뉴 데이터

  const handleGetFolderId = (id: number | undefined) => {
    setAllMenuId(id);
  };

  const handleChangeUrl = (url: string) => {
    setSubUrl(url);
  };

  const handlePrintFolderName = (name: string) => {
    setFolderName(name);
  };
  const isShowModal = (linkAddModal: LinkAddModal) => {
    setAddModal(linkAddModal);
  };

  const isShareModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    isShowModal({
      linkModal: false,
      folderAddModal: false,
      shareAddModal: true,
    });
  };

  const isEditModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    isShowModal({
      linkModal: false,
      folderAddModal: false,
      shareAddModal: false,
      editAddModal: true,
    });
  };

  const isDeleteModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    isShowModal({
      linkModal: false,
      folderAddModal: false,
      shareAddModal: false,
      editAddModal: false,
      deleteAddModal: true,
    });
  };

  const handleChangeInput = (data: string) => {
    setLinkInput(data);
  };

  return (
    <div className="App">
      <div
        className={
          Object.values(addModal).some((value) => value === true)
            ? "background-container"
            : ""
        }
      ></div>
      <div className="page-container">
        <FolderHeader user={user} isShowModal={isShowModal} />
        {addModal.linkModal ? (
          <Modal
            title="폴더에 추가"
            folderData={folderData?.data}
            folderMenus={sortedAllMenus?.data}
            isShowModal={isShowModal}
            linkAddModal={addModal.linkModal}
          />
        ) : null}
        {addModal.folderAddModal ? (
          <Modal
            title="폴더 추가"
            folderData={folderData?.data}
            folderMenus={sortedAllMenus?.data}
            isShowModal={isShowModal}
            folderAddModal={addModal.folderAddModal}
          />
        ) : null}
        {addModal.shareAddModal ? (
          <Modal
            title="폴더 공유"
            folderData={folderData?.data}
            folderMenus={sortedAllMenus?.data}
            isShowModal={isShowModal}
            shareModal={addModal.shareAddModal}
            menusId={menusId}
          />
        ) : null}
        {addModal.editAddModal ? (
          <Modal
            title="폴더 이름 변경"
            folderData={folderData?.data}
            folderMenus={sortedAllMenus?.data}
            isShowModal={isShowModal}
            editModal={addModal.editAddModal}
          />
        ) : null}

        {addModal.deleteAddModal ? (
          <Modal
            title="폴더 삭제"
            folderData={folderData?.data}
            folderMenus={sortedAllMenus?.data}
            isShowModal={isShowModal}
            deleteModal={addModal.deleteAddModal}
          />
        ) : null}
        {addModal.linkDeleteModal ? (
          <Modal
            title="링크 삭제"
            folderData={folderData?.data}
            folderMenus={sortedAllMenus?.data}
            isShowModal={isShowModal}
            linkDeleteModal={addModal.linkDeleteModal}
            dataUrl={addModal.dataUrl}
          />
        ) : null}

        <Input linkInput={linkInput} handleChangeInput={handleChangeInput} />
        <SortedMenus
          menusData={sortedAllMenus?.data}
          onClickSubMenu={handleGetFolderId}
          allMenuData={allMenuData?.data}
          onChangeUrl={handleChangeUrl}
          onChangeTitle={handlePrintFolderName}
          isShowModal={isShowModal}
        />

        <div
          className={isTablet ? "titleAndToolBar-tablet" : "titleAndToolBar"}
        >
          <h2 className={isTablet ? "title-tablet" : "title"}>{folderName}</h2>
          <div className={isTablet ? "tool-tablet" : "tool"}>
            <Link href="/" onClick={isShareModal}>
              <Image width={20} height={20} src={shareImg} alt="공유 버튼" />
              공유
            </Link>
            <Link href="/" onClick={isEditModal}>
              <Image width={20} height={20} src={penImg} alt="이름 변경 버튼" />
              이름 변경
            </Link>
            <Link href="/" onClick={isDeleteModal}>
              <Image width={20} height={20} src={deleteImg} alt="삭제 버튼" />
              삭제
            </Link>
          </div>
        </div>
        <FolderCard
          data={folderData?.data}
          isShowModal={isShowModal}
          allMenuData={allMenuData?.data}
          linkInput={linkInput}
        />
        <Footer />
      </div>
    </div>
  );
}

export default FolderPage;
