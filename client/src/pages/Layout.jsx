import React from "react";
import CategeroyPage from "./CategeroyPage";
import Categeroywithlabel from "./Categeroywithlabel";
import HeroPage from "./HeroPage";

const Layout = () => {
    return (
        <div className="px-12 py-5">
            {" "}
            <HeroPage />
            <CategeroyPage />
            <Categeroywithlabel />
        </div>
    );
};

export default Layout;
