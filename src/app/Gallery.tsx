'use client';

import Image from 'next/image';
import { useState } from 'react';

interface MediaPaths {
  images: {
    drawings: string[];
    posters: string[];
    realistic: string[];
  };
  videos: {
    realistic: string[];
    anime: string[];
  };
}
export default function Gallery({ mediaPaths }: { mediaPaths: MediaPaths }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const openModal = (media: string) => {
    setSelectedMedia(media);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedMedia(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <h1 className="text-4xl mb-8 mt-9">Drawings</h1>
      <div className="mb-32 grid gap-4 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {mediaPaths.images.drawings.map((item, index) => (
          <div key={index} onClick={() => openModal(item)} className="cursor-pointer">
            <Image src={item} alt={`media-${index}`} width={500} height={300} className="rounded-lg" />
          </div>
        ))}
      </div>
      <h1 className="text-4xl mb-8 mt-9">Posters</h1>
      <div className="mb-32 grid gap-4 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {mediaPaths.images.posters.map((item, index) => (
          <div key={index} onClick={() => openModal(item)} className="cursor-pointer">
            <Image src={item} alt={`media-${index}`} width={500} height={300} className="rounded-lg" />
          </div>
        ))}
      </div>
      <h1 className="text-4xl mb-8 mt-9">Realistic</h1>
      <div className="mb-32 grid gap-4 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {mediaPaths.images.realistic.map((item, index) => (
          <div key={index} onClick={() => openModal(item)} className="cursor-pointer">
            <Image src={item} alt={`media-${index}`} width={500} height={300} className="rounded-lg" />
          </div>
        ))}
      </div>
      <h1 className="text-4xl mb-8 mt-9">Image to Video</h1>
      <div className="mb-32 grid gap-4 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left">
        {mediaPaths.videos.realistic.map((item, index) => (
          <div key={index} className="w-full h-full cursor-pointer" >
            <video src={item} controls className="w-full h-auto rounded-lg" />
          </div>
        ))}
      </div>
      <h1 className="text-4xl mb-8 mt-9">Text to Video (anime)</h1>
      <div className="grid gap-4 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left">
        {mediaPaths.videos.anime.map((item, index) => (
          <div key={index} className="w-full h-full cursor-pointer" >
            <video src={item} controls className="w-full h-auto rounded-lg" />
          </div>
        ))}
      </div>

      {modalIsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-white p-4 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-full overflow-auto">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-2xl font-bold text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            {selectedMedia ? (
              <Image src={selectedMedia} alt="Selected Media" width={800} height={600} className="max-w-full max-h-full mb-4" />
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
