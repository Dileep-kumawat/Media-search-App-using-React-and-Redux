import { NavLink } from "react-router-dom"

const SideBar = () => {
    return (
        <div className="h-full border-r p-2 md:p-4 flex justify-between flex-col items-center">
            <div className="flex gap-2 flex-col *:p-2 *:hover:bg-gray-600 *:cursor-pointer text-2xl *:rounded-2xl">
                <div><img className="h-6 w-full rounded-full object-cover" src="logo.jpg" alt="logo" loading="lazy" /></div>
                <NavLink to='/' style={({ isActive }) => ({
                    color: isActive ? "red" : "",
                })}><div title="Home"><i className="ri-home-smile-fill"></i></div></NavLink>
                <NavLink to='/collection' style={({ isActive }) => ({
                    color: isActive ? "red" : "",
                })}><div title="Collection"><i className="ri-git-repository-line"></i></div></NavLink>
            </div>
            <div className="flex gap-2 flex-col *:p-2 *:hover:bg-gray-600 *:cursor-pointer text-2xl *:rounded-2xl">
                <div title="Profile"><img className="h-6 w-full rounded-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR92SteKCmoJpBh3GlakGipEznqeWRH2NyfpA&s" alt="profile pic" loading="lazy" /></div>
                <div title="setting"><i className="ri-settings-3-line"></i></div>
            </div>
        </div>
    )
}

export default SideBar
