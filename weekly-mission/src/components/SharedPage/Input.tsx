"use client";
import imgSrc from "@public/images/Search.png";
import "./Header.css";
import { useMediaQuery } from "react-responsive";
import closeImg from "@public/images/close.png";
import Image from "next/image";
interface InputProps {
  linkInput?: string;
  handleChangeInput?: (data: string) => void;
}

function Input({ linkInput, handleChangeInput }: InputProps) {
  const handleResetLink = () => {
    if (handleChangeInput) {
      handleChangeInput("");
    }
  };
  const handleChangeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (handleChangeInput) {
      handleChangeInput(e.target.value);
    }
  };
  const isTablet = useMediaQuery({ maxWidth: 1199 });

  return (
    <div className={isTablet ? "search-tablet-box" : "search-box"}>
      <form>
        <label>
          <Image
            width={15}
            height={15}
            className="search-img"
            src={imgSrc}
            alt="검색"
          />
          <input
            value={linkInput}
            onChange={handleChangeLink}
            className={isTablet ? "search-tablet" : "search"}
            placeholder="링크를 검색해 보세요."
          ></input>
          <Image
            width={20}
            height={20}
            onClick={handleResetLink}
            className="close-img"
            src={closeImg}
            alt="지우기"
          />
        </label>
      </form>
    </div>
  );
}

export default Input;
