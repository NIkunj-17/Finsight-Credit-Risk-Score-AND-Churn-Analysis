import { Outlet } from "react-router-dom"
import React from 'react'
import Sidebar from "../Components/Sidebar";

function MainLayout() {
  return (
    <div className="flex">
    <Sidebar/>
    <div className="bg-slate-200 w-screen border border-black rounded-l-xl">
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout;
