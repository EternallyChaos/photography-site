import React from "react";
import Image from "next/image";

const ImageSignature = ({ imageSrc }) => {
  return (
    <div className="relative z-10">
      <div className="max-w-full max-h-full overflow-hidden">
        <Image
          alt="image"
          src={imageSrc}
          className="w-full object-center object-cover hover:scale-110 transition duration-[2000ms] cursor-pointer max-w-full max-h-full overflow-hidden"
        />
      </div>
      <div className="z-20 absolute bottom-0 left-0 bg-gray-400 px-3 pxy-2 md:px-6 md:py-4">
        Eric and Leana
      </div>
    </div>
  );
};

export default ImageSignature;
