import { cn } from '@/helpers/TailwindUtils';
import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Loading = ({ size = 40, className }: { size?: number, className?: string }) => {
    return (
        <div className={cn('flex w-full items-center justify-center h-[500px] w-[500px]', className)} >
            <ClipLoader
                color={'#F8A43D'}
                loading={true}
                size={size}
                aria-label="Loading Spinner"
            />
        </div>
    )
}

export default Loading
