import { useState } from "react"
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";

const CreateAssignmentForm = () => {

    const [type, setType] = useState<string>("task")

    return (
        <form action="" className='space-y-[24px]'>

            {/* title row */}
            <ul className='max-w-[478px] max-h-[68px] h-[68px] text-[14px] leading-[21px] font-normal text-darkGray'>
                <li className=''>Title</li>
                <li>
                    <input
                        placeholder='university of Oxford'
                        type="text"
                        className='w-[478px] h-[43px] mt-[4px] rounded-[4px] border-[0.5] border border-gray3 p-2 b-2'
                    />
                </li>
            </ul>

            {/* type row */}
            <ul className='w-[478px] max-h-[58px] h-[58px] text-[14px] leading-[21px] text-darkGray font-normal'>
                <li className=''>Type</li>
                <li>
                    <ul className='flex justify-between items-center'>
                        <li>
                            <ul className='flex items-center '>
                                <li className='mr-[24px]'>
                                    <label htmlFor="task" className='flex items-center'>
                                        <input
                                            id="task"
                                            name='type'
                                            type="radio"
                                            checked={type == "task"}
                                            onClick={(e: any) => {
                                                if (e.target.checked) {
                                                    setType("task")
                                                }
                                            }}
                                            className='accent-primary mr-[2px] w-[17px] h-[17px]'
                                        />
                                        <span>Task</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="assignment" className='flex items-center'>
                                        <input
                                            id="assignment"
                                            name='type'
                                            type="radio"
                                            checked={type == "assignment"}
                                            onClick={(e: any) => {
                                                if (e.target.checked) {
                                                    setType("assignment")
                                                }
                                            }}
                                            className='accent-primary mr-[2px] w-[17px] h-[17px]'
                                        />
                                        <span>Assignment</span>
                                    </label>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button type='button' className='bg-primary w-[144px0] h-[45px] px-[24px] py-[12px] flex justify-center items-center rounded-[8px]'>
                                <span className='mr-[10px] text-[14px] leading-[21px] font-medium text-white'>Attach File</span>
                                <span className='w-[15px] h-[15px]'>
                                    <img src="/assets/icons/attach-icon.svg" alt="" />
                                </span>
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>

            {/* Grade row */}
            <ul className='max-w-[478px] max-h-[68px] h-[68px] text-darkGray font-normal text-[14px] leading-[21px]'>
                <li className=''>Grade</li>
                <li>
                    <select
                        name="" id=""
                        className='w-[478px] h-[43px] mt-[4px] text-lightGray rounded-[4px] border-[0.5] border border-gray3 px-[16px] py-[11px] b-2'
                    // placeholder='university of Oxford'
                    >
                        <option value="" className='text-lightGray' disabled selected >Select The Class</option>
                    </select>
                </li>
            </ul>

            {/* subject row */}
            <ul className='max-w-[478px] max-h-[68px] h-[68px] text-darkGray font-normal text-[14px] leading-[21px]'>
                <li className=''>Subject</li>
                <li>
                    <select
                        name="" id=""
                        className='w-[478px] h-[43px] mt-[4px] text-lightGray rounded-[4px] border-[0.5] border border-gray3 px-[16px] py-[11px] b-2'
                    // placeholder='university of Oxford'
                    >
                        <option value="Select The Subject" className='text-lightGray' disabled selected >Select The Subject</option>
                    </select>
                </li>
            </ul>

            {/* Chapter row */}
            <ul className='max-w-[478px] max-h-[68px] h-[68px] text-darkGray font-normal text-[14px] leading-[21px]'>
                <li className=''>Chapter</li>
                <li>
                    <select
                        name="" id=""
                        className='w-[478px] h-[43px] mt-[4px] text-lightGray rounded-[4px] border-[0.5] border border-gray3 px-[16px] py-[11px] b-2'
                    // placeholder='university of Oxford'
                    >
                        <option value="" className='text-lightGray' disabled selected >Select The Chapter</option>
                    </select>
                </li>
            </ul>

            { type == "task" && <>
                {/* Select level of difficulty row */}
                <ul className='w-[478px] max-h-[58px] h-[58px] text-[14px] leading-[21px] text-darkGray font-normal'>
                    <li className=''>Select Level of Difficulty</li>
                    <li className="mt-[16px]">
                        <ul className='flex items-center space-x-[24px]'>
                            <li className=''>
                                <label htmlFor="Beginner" className='flex items-center'>
                                    <input
                                        id="Beginner"
                                        name='Select_Level_of_Difficulty'
                                        type="radio"
                                        className='accent-primary mr-[2px] w-[17px] h-[17px]'
                                    />
                                    <span>Beginner</span>
                                </label>
                            </li>
                            <li>
                                <label htmlFor="Intermediate" className='flex items-center'>
                                    <input
                                        id="Intermediate"
                                        name='Select_Level_of_Difficulty'
                                        type="radio"
                                        checked
                                        className='accent-primary mr-[2px] w-[17px] h-[17px]'
                                    />
                                    <span>Intermediate</span>
                                </label>
                            </li>

                            <li>
                                <label htmlFor="Moderate" className='flex items-center'>
                                    <input
                                        id="Moderate"
                                        name='Select_Level_of_Difficulty'
                                        type="radio"
                                        checked
                                        className='accent-primary mr-[2px] w-[17px] h-[17px]'
                                    />
                                    <span>Moderate</span>
                                </label>
                            </li>
                        </ul>
                    </li>
                </ul>


                {/* Select level of difficulty row */}
                <ul className='w-[478px] max-h-[58px] h-[58px] text-[14px] leading-[21px] text-darkGray font-normal'>
                    <li className=''>Select Number of Questions</li>
                    <li className="mt-[8px]">
                        <ul className='flex items-center space-x-[16px]'>
                            <li
                                style={{ "boxShadow": "2px 2px 12px 0px #0000000D;" }}
                                className="cursor-pointer w-[42px] h-[40px] rounded-[8px] border border-gray3 flex justify-center items-center"
                            >
                                <FaMinus size={14} className="text-gray3" />
                            </li>
                            <li className="cursor-pointer  min-w-[42px] min-h-[40px] rounded-[8px] border border-gray3 flex justify-center items-center">
                                {/* <input className="w-full" type="number" name="" id="" /> */}
                                5
                            </li>
                            <li
                                style={{ "boxShadow": "2px 2px 12px 0px #0000000D;" }}
                                className=" cursor-pointer min-w-[42px] min-h-[40px] rounded-[8px] border border-gray3 flex justify-center items-center"
                            >
                                <FiPlus size={14} className="text-gray3" />
                            </li>
                        </ul>
                    </li>
                </ul>
            </>}
            
        </form>
    )
}

export default CreateAssignmentForm
