import { RootState } from "../app/store";
import { ITodo } from "@/interface/todo";
import { setText, addTodo } from "@/reducer/todoSlice";
import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

export const TodoForm = () => {
  const { form } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  function onChange(e: FormEvent<HTMLInputElement>) {
    dispatch(setText(e.currentTarget.value));
  }

  function handleAddTodo() {
    if (form.text) {
      const newTodo: ITodo = { name: form.text, checkbox: false };
      dispatch(addTodo(newTodo));
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    handleAddTodo();
  }
  return (
    <section className="todo__form">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-6 rounded border border-white p-6"
      >
        <input
          type="text"
          className="text-black border border-white rounded"
          onChange={(e) => onChange(e)}
        />
        <button className="bg-white rounded mt-[10px] text-black px-5 py-1">
          Submit
        </button>
      </form>
    </section>
  );
};
