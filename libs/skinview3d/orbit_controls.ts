import { SkinViewer } from "./viewer.js";
import { Vector3 } from "three";
import { OrbitControls } from "../three-orbitcontrols";

export function createOrbitControls(skinViewer: SkinViewer): OrbitControls {
  const control = new OrbitControls(skinViewer.camera, skinViewer.renderer.domElement);

  // default configuration
  control.target = new Vector3(0, -12, 0);
  control.minDistance = 50;
  control.maxDistance = 256;
  control.enablePan = false;
  control.enableZoom = false;

  control.update();

  return control;
}
