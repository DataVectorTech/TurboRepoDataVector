import React, { useEffect, useState } from "react";
import { PiCheckFat } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";

type Props = {
  subject: string;
  assignedSubjects: string[];
  setAssignedSubjects: React.Dispatch<React.SetStateAction<string[]>>;
};

const SubjectInput: React.FC<Props> = ({ subject, assignedSubjects, setAssignedSubjects }) => {
  const [selected, setSelected] = useState<boolean>(false);

  const handleAssignSubject = (checked:boolean, value:string) => {
    if(checked) {
      setAssignedSubjects(prev => [...prev, value]);
    } else {
      const temp = assignedSubjects.filter(subject => subject !== value);
      setAssignedSubjects(temp);
    }
  }

  useEffect(() => {
    if(subject === assignedSubjects.find(element => element === subject)) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [assignedSubjects]);

  return (
    <div>
      <label
        className={`font-sans font-normal text-sm  flex items-center ml-0 cursor-pointer capitalize ${selected ? "text-darkGray" : "text-lightGray"}`}
        htmlFor={`${subject}`}
      >
        <input
          className="absolute opacity-0"
          type="checkbox"
          name=""
          id={`${subject}`}
          checked={selected}
          onChange={(e) => {
            setSelected(e.target.checked)
            handleAssignSubject(e.target.checked, subject);
          }}
        />
        <span
          className={`w-[14px] h-[14px] relative inline-flex items-center justify-center mr-3 rounded-sm ${
            selected
              ? "border-none bg-primary text-white"
              : "border border-lightGray bg-white"
          }`}
        >
          {selected ? (
            <FaCheck className="text-white" size={10} />
          ) : (
            <PiCheckFat className="text-lightGray" size={10} />
          )}
        </span>
        {subject}
      </label>
    </div>
  );
};

export default SubjectInput;
