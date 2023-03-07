import { useForm } from "react-hook-form";
import "./styles.css";

export default function App() {
  /* useFormから関数をimport */
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => console.log("onSubmit:", data);

  return (
    /* handleSubmitはフォームの入力内容を検証したうえで、引数に渡した関数(onSubmit)を実行 */
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstName", { required: true, maxLength: 15 })} />
      {errors.firstName?.type === "maxLength" && (
        <p>15文字以内で入力してください</p>
      )}
      {errors.firstName?.type === "required" && <p>名は入力必須です</p>}
      <label>Last Name</label>
      <input {...register("lastName", { required: true, maxLength: 15 })} />
      {errors.lastName?.type === "maxLength" && (
        <p>15文字以内で入力してください</p>
      )}
      {errors.lastName?.type === "required" && <p>姓は入力必須です</p>}
      <label>Nick Name</label>
      <input {...register("nickName")} />
      <label>Email</label>
      <input
        {...register("email", {
          required: true,
          pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)/
        })}
      />
      {errors.email?.type === "required" && <p>メールアドレスは必須です</p>}
      {errors.email?.type === "pattern" && (
        <p>正しいメールアドレスを入力してください</p>
      )}
      <label>Age</label>
      <input {...register("age")} />
      <input type="submit" value="submit" />
    </form>
  );
}
