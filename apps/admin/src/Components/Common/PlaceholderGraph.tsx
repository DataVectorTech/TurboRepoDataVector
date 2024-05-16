import React from "react";

type Props = {
  rows: number;
};

export const PlaceholderGraph:React.FC = () => {
  return (
    <div className="w-full h-full min-h-[250px] graphPlaceholder"></div>
  )
}

const Placeholder: React.FC<Props> = ({ rows }) => {
  return (
    <div className="w-full h-full bg-lightGray relative placeholderMain">
      {Array.from(Array(rows ?? 5)).map((_, index) => (
        <div key={index} className="bg-white mb-4 w-full h-[16px]"></div>
      ))}
    </div>
  );
};

export default Placeholder;
