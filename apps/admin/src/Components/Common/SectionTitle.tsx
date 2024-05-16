import React from "react";

type Props = {
  title: string;
};

const SectionTitle: React.FC<Props> = ({ title }: Props) => {
  return (
    <h4 className="font-sans text-left font-normal leading-[30px] text-black capitalize">
      {title}
    </h4>
  );
};

export default SectionTitle;
