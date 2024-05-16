import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
// import { FiSearch } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

const CustomSelect: React.FC<Props> = ({
    data,
    cleanable,
    defaultValue,
    handleSelect,
}) => {

    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState<{
        label: string;
        value: string | number;
    }>({ label: "", value: "" });
    const [open, setOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                selectRef.current &&
                !selectRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // if default value is provided then set the default value
    useEffect(() => {
        if (defaultValue) {
            const defaultOption = data?.find(
                (option) => option.value === defaultValue
            );
            if (defaultOption) {
                setSelected(defaultOption);
                handleSelect(defaultOption.value);
            }
        }
    }, []);

    useEffect(() => {
        handleSelect(selected.value);
    }, [selected, handleSelect]);

    return (
        <div
            className="font-sans w-full font-medium max-h-80 relative"
            ref={selectRef}
        >
            <div
                className={`w-full p-2 flex items-center justify-between rounded bg-white ${!selected.value && "text-lightGray"
                    }`}
                onClick={() => setOpen(!open)}
            >
                {selected.value
                    ? selected.label.length > 25
                        ? selected.label?.substring(0, 25) + "..."
                        : selected.label
                    : "Select"}
                <div className="flex items-center gap-1">
                    {cleanable ? (
                        <>
                            {selected.value && (
                                <IoIosClose
                                    size={20}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelected({ label: "", value: "" });
                                    }}
                                />
                            )}
                        </>
                    ) : (
                        <></>
                    )}
                    <BiChevronDown
                        size={20}
                        className={`${open && "rotate-180"} transition-all`}
                    />
                </div>
            </div>

            {open && (
                <div className="absolute top-full left-0 w-full bg-white border border-lightGray rounded-b max-h-60 overflow-y-hidden shadow-lg">
                    <ul
                        className={`bg-white mt-2 overflow-y-auto ${open ? "max-h-60" : "max-h-0"
                            } z-50`}
                    >
                        {/* <div className=" px-2 flex items-center sticky top-0 bg-white">
            <FiSearch size={18} className="text-lightGray" />
            <input
              type="text"
              placeholder="Search..."
              className="placeholder:text-lightGray p-2 outline-none"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            />
          </div> */}
                        {data?.length === 0 && (
                            <li className="p-2 font-sans text-sm text-lightGray hover:bg-secondary block">
                                Empty
                            </li>
                        )}
                        {data?.length !== 0 && (
                            <>
                                {data?.map((item, index) => (
                                    <li
                                        key={item.value}
                                        className={`p-2 font-sans text-sm text-lightGray hover:bg-secondary hover:text-darkGray ${item.label.toLowerCase().startsWith(inputValue)
                                            ? "block"
                                            : "hidden"
                                            } ${item.value === selected.value &&
                                            "bg-secondary text-darkGray"
                                            } `}
                                        onClick={() => {
                                            if (item.value !== selected.value) {
                                                setSelected(item);
                                                setOpen(false);
                                                setInputValue("");
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </li>
                                ))}
                            </>
                        )}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default CustomSelect



type Props = {
    data?: {
        value: string | number;
        label: string;
    }[];
    handleSelect: React.Dispatch<React.SetStateAction<string | number>>;
    cleanable?: boolean;
    defaultValue?: string | number | undefined;
};
