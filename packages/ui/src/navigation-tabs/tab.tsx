import { Link } from "react-router-dom"
import "./style.css"
import { tabProps } from "./type"

const Tab = ({ isActive, label, onClickHandler, link, style }: tabProps) => {
    return (
        // <div className={`font-sans font-medium text-base text-darkGray relative inline-block ${isActive && 'allClassTab'} ${style}`}
        <div className={`relative cursor-pointer font-sans font-medium text-base transition-all  ${isActive ? "activeNavTab" : ""} ${style}`}
            onClick={() => onClickHandler()}
        >
            <Link to={link} className="capitalize">
                {label}
            </Link>
        </div>
    )
}

export default Tab
