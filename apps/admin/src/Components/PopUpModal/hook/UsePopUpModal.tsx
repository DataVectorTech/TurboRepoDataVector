import React, { ReactNode, useState } from 'react'
import Button from '../Button'
import { FaPlus } from 'react-icons/fa6'


type usePopUpModalType = (PopUpModalPropType: PopUpModalPropType) => PopUpModalReturnType

type PopUpModalReturnType = {
    PopUpModal: React.FC,
    showPopUp: Boolean,
    setShowPopUp: Function,
}

export type PopUpModalPropType = {
    title: string,

    showDiscardButtons?: boolean
    showSubmitButtons?: boolean
    showOrOptions?: boolean

    discardButtonLabel: string
    onDiscard: () => void

    primaryButtonLabel: string
    onSubmit: () => void

    optionalButtonLabel?: string
    onOptionalBtnSelect?: () => void

    children: React.ReactNode
}

const usePopUpModal: usePopUpModalType = ({ title, onDiscard, onSubmit, showDiscardButtons = true, showSubmitButtons = true, showOrOptions = false, discardButtonLabel, primaryButtonLabel, optionalButtonLabel, onOptionalBtnSelect, children }: PopUpModalPropType) => {
    const [showPopUp, setShowPopUp] = useState<boolean>(false)

    const PopUpModal: React.FC = () => (<>
        <div className='fixed top-0 left-0 z-50 bg-grayVariant border p-2 w-screen h-full flex justify-center items-center'>
            <div className="min-h-[680px] max-h-screen h-[680px] min-w-[610px] w-[610px] flex justify-center items-center flex-col">
                <div className='relative'>

                    {/* title */}
                    <div className='bg-primary text-white text-[20px] font-medium w-[493px] h-[64px] mx-auto rounded-full flex items-center justify-center absolute translate-x-1/2 right-1/2 '>
                        {title}
                    </div>

                    {/* close */}
                    <div className='right-0 w-[34px] h-[34px] ml-auto'>
                        <span onClick={onDiscard} className='cursor-pointer'>
                            <img src="/assets/icons/close-icon.svg" alt="close-icon.svg" />
                        </span>
                    </div>

                    {/* content */}
                    {/* min-h-[637px] h-[637px] */}
                    <div className='max-h-[500px] h-auto min-w-[610px] rounded-[64px] bg-white pt-[58px] pb-[35px] flex flex-col justify-start items-center overflow-hidden'>
                        <div className='overflow-y-auto pr-2 principalsDiv' >
                            {
                                children
                            }
                        </div>
                        {/* action button */}
                        {(showDiscardButtons || showSubmitButtons) && <ul className='w-[478px] max-w-[478px] max-h-[68px] h-[68px] mt-[53px] text-darkGray font-normal text-[14px] leading-[21px]'>
                            <li className='w-full flex justify-end items-center space-x-[16px]'>
                                {showDiscardButtons && <Button
                                    label={discardButtonLabel ?? 'Discard'}
                                    isActive={false}
                                    clickHandler={onDiscard}
                                />}
                                {showSubmitButtons && <Button
                                    label={primaryButtonLabel ?? "Accept"}
                                    isActive={true}
                                    clickHandler={onSubmit}
                                />}
                            </li>
                        </ul>}

                        {showOrOptions && <div className='space-y-[24px] min-w-[488px]'>
                            <ul className='w-full text-gray3 font-normal text-[14px] leading-[21px] flex justify-between items-center '>
                                <li className='w-[210px] border-[.5px] border-gratext-gray3'></li>
                                <li>OR</li>
                                <li className='w-[210px] border-[.5px] border-gratext-gray3'></li>
                            </ul>

                            <div className='w-full flex justify-center items-center'>
                                {
                                    <Button isActive={true}
                                        clickHandler={onOptionalBtnSelect}
                                    >
                                        <ul className='flex justify-center items-center space-x-[10px]'>
                                            <li><FaPlus size={14} /></li>
                                            <li>{optionalButtonLabel}</li>
                                        </ul>
                                    </Button>
                                }
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    </>)

    return { PopUpModal, showPopUp, setShowPopUp }
}

export default usePopUpModal 
