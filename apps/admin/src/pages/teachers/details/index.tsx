import Button from "@repo/ui/button"
import Breadcrumb from "../../../components/Common/Breadcrumb"
import usePopUpModal, { PopUpModalPropType } from "../../../components/PopUpModal/hook/UsePopUpModal"
import PersonalDetailsCard from "../../../components/Teachers/TeachersDetails/PersonalDetails"
import EditPersonalDetails from "../../../components/Teachers/Form/EditPersonalDetailsCard"
import OtherDetailsCard from "../../../components/Teachers/TeachersDetails/OtherDetailsCard"
import EditOtherDetails from "../../../components/Teachers/Form/EditOtherDetails"

const TeacherDetailsWithEdit = () => {
  const preRoute = [
    {
      text: "Dashboard",
      url: "/D"
    },
    {
      text: "My class",
      url: "/M"
    },
    {
      text: "Teachers Profile",
      url: "/S"
    },
    {
      text: "Teacher Name",
      url: "/E"
    },
  ]

  const removeTeacherPopUpParameter: PopUpModalPropType = {
    title: 'Remove Teacher',
    discardButtonLabel: 'Cancel',
    primaryButtonLabel: 'Remove',
    onDiscard: function (): void {
      console.log('discord.')
      setShowRemoveTeacherPopUp(false)
    },
    onSubmit: function (): void {
      console.log('Submit')
    },
    children: <>
      <div className='text-[20px] font-normal leading-[22px] tracking-[.5px] text-darkGray'>Are you sure you want to remove this teacher</div>
    </>
  }
  const { PopUpModal: RemoveTeacherModel, setShowPopUp: setShowRemoveTeacherPopUp, showPopUp: showRemoveTeacherPopUp } = usePopUpModal(removeTeacherPopUpParameter);

  return (
    <>
      {
        showRemoveTeacherPopUp && <RemoveTeacherModel />
      }
      <div className='max-w-[1056px] mx-auto mt-[24px] space-y-[24px]'>
        <ul className='flex justify-between items-center '>
          <li>
            <Breadcrumb items={preRoute} />
          </li>
          <li>
            <Button
              isActive={true}
              label='Remove Teacher'
              clickHandler={() => {
                setShowRemoveTeacherPopUp(true)
              }}
            />
          </li>
        </ul>
        <PersonalDetailsCard />
        <EditPersonalDetails profile={'teacher'} />
        <OtherDetailsCard />
        <EditOtherDetails />
      </div>
    </>
  )
}

export default TeacherDetailsWithEdit

