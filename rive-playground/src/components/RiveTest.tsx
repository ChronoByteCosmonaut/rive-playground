"use client";
import Rive, { useRive } from "@rive-app/react-canvas";

import React from "react";

function RiveTest() {
  const { rive, RiveComponent } = useRive({
    src: "/eyesfollowingcursor.riv",
    stateMachines: "followCursor",
    autoplay: false,
  });
  return (
    <RiveComponent
      //   style={{ width: "100%", height: "100%" }}
      onMouseEnter={() => rive && rive.play()}
      onMouseLeave={() => rive && rive.pause()}
    />
  );
}

export default RiveTest;
