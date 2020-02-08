import React, { Fragment } from "react";
import { Manage } from "./Manage/Manage";
import { Footer } from "./Footer/Footer";

export const App: React.FC = () => {
  return (
    <Fragment>
      <Manage />
      <Footer />
    </Fragment>
  );
};
