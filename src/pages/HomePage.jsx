import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, setCurrentTab, setQuery } from "../store/features/homeSlice";
import Loading from "../components/Loading";
import Card from "../components/Card";

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.homeSlice.data);
  const selectedTab = useSelector(state => state.homeSlice.currentTab);
  const loading = useSelector(state => state.homeSlice.loading);
  const [text, setText] = useState('');
  const tabs = ['images', 'videos', 'gifs'];
  return (
    <div className="w-full h-full overflow-hidden flex flex-col">
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!(text === "")) {
          dispatch(setQuery(text));
          dispatch(fetchData());
        }
      }} className="w-full p-1 md:p-4 flex gap-2 md:gap-8">
        <div className="w-full flex items-center bg-[#64646489] px-3 py-2 md:px-4 md:py-3 rounded md:rounded-xl gap-3 hover:bg-[#646464c5]"><i className="ri-search-2-line"></i><input className="w-full outline-none " value={text} onChange={(e) => {
          setText(e.target.value);
        }} type="text" placeholder="Search..." /></div>
        <button className="cursor-pointer px-3 py-2 md:px-4 md:py-3 rounded md:rounded-xl active:scale-95 bg-red-500 hover:bg-red-600 font-bold" type="submit">Search</button>
      </form>
      <div className="w-full px-1 md:px-4 flex flex-col h-full">
        <div className="w-full flex gap-2 mt-2 md:mt-0 md:gap-4 *:md:px-4 *:p-2 *:md:py-3 *:rounded *:md:rounded-2xl *:font-semibold *:cursor-pointer *:transition">
          {tabs.map((e, idx) => {
            return <div onClick={() => {
              dispatch(setCurrentTab(e));
              if (!(text === "")) {
                dispatch(fetchData());
              }
            }} className={`${selectedTab === e ? "bg-red-500" : "bg-gray-600"} capitalize`} key={idx}>{e}</div>
          })}
        </div>

        <div className="py-4 overflow-auto h-full relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading ? <Loading /> : data.length > 0 ? data.map((e) => <Card e={e} key={e.id} />) : <div className="absolute top-1/2 left-1/2 -translate-1/2 text-gray-600 text-base whitespace-nowrap md:text-4xl">Welcome to Media Search App</div>}
        </div>
        <div className="h-30"></div>
      </div>
    </div>
  )
}

export default HomePage