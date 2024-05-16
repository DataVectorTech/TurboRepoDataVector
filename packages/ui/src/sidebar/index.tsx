import React from 'react'
import StudentIcon from '../icons/student_icon'
import { Link } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { FaUser } from "react-icons/fa6";
import { MdWindow } from "react-icons/md";
import TeacherIcon from '../icons/teacher_icon';
import PrincipalIcon from '../icons/principal_icon';
import AssignmentIcon from '../icons/assignment_icon';
import SyllabusIcon from '../icons/syllabus_icon';
import ClassesIcon from '../icons/classes_icon';
import { sidebar_props } from './type';



const SideBar = ({ name, role, activeSidebarTab, sideBarTabData, showCreateEvent, showMakeAnnouncement, createEventHandler, makeAnnouncementHandler }: sidebar_props) => {
    return (
        <>
            <div className="w-[276px] h-full flex flex-col justify-start mt-6" style={{ flexDirection: "column" }}>
                {/* profile info */}
                {/* <div className="w-full bg-secondary max-h-[241px] pt-5 pb-2 border-b border-b-grayVariant" style={{boxShadow: "4px 4px 12px 0px rgba(0, 0, 0, 0.15)"}}> */}
                <div className="w-full bg-secondary max-h-[241px] pt-5 pb-2 boxShadow">
                    {/* profile image */}
                    <div className="w-[130px] h-[130px] rounded-[50%]  border-2 border-grayVariant mx-auto bg-transparent p-2 flex items-center justify-center">
                        <div className="w-[115px] h-[115px] rounded-[50%] overflow-hidden flex items-center justify-center">
                            {/* <img
                className="object-cover w-[115px] h-[115px]"
                src="/assets/images/profile.png"
                alt="profile"
              /> */}
                            <FaUser size={64} className="text-primary" />
                        </div>
                    </div>
                    {/* info */}
                    <div className="text-center">
                        <h2 className="font-sans text-center text-[24px] text-primary font-medium leading-[36px] whitespace-nowrap">
                            {name}{" "}
                            {true && (
                                <span className="inline-block ml-3 text-black">
                                    <TbEdit />
                                </span>
                            )}
                        </h2>
                        <p className="font-sans text-center text-[14px] text-grayVariant leading-[21px]">
                            Role - {role}
                        </p>
                        <p className="font-sans text-center text-[14px] text-grayVariant leading-[21px]">
                            Contact - +91-88888888
                        </p>
                    </div>
                </div>
                {/* sidebar menu */}
                <div className="pt-[12px] mt-4 boxShadow bg-white">
                    <div className="pl-[10px] text-left font-sans text-[16px] text-grayVariant font-500 leading-[24px] uppercase">
                        Menu
                    </div>
                    <div className="">
                        <>
                            <ul className="list-none">
                                {
                                    sideBarTabData?.map((ele, i) => {
                                        return (
                                            <li
                                                key={ele?.label}
                                                className={`flex items-center justify-start cursor-pointer text-darkGray 
                                                ${activeSidebarTab === ele?.label ? "bg-secondary text-primary" : "bg-white text-darkGray"}`}
                                            >
                                                <Link
                                                    to={ele?.link}
                                                    className="flex flex-row flex-grow items-center justify-start w-full h-full p-4 no-underline"
                                                >
                                                    {ele?.icon}
                                                    {ele?.label}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className='w-full mb-2 flex justify-center flex-col'>
                                {showMakeAnnouncement && <button
                                    type="button"
                                    className="w-[200px] h-[45px] outline-none bg-primary font-sans font-medium text-sm text-white rounded-lg mx-auto mb-6 text-center mt-10"
                                    onClick={() => { makeAnnouncementHandler && makeAnnouncementHandler() }}
                                >
                                    Make Announcement
                                </button>}

                                {showCreateEvent && <button className="capitalize flex flex-row items-center justify-center mx-auto bg-secondary rounded-[48px] border border-primary p-3 outline-none text-primary font-[18px] leading-[27px] font-500"
                                    onClick={() => { createEventHandler && createEventHandler() }}
                                >
                                    <IoAddOutline className="mr-1" /> create event
                                </button>}
                            </div>
                        </>
                    </div>

                    {/* signout btn */}
                    <div className="border-t border-grayVariant">
                        <div className="w-full flex items-center justify-center p-3 text-center text-grayVariant h-[55px]">
                            <button
                                className="w-full text-center flex items-center justify-center"
                            >
                                <span className="inline-block mr-1">
                                    <RiLogoutCircleLine size={18} />
                                </span>{" "}
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar
