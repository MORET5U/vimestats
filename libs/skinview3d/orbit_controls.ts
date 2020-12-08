import { Vector3 } from "three";

import { OrbitControls } from "../three-orbitcontrols";
import { SkinViewer } from "./viewer";

export function createOrbitControls(skinViewer: SkinViewer): OrbitControls {
  const control = new OrbitControls(skinViewer.camera, skinViewer.renderer.domElement);

  // default configuration
  control.enablePan = false;
  control.target = new Vector3(0, -8, 0);
  control.minDistance = 10;
  control.maxDistance = 256;
  control.update();

  return control;
}
