import React, { useState } from "react";

const SectionLayout = ({ title, children }) => {
  return (
    <div className={`mt-3 p-6`}>
      <h1 className='text-xl cBaktiBlue bBaktiBlue mb-6 pb-2 border-b-2'>
        {title}
      </h1>
      {children}
    </div>
  );
};

export default SectionLayout;
