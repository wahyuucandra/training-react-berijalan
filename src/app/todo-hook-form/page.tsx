"use client";

import { TodoForm } from '@/component/UseForm/TodoForm'
import { RootState } from "../store";
import React from 'react'
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import Loading from '@/component/Loading';

function tugas2() {
  const { todos } = useSelector((state: RootState) => state.todo);
  const ListFormData = dynamic(() =>  import('../../component/UseForm/ListForm'), { 
    loading: () => <Loading/>,
    ssr: false 
  })
  
  return (
    <div className="w-screen h-screen flex flex-row gap-[50px] justify-center items-center">
      <TodoForm />
      {
        todos.length > 0 && (
          <ListFormData />
        )
      }
    </div>
  )
}

export default tugas2