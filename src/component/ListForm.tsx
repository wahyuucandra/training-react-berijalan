import { setCheckBox } from "@/reducer/todoSlice";
import { RootState } from "../app/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const ListForm = () => {
  const { todos } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  function changeCheckbox(name: string) {
    dispatch(setCheckBox(name));
  }

  return (
    <section className="todo__list text rounded border border-white p-[20px] h-500px overflow-auto">
      <div className="font-bold text-xl mb-2">To Do List</div>
      {todos.map((item, index) => (
        <div key={index} className="text-white flex gap-2">
          <input type="checkbox" checked={item.checkbox} onChange={() => changeCheckbox(item.name)}/>
          <p className={item.checkbox ? "line-through" : ""}>{item.name}</p>
        </div>
      ))}
    </section>
  );
};
