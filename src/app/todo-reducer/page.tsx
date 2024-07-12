"use client";

import { ListForm } from "@/component/ListForm";
import { TodoForm } from "@/component/TodoForm";

export default function Todo() {
  return (
    <div className="w-screen h-screen flex flex-col gap-6 justify-center items-center">
      <TodoForm />
      <ListForm />
    </div>
  );
}
