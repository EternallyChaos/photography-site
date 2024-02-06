"use client";
import { useState } from "react";
import Image from "next/image";
import HomeImage from "/public/home.jpg";
import ImageOne from "/public/pexels-asad-photo-maldives-1024993.jpg";
import ImageTwo from "/public/pexels-dimitri-kuliuk-1488318.jpg";
import ImageThree from "/public/pexels-jeremy-wong-1043902.jpg";
import ImageFour from "/public/pexels-min-an-752842.jpg";
import ImageFive from "/public/pexels-pixabay-219776.jpg";

import ImageSignature from "@/components/ImageSignature";
import VideoModal from "@/components/VideoModal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const videoId = "CwTM0JfUsGs?si=9A8C-BuBbmFHWAAl";

  return (
    <main className="">
      <div className="">
        <div className="relative">
          <Image
            alt="img"
            src={HomeImage}
            className="w-full object-center object-cover h-[100vh]"
          />
          <button
            onClick={openModal}
            className="absolute py-12 px-6 bg-gray-200 hover:bg-gray-400 text-gray-600 top-1/2 left-1/2 text-md"
          >
            Play Film
          </button>
          <VideoModal isOpen={isOpen} setIsOpen={setIsOpen} videoId={videoId} />
        </div>
        <div className="mt-12 w-full">
          <ImageSignature imageSrc={ImageOne} />
          <div className="w-full p-12">
            <div className="flex items-center justify-center gap-12">
              <div className="max-w-3xl">
                <ImageSignature imageSrc={ImageTwo} />
              </div>
              <div className="max-w-3xl">
                <ImageSignature imageSrc={ImageThree} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 w-full">
          <ImageSignature imageSrc={ImageFour} />
          <div className="w-full p-12">
            <div className="flex items-center justify-center gap-12">
              <div className="max-w-3xl">
                <ImageSignature imageSrc={ImageFive} />
              </div>
              <div className="max-w-3xl">
                <ImageSignature imageSrc={HomeImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
