import React, { useState } from 'react'

const AddStudentsForm = () => {
    const [userName, setUserName] = useState<String>("")
    // const [result , setResult] = useState<String>("")
    const Result = [
        {
            id: 1,
            label: "Riya - Dubai 1234"
        },
        {
            id: 2,
            label: "Riya - Dubai 1234"
        },
        {
            id: 3,
            label: "Riya - Dubai 1234"
        },
        {
            id: 4,
            label: "Riya - Dubai 1234"
        },
    ]

    return (
        <form action="" className='space-y-[24px]'

        >

            {/* title row */}
            <ul className='max-w-[478px] max-h-[68px] h-[68px] text-[14px] leading-[21px] font-normal text-darkGray'>
                <li className=''>User Name</li>
                <li className=''>
                    <input
                        onChange={(e) => {
                            setUserName(e?.target?.value)
                        }}
                        placeholder='Search By Name Or Student ID'
                        type="text"
                        className='w-[478px] h-[43px] mt-[4px] rounded-[4px] border-[0.5] border border-gray3 p-2 b-2'
                    />
                </li>
            </ul>

            {/* Result row */}
            <ul className='max-w-[478px] text-darkGray font-normal text-[14px] leading-[21px]'>
                <li className=''>Result</li>
                <li className='py-[11px] mt-[4px] px-[21px] border-[0.5px] rounded-[4px] border-gray3'>
                    {
                        Result.map((res: any, i: number) => {
                            return (
                                <label htmlFor={i.toString()}
                                    key={i}
                                >
                                    <ul
                                        className='flex items-center font-normal text-gray3 space-x-[16px]'
                                    >
                                        <li>
                                            <input type="checkbox" className='accent-primary hover:accent-primary' name="" id="" />
                                        </li>
                                        <li>
                                            {res?.label}
                                        </li>
                                    </ul>
                                </label>
                            )
                        })
                    }
                </li>
            </ul>

            {/* or */}

        </form>
    )
}

export default AddStudentsForm
