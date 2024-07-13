"use client";

import { ITodo } from "@/interface/todo";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { addTodo } from "@/reducer/todoSlice";

const todoSchema = yup.object({
  text: yup.string().required(),
});

export const TodoForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(todoSchema),
  });

  function handleAddTodo(data: any) {
    if (data.text) {
      const newTodo: ITodo = { id:Math.random(), name: data.text, checkbox: false };
      dispatch(addTodo(newTodo));
    }
  }

  const onSubmit = (data: any) => {
    handleAddTodo(data);
    reset();
  };

  return (
    <section className="todo__form w-[500px] h-[500px]">
      <div className="font-bold text-xl text-center p-[20px] border border-b-2 border-white">Add Todo</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 rounded border border-white p-[20px]"
      >
        <input
          {...register("text")}
          type="text"
          className="text-black border border-white rounded"
        />
        <button className="bg-white rounded mt-[10px] text-black px-5 py-1">
          Submit
        </button>
      </form>
    </section>
  );
};
