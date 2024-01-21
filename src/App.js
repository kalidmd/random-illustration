import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";

import Card from "./components/Card";
// import SkeletonLoading from "./components/Skeleton"

function App() {
  return (
    <div className="App">
      <SkeletonTheme>
        <Card />
      </SkeletonTheme>
      {/* <SkeletonLoading /> */}
    </div>
  );
}

export default App;
