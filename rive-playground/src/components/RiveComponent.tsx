"use client";
import Rive, { useRive } from "@rive-app/react-canvas";

import React from "react";

function RiveComponent() {
  const { rive, RiveComponent } = useRive({
    src: "/woman_large.riv",
    stateMachines: "followCursor",
    autoplay: false,
  });
  return (
    <RiveComponent
      style={{ width: "100%", height: "100%", aspectRatio: "16/9" }}
      onMouseEnter={() => rive && rive.play()}
      onMouseLeave={() => rive && rive.pause()}
    />
  );
}

export default RiveComponent;
