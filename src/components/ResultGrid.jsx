import { useDispatch, useSelector } from "react-redux";
import { getPhotos, getVideos, getGIFs } from "../api/mediaApi";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, result, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      const getData = async () => {
        if (!query.trim()) return;
        try {
        dispatch(setLoading())
        let data = [];
        if (activeTab === "photos") {
          const response = await getPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: 'photo',
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
          }));
        }
        if (activeTab === "videos") {
          const response = await getVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: 'video',
            title: item.user.name || 'video',
            thumbnail: item.image,
            src: item.video_files[0].link,
          }));
        }
        if (activeTab === "gif") {
          const response = await getGIFs(query);
          data = response.data.map((item) => ({
            id: item.id,
            type: 'gif',
            title: item.title || 'GIF',
            thumbnail: item.images.preview_gif.url,
            src: item.images.original.url,
          }));
        }
        dispatch(setResults(data))
        } catch (err) {
          dispatch(setError(err.message))
        }
      };
      getData();
    },
    [query, activeTab, dispatch],
  );
  if(error) return( 
  <div className="flex min-h-[50vh] w-full items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border-3 border-red-900/50 bg-gray-900 p-6 text-center shadow-lg sm:p-8">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 text-xl text-red-400">
          !
        </div>

        <h2 className="text-lg font-semibold text-white sm:text-xl">
          Something went wrong
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-400">
          {error}
        </p>
      </div>
  </div>)
  if(loading) return (
  <div className="flex min-h-[50vh] w-full items-center justify-center px-4">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-white sm:h-12 sm:w-12" />

        <p className="text-sm font-medium text-gray-400 sm:text-base">
          Loading results...
        </p>
      </div>
  </div>)
  return ( 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 px-10 pb-10">
      {
        result.map((item,indx) => {
          return <div key={indx}>
            <ResultCard item={item}/>
          </div>
        })
      }
    </div>
)};

export default ResultGrid;
