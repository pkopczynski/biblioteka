import React, { Fragment } from "react";
import { Manage } from "./Manage/Manage";
import { Footer } from "./Footer/Footer";

export const App = () => {
  return (
    <Fragment>
      <Manage />
      <Footer />
    </Fragment>
  );
};
