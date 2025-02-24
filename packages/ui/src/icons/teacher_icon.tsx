import { IconDto } from './types'

const TeacherIcon = ({ color , height , width } : IconDto ) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-4"
        >
            <path
                d="M3 16.117V19.883L4.515 18.974L9.277 16.117H14C15.103 16.117 16 15.22 16 14.117V6.117C16 5.014 15.103 4.117 14 4.117H2C0.897 4.117 0 5.014 0 6.117V14.117C0 15.22 0.897 16.117 2 16.117H3ZM2 6.117H14V14.117H8.723L5 16.351V14.117H2V6.117Z"
                fill={color}
            />
            <path
                d="M18 0.117H6C4.897 0.117 4 1.014 4 2.117H16C17.103 2.117 18 3.014 18 4.117V12.117C19.103 12.117 20 11.22 20 10.117V2.117C20 1.014 19.103 0.117 18 0.117Z"
                fill={color}
            />
        </svg>
    )
}

export default TeacherIcon
