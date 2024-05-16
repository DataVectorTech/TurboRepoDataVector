import React from 'react'
import { SelectorProp } from './type'

const Selector = ({ onChangeHandler, options, selected, selectTagFrameStyle, selectTagStyle, ...rest }: SelectorProp) => {
    return (
        <div className={`w-[105px] h-[37px] relative border border-primary rounded-lg text-center p-1 px-2 flex items-center justify-center ${selectTagFrameStyle} `}>
            <select
                name=""
                id=""
                className={`outline-none font-sans font-medium text-sm w-full h-full text-primary selectFilter ${selectTagStyle}`}
                {...rest}
            >
                {
                    options?.map((opt, i) => {
                        return (<option key={i} value={opt?.value} selected={opt?.value == selected}>
                            {opt?.label}
                        </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Selector
