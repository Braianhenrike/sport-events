import React from 'react';

interface ClickableCircleProps {
  link: string;
  text: string;
  image: string;
}

const ClickableCircle: React.FC<ClickableCircleProps> = ({ link, text, image }) => {
  return (
    <div className="flex justify-center mt-12 space-x-10 mb-8 relative">
      <div className="flex flex-row items-center">
        <a href={link}>
          <div className="w-24 h-24 bg-gradient-to-r from-blue-950 to-blue-200 rounded-full opacity-80 flex items-center justify-center overflow-hidden">
            <img src={image} alt={text}/> 
          </div>
          <p className="text-white text-sm mt-2">{text}</p>
        </a>
      </div>
    </div>
  );
};

export default ClickableCircle;
