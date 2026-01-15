import { useDispatch, useSelector } from "react-redux"
import { setData } from "../store/features/collectionSlice"

const Card = ({ e }) => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.collection.data);
    return (
        <div className="w-full rounded-2xl overflow-hidden card h-[45vh] relative">
            {e.type === "video" ? <video className="w-full h-full cursor-pointer object-cover object-center" src={e.src} loop autoPlay muted></video> : <img className="w-full h-full cursor-pointer object-cover object-center" src={e.src} alt="image" loading="lazy" />}
            <div className="card-text w-full text-sm p-4 flex gap-2 justify-between items-center">
                <p className="capitalize">{
                    (function () {
                        try {
                            return e.title.length > 30
                                ? e.title.slice(0, 30) + "..."
                                : e.title
                        } catch (error) {
                            return e.title
                        }
                    })()
                }</p>
                <button onClick={() => {
                    let newData = [...data];
                    newData = newData.filter(ele=>{
                        return ele.id !== e.id;
                    })
                    dispatch(setData(newData));
                }} className="px-4 active:scale-95 py-2 rounded bg-red-500 cursor-pointer">Remove</button>
            </div>
        </div>
    )
}

export default Card
