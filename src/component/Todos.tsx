'use client'

import { TodoForm } from "@/component/UseForm/TodoForm";
// import ListForm from "@/component/UseForm/ListForm";
// import { ListForm as ListFormRedux } from "@/component/Redux/ListForm";
// import { TodoForm as TodoFormRedux} from "@/component/Redux/TodoForm";
import { useSelector } from "react-redux";
import Loading from "@/component/Loading";
import dynamic from "next/dynamic";
import { RootState } from "@/app/store";

export default function Todos() {
  const { todos } = useSelector((state: RootState) => state.todo);
  const ListFormData = dynamic(() =>  import('../component/UseForm/ListForm'), { 
    loading: () => <Loading/>,
    ssr: false 
  })

  return (
    <main className="w-screen h-screen flex flex-col gap-[50px] justify-center items-center">
      {/* Redux */}
      {/* <TodoFormRedux />
      <ListFormRedux /> */}

      {/* Hook Form */}
      <TodoForm />
      {
        todos.length > 0 ? (
          <ListFormData />
        ) : (
            <div>Is Empty Todos</div>
        )
      }
    </main>
  );
}
