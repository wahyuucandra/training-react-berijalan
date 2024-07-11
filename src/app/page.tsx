"use client"

import { useState } from "react";

export interface Todo {
  id: string;
  name: string;
  checkbox: boolean
}

export default function Home() {
  const [toDo, setToDo] = useState({
    id: "",
    name: "",
    checkbox: false
  });
  const [toDoList, setToDoList] = useState<Todo[]>();

  const addToDoList= () => {
    //setToDoList({
    //})
  }

  const setOnchangeId = (e: any) => {
    setToDo({
      ...toDo,
      id: e.target.value
    })
  }

  const setOnchangeName = (e: any) => {
    setToDo({
      ...toDo,
      name: e.target.value
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row gap-24">
        <div id="add-todo-list">
          <form onSubmit={addToDoList} className="flex flex-col gap-8">
            
            <label htmlFor="id">ID</label>
            <input className="text-black" value={toDo?.id} type="number" onChange={ e => setOnchangeId(e)}/>

            <label htmlFor="nama">Nama</label>
            <input className="text-black" value={toDo?.name} type="text" onChange={ e => setOnchangeName(e)}/>

            <button type="submit">Simpan</button>
          </form>
        </div>

        <div id="list-todo">
          <div>List To DO</div>
          {toDoList?.map((item) => {
            return (
              <div key={item.id}>
                <input type="checkbox" value={item.id}/>
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
