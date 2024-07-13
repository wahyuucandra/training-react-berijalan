import { setCheckBox } from "@/reducer/todoSlice";
import { RootState } from "../../app/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const ListForm = () => {
  const { todos } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  function changeCheckbox(id: number) {
    dispatch(setCheckBox(id));
  }

  return (
    <section className="todo__list text rounded border border-white w-[500px] h-[500px] overflow-auto">
      <div className="font-bold text-xl text-center p-[20px] border border-b-2 border-white">
        To Do List
      </div>
      <div className="p-[20px]">
        {todos.map((item, _) => (
          <div key={item.id} className="text-white flex gap-2">
            <input
              type="checkbox"
              checked={item.checkbox}
              onChange={() => changeCheckbox(item.id)}
            />
            <p className={item.checkbox ? "line-through" : ""}>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
