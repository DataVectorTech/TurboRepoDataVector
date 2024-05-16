import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa";
// import "./styles/assign.css";
import { IoMdClose } from "react-icons/io";
import SubjectInput from "./SubjectInput";

type Props = {
  subject: string,
    assignedSubjects: string[],
    setAssignedSubjects: React.Dispatch<React.SetStateAction<string[]>>
}

const SubjectCard: React.FC<Props> = ({
  subject,
  assignedSubjects,
  setAssignedSubjects,
}) => {
  const unassignSubject = () => {
    const temp = assignedSubjects.filter((value: string) => value !== subject);
    setAssignedSubjects(temp);
  };
  return (
    <div className="h-[22px] mt-2 w-fit py-[2px] px-2 rouned-[4px] bg-secondary relative text-center font-sans font-normal text-[12px] leading-[18px] text-primary capitalize text-nowrap">
      <span
        className="inline-flex w-[12px] h-[12px] absolute top-[-4px] right-[-4px] bg-lightGray rounded-full items-center justify-center cursor-pointer"
        onClick={() => unassignSubject()}
      >
        <IoMdClose className="text-white" size={10} />
      </span>
      {subject}
    </div>
  );
};

const AssignSubject: React.FC = () => {
  const [assignedSubjects, setAssignedSubjects] = useState<string[]>([]);
  const [showSubjectsDropdown, setShowSubjectsDropdown] = useState<boolean>(true);
  const subjects: string[] = [
    "Mathematics",
    "English",
    "Science",
    "Comp. Science",
    "Social Studies",
  ];

  return (
    <div className="w-full mt-4 max-w-[478px]">
      <div className="font-sans font-normal text-[14px] text-darkGray leading-[21px] capitalize mb-1">
        Assign Subjects
      </div>

      <div className="w-full border border-darkGray rounded">
        <div className={`w-full min-h-[43px] flex items-center justify-between px-4 ${showSubjectsDropdown ? "border-b border-darkGray" : "border-none"}`}>
          <div className="w-full min-h-[43px] flex items-start justify-start h-full gap-4 overflow-x-auto assignedSubjectsDiv">
            {assignedSubjects?.map((subject) => (
              <SubjectCard
                key={subject}
                subject={subject}
                assignedSubjects={assignedSubjects}
                setAssignedSubjects={setAssignedSubjects}
              />
            ))}
          </div>
          <div className="w-[32px] h-[24px] flex items-center justify-center cursor-pointer" onClick={() => setShowSubjectsDropdown(prev => !prev)}>
            <FaSortDown  className={`transition-all ${showSubjectsDropdown ? "rotate-180" : "rotate-0"}`} />
          </div>
        </div>

        <div className={`${showSubjectsDropdown ? "block" : "hidden"} transition-all`}>
          <div className="flex justify-start flex-wrap gap-4 p-4">
            {subjects?.map((subject) => (
              <SubjectInput
                subject={subject}
                assignedSubjects={assignedSubjects}
                setAssignedSubjects={setAssignedSubjects}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignSubject;
