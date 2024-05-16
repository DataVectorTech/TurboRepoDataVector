import React from 'react'

const Notification:React.FC = () => {
  return (
    <div className="w-full h-[76px] mb-2 pt-2 px-4">
        {/* class and sender info */}
        <div className="font-sans font-normal text-sm text-left leading-[21px] text-darkGray mb-2">
            <span>Class VII, </span>
            <span>Result Out Of Ajmer Branch</span>
        </div>

        {/* date and time info */}
        <div className="flex items-center justify-start font-sans font-normal text-sm text-lightGray">
            <span>14 Feb, 2024</span>
            <span className="inline-block w-[6px] h-[6px] rounded-full bg-lightGray mx-2"></span>
            <span>02:26PM</span>
        </div>
    </div>
  )
}

export default Notification