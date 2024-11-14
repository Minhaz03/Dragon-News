import React from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftNavbar from "../Components/Layout-Component/LeftNavbar";
import RightNavbar from "../Components/Layout-Component/RightNavbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>

      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>

      <main className="w-11/12 mx-auto pt-6 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>

        <section className="main col-span-6">Main Content</section>

        <aside className="right col-span-3">
            <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
