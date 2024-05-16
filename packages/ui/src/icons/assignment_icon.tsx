import { IconDto } from "./types"

const AssignmentIcon = ({ color , height ,width } : IconDto) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-4"
        >
            <path
                d="M21.1655 3.79138L11.3873 0.562799C11.1369 0.479067 10.8657 0.479067 10.6153 0.562799L0.837075 3.79138C0.603757 3.86792 0.399156 4.01236 0.249978 4.20584C0.100799 4.39933 0.0139743 4.63287 0.000835829 4.87598C-0.00027861 4.89715 -0.00027861 4.91837 0.000835829 4.93954V13.011C0.000835829 13.3321 0.129611 13.64 0.358832 13.8671C0.588052 14.0941 0.898942 14.2217 1.22311 14.2217C1.54728 14.2217 1.85817 14.0941 2.08739 13.8671C2.31661 13.64 2.44538 13.3321 2.44538 13.011V6.61941L4.86039 7.41646C4.11089 8.83754 3.88816 10.4739 4.23097 12.0409C4.57378 13.6078 5.46042 15.0061 6.73658 15.9924C5.06658 16.8081 3.65322 18.0602 2.6491 19.6134C2.55867 19.7465 2.49586 19.8961 2.46432 20.0535C2.43278 20.2109 2.43313 20.3729 2.46536 20.5302C2.49759 20.6874 2.56105 20.8367 2.65205 20.9695C2.74305 21.1022 2.85979 21.2157 2.99546 21.3034C3.13114 21.391 3.28305 21.4511 3.44236 21.4801C3.60168 21.5091 3.76523 21.5064 3.92349 21.4722C4.08176 21.4381 4.23159 21.3731 4.36428 21.281C4.49697 21.189 4.60986 21.0718 4.6964 20.9361C6.14989 18.7205 8.4549 17.4503 11.0013 17.4503C13.5477 17.4503 15.8527 18.7205 17.3113 20.9361C17.3978 21.0718 17.5107 21.189 17.6434 21.281C17.7761 21.3731 17.9259 21.4381 18.0842 21.4722C18.2425 21.5064 18.406 21.5091 18.5653 21.4801C18.7246 21.4511 18.8766 21.391 19.0122 21.3034C19.1479 21.2157 19.2646 21.1022 19.3556 20.9695C19.4466 20.8367 19.5101 20.6874 19.5423 20.5302C19.5746 20.3729 19.5749 20.2109 19.5434 20.0535C19.5118 19.8961 19.449 19.7465 19.3586 19.6134C18.3535 18.0584 16.9383 16.8052 15.266 15.9893C16.5422 15.0031 17.4288 13.6048 17.7716 12.0379C18.1144 10.4709 17.8917 8.83451 17.1422 7.41344L21.1655 6.08467C21.4086 6.00412 21.6199 5.84993 21.7697 5.64389C21.9194 5.43785 22 5.19039 22 4.93651C22 4.68263 21.9194 4.43518 21.7697 4.22914C21.6199 4.0231 21.4086 3.8689 21.1655 3.78835V3.79138ZM11.0013 2.98423L16.914 4.93954L11.0013 6.89182L5.09364 4.93954L11.0013 2.98423ZM15.483 10.5895C15.4831 11.2791 15.3211 11.9592 15.0097 12.5759C14.6984 13.1926 14.2463 13.729 13.6893 14.1426C13.1322 14.5562 12.4856 14.8355 11.8007 14.9585C11.1157 15.0815 10.4113 15.0447 9.74313 14.8511C9.07501 14.6576 8.46159 14.3125 7.95151 13.8433C7.44143 13.374 7.04872 12.7935 6.8045 12.1478C6.56027 11.5021 6.47126 10.8089 6.54451 10.1232C6.61776 9.43753 6.85127 8.77815 7.22651 8.19737L10.6153 9.31628C10.8657 9.39971 11.1369 9.39971 11.3873 9.31628L14.7761 8.19737C15.2383 8.91118 15.4837 9.74153 15.483 10.5895Z"
                fill={color}
            />
        </svg>
    )
}

export default AssignmentIcon
