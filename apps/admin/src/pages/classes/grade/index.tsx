import { useNavigate, useParams } from 'react-router-dom';
import TeachersByGrade from './teachers-by-grade';
import StudentsByGrade from './students-by-grade';
import AssignmentsByGrade from './assignments-by-grade';
import ClassRoutine from './class-routine';
import { Selector } from '@repo/ui/selector';
import { NavigationTabs, Tab } from '@repo/ui/navigation-tabs';

type Props = {
    activeComponent: number
}

const Grade = ({ activeComponent }: Props) => {
    const navigate = useNavigate();
    const { grade } = useParams()
    console.log(grade)


    const handleComponentNavigation = (prop: string) => {
        if (prop === "teachers") {
            navigate(`class/:${grade}/teachers`)
        }
        else if (prop === "students") {
            navigate(`class/:${grade}/students`)
        }
        else if (prop === "subject") {
            navigate(`class/:${grade}/subject`)
        }
        else if (prop === "assignment") {
            navigate(`class/:${grade}/assignment`)
        }
        else if (prop === "class-routine") {
            navigate(`class/:${grade}/class-routine`)
        }
    }

    const handleActiveComponent = (prop: number) => {
        if (prop === 0) {
            return <TeachersByGrade />
        }
        else if (prop === 1) {
            return <StudentsByGrade />
        }
        else if (prop === 2) {
            return <AssignmentsByGrade />
        }
        else if (prop === 3) {
            return <ClassRoutine />
        }
    };
    return (
        <div>
            <NavigationTabs
                tabs={
                    <>
                        <Tab isActive={activeComponent == 0} label='Teachers' link={`/class/${grade}/teachers`} onClickHandler={() => { }} style='' />
                        <Tab isActive={activeComponent == 1} label='Students' link={`/class/${grade}/students`} onClickHandler={() => { }} style='' />
                        <Tab isActive={activeComponent == 2} label='Assignment' link={`/class/${grade}/assignment`} onClickHandler={() => { }} style='' />
                        <Tab isActive={activeComponent == 3} label='Class Routine' link={`/class/${grade}/class-routine`} onClickHandler={() => { }} style='' />
                    </>
                }
                content={handleActiveComponent(activeComponent)}
                filters={<>
                    <Selector
                        onChangeHandler={() => {

                        }}
                        options={[
                            { label: "X", value: "X" },
                            { label: "XI", value: "XI" },
                        ]}
                        selected={"XI"}
                        selectTagFrameStyle='h-[37px]'
                    />
                </>}
                isTabsFirst={false}
            />
        </div>
    )
}

export default Grade