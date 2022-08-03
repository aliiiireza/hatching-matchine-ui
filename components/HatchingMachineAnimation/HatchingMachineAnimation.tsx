import { useEffect, useState } from "react";
import { SpinePlayer } from "@esotericsoftware/spine-player";

export enum HATCH_STATES {
  IDLE,
  BEE_HATCH_START,
  BEE_HATCH_END,
  QUEEN_HATCH_START,
  QUEEN_HATCH_END,
}

const animations = {
  idle: "1",
  bee: {
    idle: "Normal egg idle",
    in: "Normal egg in",
    out: "Normal egg out",
  },
  queen: {
    idle: "Queen egg idle",
    in: "Queen egg in",
    out: "Queen egg out",
  },
};

export const HatchingMachineAnimation = ({
  state,
  setState,
}: {
  state: HATCH_STATES;
  setState: any;
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
          x: -1100,
          y: -1100,
          width: 2200,
          height: 2200,
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

  useEffect(() => {
    if (!player) return;
    switch (state) {
      // IDLE
      case HATCH_STATES.IDLE:
        player.setAnimation(animations.idle, true);
        break;

      // BEE HATCH START
      case HATCH_STATES.BEE_HATCH_START:
        player.setAnimation(animations.bee.in, false);
        setTimeout(() => player.setAnimation(animations.bee.idle, true), 3000);
        break;

      // BEE HATCH END
      case HATCH_STATES.BEE_HATCH_END:
        player.setAnimation(animations.bee.out, false);
        setTimeout(() => setState(HATCH_STATES.IDLE), 2000);
        break;

      // QUEEN HATCH START
      case HATCH_STATES.QUEEN_HATCH_END:
        player.setAnimation(animations.queen.in, false);
        setTimeout(
          () => player.setAnimation(animations.queen.idle, true),
          3000
        );
        break;

      // QUEEN HATCH END
      case HATCH_STATES.QUEEN_HATCH_END:
        player.setAnimation(animations.queen.out, false);
        setTimeout(() => setState(HATCH_STATES.IDLE), 2000);
        break;
    }
  }, [state]);

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
          height: "1500px",
          width: "930px",
          position: "absolute",
          zIndex: 1,
          top: "-401px",
          left: "23px",
        }}
      ></div>
    </div>
  );
};
