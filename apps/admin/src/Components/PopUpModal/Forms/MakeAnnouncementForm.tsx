import React, { FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from "../../../stores/store";
import { FetchHookProps, useFetch } from '../../../hooks/useFetch';

const MakeAnnouncementForm = () => {
    const { name, role } = useSelector(
        (state: RootState) => state.globalState.user
      );
    const d = new Date()
    const [announcerRole, setAnnouncerRole] = useState("Admin")
    const [announcerName, setAnnouncerName] = useState("Riya")
    const [date, setDate] = useState(d.toISOString()?.split("T")[0])
    const [time, setTime] = useState<any>(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)
    const {data, loading, error, handleFetch} = useFetch();

    console.log({ date, time })


    const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = (e) => {
        e.preventDefault();
        console.log("Form submitted");

        const url = `${import.meta.env.VITE_API_URL}/announcement/createAnnouncement`
        const token = localStorage.getItem("token");
        body = {

        }
        handleFetch({url, token, body} as FetchHookProps)
    }

    return (
        <>
            <form action="" className='space-y-[24px]' id="makeAnnouncementForm" onSubmit={(e) => handleSubmit(e)}>
                {/* announcement type row */}
                <ul className='max-w-[478px] max-h-[68px] h-[68px] text-[14px] leading-[21px] font-normal text-darkGray'>
                    <li className=''>Announcement type</li>
                    <li className=''>
                        <input
                            placeholder='Announcement type'
                            type="text"
                            className='w-[478px] h-[43px] mt-[4px] rounded-[4px] border-[0.5] border border-gray3 p-2 b-2'
                        />
                    </li>
                </ul>

                {/* announcement title row */}
                <ul className='max-w-[478px] max-h-[68px] h-[68px] text-[14px] leading-[21px] font-normal text-darkGray'>
                    <li className=''>Announcement Title</li>
                    <li className=''>
                        <input
                            placeholder='Announcement title'
                            type="text"
                            className='w-[478px] h-[43px] mt-[4px] rounded-[4px] border-[0.5] border border-gray3 p-2 b-2'
                        />
                    </li>
                </ul>

                {/* announcer Role row */}
                <ul className='max-w-[478px] max-h-[68px] h-[68px] text-[14px] leading-[21px] font-normal text-darkGray'>
                    <li className=''>Announcer Role</li>
                    <li className=''>
                        <input
                            placeholder='Announcer Role'
                            type="text"
                            className='w-[478px] h-[43px] mt-[4px] rounded-[4px] border-[0.5] border border-gray3 p-2 b-2'
                            onChange={(e) => {
                                setAnnouncerRole(e?.target?.value)
                            }}
                            value={announcerRole}
                        />
                    </li>
                </ul>


                {/* announcer Name row */}
                <ul className='max-w-[478px] max-h-[68px] h-[68px] text-[14px] leading-[21px] font-normal text-darkGray'>
                    <li className=''>Announcer Name</li>
                    <li className=''>
                        <input
                            placeholder='Announcer Name'
                            type="text"
                            onChange={(e) => {
                                setAnnouncerName(e?.target?.value)
                            }}
                            value={announcerName}
                            className='w-[478px] h-[43px] mt-[4px] rounded-[4px] border-[0.5] border border-gray3 p-2 b-2'
                        />
                    </li>
                </ul>

                {/* announcement time row */}
                <ul className='max-w-[478px] max-h-[68px] h-[68px] text-[14px] leading-[21px] font-normal text-darkGray'>
                    <li className=''>Announcement Time</li>
                    <li className=''>
                        <input
                            placeholder='Announcement Time'
                            type="time"
                            onChange={(e) => {
                                setTime(e?.target?.value)
                            }}
                            value={time}
                            className='w-[478px] h-[43px] mt-[4px] rounded-[4px] border-[0.5] border border-gray3 p-2 b-2'
                        />
                    </li>
                </ul>

                {/* announcement date row */}
                <ul className='max-w-[478px] max-h-[68px] h-[68px] text-[14px] leading-[21px] font-normal text-darkGray'>
                    <li className=''>Announcement Date</li>
                    <li className=''>
                        <input
                            placeholder='Announcement Date'
                            type="Date"
                            value={date}
                            onChange={(e) => {
                                setDate(e.target.value)
                            }}
                            className='w-[478px] h-[43px] mt-[4px] rounded-[4px] border-[0.5] border border-gray3 p-2 b-2'
                        />
                    </li>
                </ul>

                {/* announcement description row */}
                <ul className='max-w-[478px] max-h-[68px] h-[68px] text-[14px] leading-[21px] font-normal text-darkGray'>
                    <li className=''>Announcement Description</li>
                    <li className=''>
                        <textarea
                            placeholder='Announcement Discription'
                            rows={5}
                            className='w-[478px] mt-[4px] rounded-[4px] border-[0.5] border border-gray3 p-2 b-2'
                        />
                    </li>
                </ul>
                
                <button type="submit" hidden id="formSubmitBtn">Submit</button>
            </form>
        </>
    )
}

export default MakeAnnouncementForm
