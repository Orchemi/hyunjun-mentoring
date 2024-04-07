"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.css";
import Input from "../Input/Input";
import SnsLogin from "./SnsLogin";
import Button from "../common/Button";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { FORM_SCHEMA } from "../../constants/formSchema";

const Form = () => {
  const router = useRouter();
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(FORM_SCHEMA) });

  const onSubmit = async (data: any) => {
    const { email, password } = data;
    try {
      const response = await axios.post(
        "https://bootcamp-api.codeit.kr/api/sign-in",
        { email, password }
      );
      if (response.data.data.accessToken) {
        localStorage.setItem("accessToken", response.data.data.accessToken);
      }
      console.log(response);
      if (response.status === 200) {
        router.push("/folder");
      }
    } catch (error) {
      throw new Error("로그인 실패");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">이메일</label>
        <Input
          register={register}
          errors={errors.email}
          type="email"
          placeholder="이메일을 입력해주세요."
        />
        <label htmlFor="password">비밀번호</label>
        <Input
          register={register}
          errors={errors.password}
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
        {pathname === "/signup" && (
          <label htmlFor="passwordConfirm">비밀번호 확인</label>
        )}
        {pathname === "/signup" && (
          <Input
            register={register}
            errors={errors.passwordConfirm}
            type="passwordConfirm"
            placeholder="비밀번호와 일치하는 값을 입력해 주세요."
          />
        )}
        <Button>{pathname === "/signin" ? "로그인" : "회원가입"}</Button>
        <SnsLogin>
          {pathname === "/signin" ? "소셜 로그인" : "다른 방식으로 가입하기"}
        </SnsLogin>
      </form>
    </div>
  );
};

export default Form;
