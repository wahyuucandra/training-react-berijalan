'use client'

import React from 'react'

export default function Input(props: any) {
    return (
        <div>
            <label htmlFor='input'>{props.label}</label>
            <input className='rounded bg-black' type="text" value={props.value} onChange={(e) => props.onChange(e.target.value)}/>
        </div>
    )
  }
