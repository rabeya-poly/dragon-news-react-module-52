import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import RightNavbar from "../components/layout-components/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayOut = () => {
    return (
        <div className="text-2xl text-green-600 font-poppins">
         <header> <Header></Header></header>
         <section className="py-2 w-11/12 mx-auto">
            <LatestNews></LatestNews>
         </section>
        
        <nav className="py-2 w-11/12 mx-auto"><Navbar></Navbar></nav>
        
          
          <main className="grid grid-cols-12 gap-4">
            <nav className="left col-span-3"><LeftNavbar></LeftNavbar></nav>
            <nav className="col-span-6"><Outlet></Outlet></nav>
            <nav className="col-span-3"><RightNavbar></RightNavbar></nav>
          </main>
          
          
        
         
           </div>
    );
};
export default HomeLayOut;
