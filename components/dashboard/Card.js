import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className='p-4 shadowBaktiBottom rounded-xl h-40 grow bgW flexboxColCenter'>
      <p className='text-center font-bold'>{title}</p>
      <p className='text-3xl cBaktiBlue'>{content}</p>
    </div>
  );
};

export default Card;
