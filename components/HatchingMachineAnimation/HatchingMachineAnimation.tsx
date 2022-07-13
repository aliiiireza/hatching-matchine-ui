import { useEffect, useState } from "react";
import { SpinePlayer } from "@esotericsoftware/spine-player";

export enum HATCH_STATES {
  IDLE,
  HATCHED,
  HATCHING,
}

export const HatchingMachineAnimation = ({
  state,
}: {
  state: HATCH_STATES;
}) => {
  var jsonUrl = "animate/matchine.json";
  var atlasUrl = "animate/matchine.atlas";

  useEffect(() => {
    if (
      document.querySelectorAll("#player-container .spine-player").length === 0
    )
      new SpinePlayer("player-container", {
        jsonUrl: jsonUrl,
        atlasUrl: atlasUrl,
        preserveDrawingBuffer: false,
        showControls: true,
        alpha: true,
        premultipliedAlpha: true,
        viewport: {
          // x: -300,
          // y: -500,
          // width: 300,
          // height: 500,
          // padLeft: "5%",
          // padRight: "5%",
          // padTop: "5%",
          // padBottom: "5%",
          debugRender: true,
        },
        animation: "animation",
        showLoading: false,
      });
  }, []);

  return (
    <div
      style={{
        width: "1000px",
        height: "705px",
        position: "relative",
      }}
    >
      {/* <img
        src="/hatching-machine.png"
        style={{
          width: "1000px",
          height: "705px",
          position: "absolute",
          zIndex: 1,
        }}
      /> */}
      <div
        id="player-container"
        style={{
          height: "1512px",
          width: "730px",
          position: "absolute",
          zIndex: 1,
          top: "-596px",
          left: "83px",
        }}
      ></div>
    </div>
  );
};
