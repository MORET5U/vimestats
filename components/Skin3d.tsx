import { createRef, FC, Fragment, useCallback, useEffect, useState } from "react";

import { WalkingAnimation } from "../libs/skinview3d/animation";
import { createOrbitControls } from "../libs/skinview3d/orbit_controls";
import { SkinViewer } from "../libs/skinview3d/viewer";

const Skin3d: FC<Props> = ({
  username,
  skin,
  cape,
  width,
  height,
  walkingSpeed,
  enablePan,
  enableRotate,
  enableZoom,
}) => {
  const skinviewRef = createRef<HTMLCanvasElement>();
  const [viewer, setViewer] = useState<SkinViewer | undefined>(undefined);

  const setClothes = useCallback(() => {
    if (viewer) {
      viewer.loadSkin(skin);

      if (cape) viewer.loadCape(cape);
      else viewer.loadCape(null);
    }
  }, [skinviewRef, skin, cape]);

  useEffect(() => {
    let viewer: SkinViewer | undefined = new SkinViewer({
      canvas: skinviewRef.current ? skinviewRef.current : undefined,
      width: width,
      height: height,
    });

    const walk = viewer?.animations.add(WalkingAnimation);
    walk.speed = walkingSpeed || 0.7;

    let control = createOrbitControls(viewer);
    control.enableRotate = enableRotate || true;
    control.enableZoom = enableZoom || false;
    control.enablePan = enablePan || false;

    setViewer(viewer);
    console.log("[SKIN3D] New SkinViewer instance spawned");

    return () => {
      setViewer(undefined);
      skinviewRef.current?.remove();

      console.log("[SKIN3D] Cleaning up");
    };
  }, [skinviewRef.current]);

  useEffect(() => {
    setClothes();
  }, [username, viewer]);

  return (
    <Fragment>
      <canvas id="skinViewer" ref={skinviewRef} className="playerSkinCanvasParent shadow" style={{ cursor: "move" }} />
    </Fragment>
  );
};

type Props = {
  username: string;
  skin: string;
  cape?: string;
  width?: number;
  height?: number;
  enableRotate?: boolean;
  enableZoom?: boolean;
  enablePan?: boolean;
  walkingSpeed?: number;
};

export default Skin3d;
