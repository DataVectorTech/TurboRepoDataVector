import { CiCalendar } from "react-icons/ci";
import { MdWindow } from "react-icons/md";
import { AssignmentIcon, ClassesIcon, SyllabusIcon, TeacherIcon } from "@repo/ui/icons";

const activeSidebarTab: string = "Dashboard"
export const sideBarData = [
    {
        label: "Dashboard",
        link: "/",
        icon: <MdWindow size={24} className="mr-4" />
    },
    {
        label: "Teacher",
        link: "/teachers",
        icon: <TeacherIcon color={activeSidebarTab === "teacher" ? "#10A0B6" : "#565656"}
            height='22'
            width='18'
        />
    },
    {
        label: "Assignment",
        link: "/assignment",
        icon: <AssignmentIcon
            color={activeSidebarTab === "assignment" ? "#10A0B6" : "#565656"}
            height='22'
            width='20' />
    },
    {
        label: "Syllabus",
        link: "/syllabus",
        icon: <SyllabusIcon color={activeSidebarTab === "syllabus" ? "#10A0B6" : "#565656"}
            height='22'
            width='20'
        />
    },
    {
        label: "Classes",
        link: "/classes",
        icon: <ClassesIcon color={activeSidebarTab === "classes" ? "#10A0B6" : "#565656"}
            height='22'
            width='20'
        />
    },
    {
        label: "Calendar",
        link: "/calendar",
        icon: <CiCalendar size={24} className="mr-4" />
    },
]