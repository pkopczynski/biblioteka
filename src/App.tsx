import React, { Fragment } from "react";
import { Manage } from "./Manage/Manage";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";

export const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Manage />
      <Footer />
    </Fragment>
  );
};
