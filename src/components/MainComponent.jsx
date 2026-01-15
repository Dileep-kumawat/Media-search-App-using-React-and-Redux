import { Route, Routes } from "react-router-dom"
import SideBar from "./SideBar"
import HomePage from '../pages/HomePage'
import CollectionPage from "../pages/CollectionPage"
import PageNotFound from "./PageNotFound"

const MainComponent = () => {
    return (
        <div className="absolute inset-0 bg-[#00000024] flex text-gray-200">
            <SideBar />
            <div className="h-full overflow-hidden w-full p-4">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/collection" element={<CollectionPage />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </div>
    )
}

export default MainComponent