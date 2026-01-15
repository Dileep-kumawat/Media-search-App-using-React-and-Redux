import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard";
import { setData } from "../store/features/collectionSlice";

const CollectionPage = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.collection.data);
  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex justify-between items-center p-4">
        <h1 className="font-bold md:text-2xl">Your Collection</h1>
        <button onClick={()=>{
          dispatch(setData([]));
        }} className="cursor-pointer px-2 py-1 text-sm md:px-4 md:py-3 rounded md:rounded-xl active:scale-95 bg-red-500 hover:bg-red-600">Clear All</button>
      </div>
      <div className="py-4 overflow-auto h-full relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.length > 0 ? data.map((e) => <CollectionCard e={e} key={e.id} />) : <div className="absolute top-1/2 left-1/2 -translate-1/2 text-gray-600 text-base whitespace-nowrap md:text-4xl">Welcome to Media Search App</div>}
      </div>
    </div>
  )
}

export default CollectionPage