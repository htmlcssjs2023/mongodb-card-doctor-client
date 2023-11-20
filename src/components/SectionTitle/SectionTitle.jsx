import React from "react";

const SectionTitle = ({miniTitle,title,details}) => {
  return (
      <div className="text-center space-y-3 w-1/2 mx-auto">
        <p className="text-[#FF3811] text-[1.2rem] font-bold">{miniTitle}</p>
        <h2 className="text-5xl font-bold">{title}</h2>
        <p>
          {details}
        </p>
      </div>
  );
};

export default SectionTitle;
