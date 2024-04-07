import Image from "next/image";
import logo from "../../../public/images/Linkbrary.png";
import Link from "next/link";
import styles from "./Title.module.css";
import SignupPage from "../../app/signup/page";

interface TitleProps {
  text: string;
  btn: string;
}
export const Title = (props: TitleProps) => {
  return (
    <div className={styles.title}>
      <Image width={210} height={38} src={logo} alt="linkbrary" />
      <div>
        <span>{props.text} </span>
        <Link
          className={styles.signupBtn}
          href={props.btn === "회원 가입하기" ? "/signup" : "/signin"}
        >
          {props.btn}
        </Link>
      </div>
    </div>
  );
};
