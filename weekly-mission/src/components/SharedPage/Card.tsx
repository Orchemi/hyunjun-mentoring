"use client";

import "./Card.css";
import { useMediaQuery } from "react-responsive";
import noImg from "@public/images/noImage.png";
import kebab from "@public/images/kebab.png";
import { Links } from "../../app/shared/page";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  links: Links[];
};
type CardItemsProps = {
  link: Links;
  url: string;
};
function Card({ links }: CardProps) {
  const isTablet = useMediaQuery({ maxWidth: 1124 });

  const formatDate = (value: string) => {
    const date = new Date(Number(value));
    const now = new Date();

    const minuteInMillis = 60 * 1000;
    const hourInMillis = 60 * minuteInMillis;
    const dayInMillis = 24 * hourInMillis;
    const monthInMillis = 30 * dayInMillis;

    const elapsedMillis: number = Number(now) - Number(date);

    if (elapsedMillis < minuteInMillis) {
      const minutes = Math.floor(elapsedMillis / 1000 / 60);
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (elapsedMillis <= hourInMillis) {
      const hours = Math.floor(elapsedMillis / 1000 / 60 / 60);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (elapsedMillis <= dayInMillis) {
      const hours = Math.floor(elapsedMillis / 1000 / 60 / 60);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (elapsedMillis <= monthInMillis) {
      const days = Math.floor(elapsedMillis / 1000 / 60 / 60 / 24);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (elapsedMillis <= 11 * monthInMillis) {
      const months = Math.floor(elapsedMillis / 1000 / 60 / 60 / 24 / 30);
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else if (elapsedMillis <= 12 * monthInMillis) {
      return "1 year ago";
    } else {
      const years = Math.floor(elapsedMillis / 1000 / 60 / 60 / 24 / 30 / 12);
      return `${years} year${years > 1 ? "s" : ""} ago`;
    }
  };
  const getFormatDate = (createdAt: string) => {
    const date = new Date(createdAt);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
  const CardItem = ({ link, url }: CardItemsProps) => {
    const timeStamp = new Date(link.createdAt).getTime();

    return (
      <Link className="card-url" href={url} target="_blank" rel="noreferrer">
        {link.imageSource ? (
          <Image
            className="card-image"
            width={340}
            height={200}
            src={link.imageSource}
            alt="카드 이미지"
          />
        ) : (
          <Image width={340} height={200} src={noImg} alt="이미지 없음" />
        )}
        <div className="date-and-kebab">
          <p>{formatDate(timeStamp.toString())}</p>
          <Image
            width={21}
            height={17}
            className="kebab"
            src={kebab}
            alt="더 보기"
          />
        </div>
        <p className="title">{link.title}</p>
        <p className="description">{link.description}</p>
        <p>{getFormatDate(link.createdAt.toString())}</p>
      </Link>
    );
  };
  const linksArray = links || [];
  return (
    <article className={isTablet ? "article-box-tablet" : "article-box"}>
      <div className={isTablet ? "card-container-tablet" : "card-container"}>
        {linksArray.map((link) => {
          return (
            <div className="card-box" key={link.id}>
              <CardItem link={link} url={link.url} />
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default Card;
