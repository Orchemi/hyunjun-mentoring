import { useForm } from "react-hook-form";
import { Title } from "../../components/SigninPage/Title";
import Form from "../../components/SigninPage/Form";
import styles from "./signin.module.css";
export default function SigninPage() {
  return (
    <div className={styles.container}>
      <Title text="회원이 아니신가요?" btn="회원 가입하기" />
      <Form />
    </div>
  );
}
