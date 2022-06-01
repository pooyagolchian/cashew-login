import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e: { target: { value: string } }) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: { target: { value: string } }) => {
    setPassword(e.target.value);
  };
  const validationSchema = yup.object().shape({
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(15, "Password must not exceed 15 characters"),
  });

  interface UserSubmitForm {
    email: string;
    password: string;
  }
  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  return (
    <div className="col col-12 col-sm-12 col-md-6 m-0 m-auto pt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="col col-12">
          <label className="form-label">Email</label>
          <input
            type="text"
            value={email}
            {...register("email")}
            onChange={handleEmail}
            placeholder="Email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            autoComplete="off"
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
        <div className="col col-12 mt-3">
          <label className="form-label">Password</label>
          <input
            {...register("password")}
            onChange={handlePassword}
            type="password"
            value={password}
            placeholder="Password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            autoComplete="off"
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>

        <div className="col col-12 mt-3">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
