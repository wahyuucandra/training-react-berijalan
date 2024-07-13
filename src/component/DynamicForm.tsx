import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form';
import { text } from 'stream/consumers';
import * as yup from "yup";

const dynamicSchema = yup.object({
    data: yup.array().of(
        yup.object().shape({
            text: yup.string().required()
        })
    ).min(1),
})

function DynamicForm() {
    const {control, register} = useForm({
        resolver: yupResolver(dynamicSchema),
        defaultValues: {
            data: [
                {
                    text: ""
                }
            ]
        }
    })

    const {fields, append} = useFieldArray({control, name: "data"})

  return (
    <section className='flex flex-col gap-6 justify-end'>
        {
            fields.map((field, index) => (
                <div key={field.id}>
                    <input className='text-black' {...register(`data.${index}.text`)}></input>
                </div>
            ))
        }
        <button className="bg-white rounded mt-[10px] text-black px-5 py-1" onClick={() => {
            append({text: ""})
        }}>Tambah</button>
    </section>
  )
}

export default DynamicForm