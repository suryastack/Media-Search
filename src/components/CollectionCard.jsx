import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { removeCollection, removeToast } from "../redux/features/collectionSlice";

const CollectionCard = ({item}) => {
    const videoRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useDispatch()

  const openModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      videoRef.current?.play();
    }, 0);
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(item.src);
      const blob = await response.blob();

      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${item.type}-${item.id}`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const removeItem = () => {
    dispatch(removeCollection(item.id))
    dispatch(removeToast())
  }

  return (
      <>
      <div
        onMouseLeave={() => setIsMenuOpen(false)}
        className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="relative aspect-4/3 overflow-hidden">
          {item.type === "video" ? (
            <>
              <video
                ref={videoRef}
                src={item.src}
                poster={item.thumbnail}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div
                onClick={openModal}
                className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/70 text-white cursor-pointer">
                  <i className="ri-play-fill text-2xl"></i>
                </span>
              </div>
            </>
          ) : (
            <>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Image/GIF preview icon */}
              <div
                onClick={openModal}
                className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100"
              >
                <span className="cursor-pointer flex h-14 w-14 items-center justify-center rounded-full bg-black/70 text-white">
                  <i className="ri-eye-line text-2xl"></i>
                </span>
              </div>
            </>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 p-3">
          <div className="min-w-0">
            <h2 className="truncate text-sm font-medium capitalize text-white">
              {item.title}
            </h2>

            <p className="mt-1 text-xs capitalize text-gray-400">{item.type}</p>
          </div>

          <div className="relative shrink-0 flex">
            <button
              onClick={removeItem}
            className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-800 hover:text-white"
            >
            <i className={`ri-bookmark-fill text-lg`}></i>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen((prev) => !prev);
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-800 hover:text-white"
            >
              <i className="ri-more-2-fill text-lg"></i>
            </button>

            {isMenuOpen && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute bottom-13 right-0 z-20 w-30 overflow-hidden rounded-lg border border-gray-700 bg-gray-800 shadow-xl"
              >
                <button
                  onClick={handleDownload}
                  className="flex w-full items-center gap-2 px-4 py-3 text-sm text-white transition hover:bg-gray-700"
                >
                  <i className="ri-download-2-line"></i>
                  Download
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center"
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                autoPlay
                muted
                controls
                className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
              />
            ) : (
              <img
                src={item.src}
                alt={item.title}
                className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
              />
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default CollectionCard
