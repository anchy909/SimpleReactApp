import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  project: yup.string().required(),
  password: yup.string().min(8).max(32).required(),
});

export const FormComponent = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>Lets sign you in.</h2>
      <br />

      <input {...register("email")} placeholder="email" type="email" required />
      <p>{errors.email?.message}</p>
      <br />

      <input
        {...register("password")}
        placeholder="password"
        type="password"
        required
      />
      <p>{errors.password?.message}</p>

      <select
        name="color"
        id="color"
        {...register("project")}
        // value={project}
        //onChange={handleChange}
        //onBlur={handleBlur}
        // value={value}
        // onChange={(e) => setValue(e.target.value)}
        required

      >
        <option value="" label="Select a color"/>
        <option value="red" label="red" />
        <option value="blue" label="blue" />
        <option value="green" label="green" />
      </select>
      <p>{errors.project?.message}</p>
      <br />

      <button type="submit">Sign in</button>
    </form>
  );
};
