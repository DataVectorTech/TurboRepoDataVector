import React from 'react'
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";

type Props = {
    items: {
        text: string,
        url: string,
    }[];
}

const Breadcrumb: React.FC<Props> = ({ items }) => {
    return (
        <nav className="mt-4">
            <ul className="list-none flex items-center justify-start gap-2">
                <li className='inline'>
                    <Link to={items[items.length - 2].url} className="font-sans font-normal text-primary text-xs leading-[18px] no-underline">
                        <IoArrowBack />
                    </Link>
                </li>
                {
                    items?.map((item, index) => (
                        <li key={item.text} className="inline">
                            <Link to={`${item.url}`} className="font-sans font-normal text-primary text-xs leading-[18px] no-underline capitalize">{item.text}</Link>
                            {index < items.length - 1 && <span className="px-1 font-sans font-normal text-primary text-xs leading-[18px]">/</span>}
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Breadcrumb