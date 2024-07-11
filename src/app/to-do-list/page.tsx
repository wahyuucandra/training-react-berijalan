"use client";

import React, { useState } from "react";

export interface Todo {
  name: string;
  checkbox: boolean;
}

export default function TodoList() {
  const [toDo, setToDo] = useState({
    name: "",
    checkbox: false,
  });
  const [toDoList, setToDoList] = useState<Todo[]>([]);

  const addToDoList = () => {
    setToDoList([...toDoList, toDo]);
    setToDo({
      name: "",
      checkbox: false,
    });
  };

  const setOnchangeName = (e: any) => {
    setToDo({
      ...toDo,
      name: e.target.value,
    });
  };

  const changeValueCheckbox= (data: any) => {
    const temp = toDoList.map(item => {
      if(item.name == data){
        item.checkbox = !item.checkbox
      }
      return item
    })

    setToDoList(temp)
  };

  return (
    <div className="mx-auto w-full">
      <div className="flex flex-row gap-[300px] justify-center mt-[100px]">
        <div id="add-todo-list border border-white">
          <form className="flex flex-col gap-8">
            <label htmlFor="nama">Todo</label>
            <input
              className="text-black"
              value={toDo?.name}
              type="text"
              onChange={(e) => setOnchangeName(e)}
            />

            <button
              className="rounded-lg py-3 px-2 bg-white text-black"
              type="button"
              onClick={() => addToDoList()}
            >
              Simpan
            </button>
          </form>
        </div>

        <div id="list-todo border border-white">
          <div>List To DO</div>
          {toDoList?.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex gap-2">
                  <input type="checkbox" checked={item.checkbox} onChange={() => changeValueCheckbox(item.name)}/>
                  <p className={item.checkbox ? "line-through" : ""}>{item.checkbox + item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
