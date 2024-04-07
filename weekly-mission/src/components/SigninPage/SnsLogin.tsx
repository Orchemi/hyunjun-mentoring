import Link from "next/link";
import Image from "next/image";
import React from "react";
import kakao from "../../../public/images/kakao.png";
import google from "../../../public/images/google.png";
import styles from "./Form.module.css";

interface SnsLoginProps {
  children: React.ReactNode;
}
const SnsLogin = ({ children }: SnsLoginProps) => {
  return (
    <div className={styles.snsLogin}>
      <div>{children}</div>
      <div className={styles.snsBtn}>
        <Link href="https://www.kakaocorp.com/page">
          <Image src={kakao} alt="카카오톡 로그인" />
        </Link>
        <Link href="https://www.google.com">
          <Image src={google} alt="구글 로그인" />
        </Link>
      </div>
    </div>
  );
};

export default SnsLogin;
