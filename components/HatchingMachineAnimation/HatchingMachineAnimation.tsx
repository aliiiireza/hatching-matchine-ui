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

  const [player, setPlayer] = useState(null);
  useEffect(() => {
    if (
      document.querySelectorAll("#player-container .spine-player").length === 0
    ) {
      const tempPlayer: any = new SpinePlayer("player-container", {
        jsonUrl: jsonUrl,
        atlasUrl: atlasUrl,
        preserveDrawingBuffer: false,
        showControls: false,
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
          debugRender: false,
        },
        animation: "1",
        showLoading: false,
      });
      setPlayer(tempPlayer);
    }
  }, []);

  const handleSwitchAnimation = () => {
    if (player) player.setAnimation("animation", true);
  };
  return (
    <div
      style={{
        width: "1000px",
        height: "737px",
        position: "fixed",
        overflow: "hidden",
        right: "-260px",
        bottom: "0px",
      }}
    >
      <div onClick={handleSwitchAnimation}>Idle</div>
      <img
        src="/animate/under_matchine.png"
        style={{
          width: "1000px",
          height: "328",
          position: "absolute",
          top: "407px",
          zIndex: 1,
        }}
      />
      <div
        id="player-container"
        style={{
          height: "1512px",
          width: "730px",
          position: "absolute",
          zIndex: 1,
          top: "-396px",
          left: "83px",
        }}
      ></div>
    </div>
  );
};
