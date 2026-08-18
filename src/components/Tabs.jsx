import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gif"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state)=>state.search.activeTab)
  return (
    <div className="flex gap-5 p-10">
      {tabs.map(function (elem, indx) {
        return (
          <button
            onClick={() => dispatch(setActiveTabs(elem))}
            className={`${(activeTab===elem?'bg-(--c4) text-(--c1)':'bg-(--c2) text-gray-400 hover:text-(--c5)')} transition-transform duration-100 px-5 py-2 rounded uppercase cursor-pointer active:scale-95`}
            key={indx}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
