import React from "react";
import { useForm } from "react-hook-form";

export default function App() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));
  console.log(watch("exampleRequired"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name='name' placeHolder='psuedonym' {...register("example")} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input  {...register("exampleRequired", { required: true })} />    
      {errors.exampleRequired && <span>This field is required</span>}
      <button type="submit">comment</button>
    </form>
  );
}