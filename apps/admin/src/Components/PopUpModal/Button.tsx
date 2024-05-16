import React, { ButtonHTMLAttributes, ReactNode } from 'react'

enum ButtonTypeDto {
    Button = 'button',
    Submit = 'submit',
    Reset = 'reset',
}

type buttonPropDto = {
    label?: string,
    children?: ReactNode,
    isActive: Boolean,
    buttonType?: ButtonTypeDto,
    clickHandler?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ isActive, label, buttonType, clickHandler, children, ...rest }: buttonPropDto) => {
    return (
        <button
            type={buttonType ?? 'button'}
            className={`min-w-[129px] h-[38px] px-[32px] truncate py-[8px] rounded-[8px] font-medium ${isActive ? ' bg-primary text-white ' : ' border border-lightGray bottom-[1px] text-gray3 '}`}
            onClick={clickHandler}
            {...rest}
        >{label ? label : children}</button>
    )
}

export default React.memo(Button)
