interface ClickableCircleProps {
  link: string;
  text: string;
}

const ClickableCircle: React.FC<ClickableCircleProps> = ({ link, text }) => {
  return (
    <div className="flex justify-center mt-12 space-x-10 mb-8 relative">
      <div className="flex flex-row items-center">
        <a href={link}>
          <div className="sm:w-16 md:w-24 xl:w-28 2xl:w-32 sm:h-16 md:h-24 xl:h-28 2xl:h-32 bg-gradient-to-r from-blue-950 to-blue-200 rounded-full opacity-80 flex items-center justify-center">
            {/* Adicionar imagem */}
          </div>
          <p className="text-white text-sm mt-2">{text}</p>
        </a>
      </div>
    </div>
  );
};

export default ClickableCircle;
