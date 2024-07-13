import { RootState } from "../../app/store";
import { ITodo } from "@/interface/todo";
import { addTodo, setText } from "@/reducer/todoSlice";
import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

export const TodoForm = () => {
  const { form } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  function onChange(e: FormEvent<HTMLInputElement>) {
    dispatch(setText(e.currentTarget.value));
  }

  function handleAddTodo() {
    if (form.name) {
      const newTodo: ITodo = { id:Math.random(), name: form.name, checkbox: false };
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
        className="flex flex-col gap-6 rounded border border-white p-[20px]"
      >
        <input
          type="text"
          value={form.name}
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
