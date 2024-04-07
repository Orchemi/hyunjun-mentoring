import styles from "./Input.module.css";
import eyeOn from "../../../public/images/eye-on.png";
import eyeOff from "../../../public/images/eye-off.png";

import { useState } from "react";
import Image from "next/image";
import { UseFormRegister } from "react-hook-form";

interface InputType {
  errors: any;
  register: UseFormRegister<{
    passwordConfirm?: string;
    email: string;
    password: string;
  }>;
  type: string;
  placeholder: string;
}

const Input = ({ type, placeholder, register, errors }: InputType) => {
  const [isEyeOn, setIsEyeOn] = useState(true);

  const onChangeEye = () => {
    setIsEyeOn(!isEyeOn);
  };

  return (
    <div className={styles.container}>
      {type === "email" && (
        <input
          className={`${styles.input} ${styles.email}`}
          {...register("email")}
          placeholder={placeholder}
        />
      )}

      {type === "password" && (
        <>
          <input
            type={isEyeOn ? "password" : "text"}
            className={`${styles.input} ${styles.password}`}
            {...register("password")}
            placeholder={placeholder}
          />
          <Image
            width={25}
            className={styles.eye}
            src={isEyeOn ? eyeOn : eyeOff}
            onClick={onChangeEye}
            alt="비밀번호 보기"
          />
        </>
      )}

      {type === "passwordConfirm" && (
        <>
          <input
            type={isEyeOn ? "password" : "text"}
            className={`${styles.input} ${styles.password}`}
            {...register("passwordConfirm")}
            placeholder={placeholder}
          />
          <Image
            width={25}
            className={styles.eye}
            src={isEyeOn ? eyeOn : eyeOff}
            onClick={onChangeEye}
            alt="비밀번호 보기"
          />
        </>
      )}
      {errors && (
        <small className={styles.errorMessage} role="alert">
          {errors.message}
        </small>
      )}
    </div>
  );
};

export default Input;
