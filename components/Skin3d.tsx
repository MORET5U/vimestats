import { Component, RefObject, createRef, Fragment } from "react";
import { SkinViewer } from "../libs/skinview3d/viewer";
import { WalkingAnimation } from "../libs/skinview3d/animation";
import { createOrbitControls } from "../libs/skinview3d/orbit_controls";
import { v4 as uuid } from "uuid";

type Props = {
  username: string;
  width?: number;
  height?: number;
  enableRotate?: boolean;
  enableZoom?: boolean;
  enablePan?: boolean;
  walkingSpeed?: number;
};

type State = {
  viewer?: SkinViewer;
  reqID?: string;
};

export default class Skin3d extends Component<Props> {
  public skinviewRef: RefObject<HTMLDivElement>;
  public state: State;

  constructor(props: Props) {
    super(props);
    this.skinviewRef = createRef();
    this.state = {
      viewer: undefined,
      reqID: uuid(),
    };
  }

  public componentDidMount() {
    console.log("[Skin3d] Component just mounted.");

    this.setState(
      {
        viewer: new SkinViewer({
          domElement: this.skinviewRef?.current!,
          width: this.props.width,
          height: this.props.height,
          skinUrl: `https://skin.vimeworld.ru/raw/skin/${this.props.username}.png?_=${this.state.reqID}`,
          capeUrl: `https://skin.vimeworld.ru/raw/cape/${this.props.username}.png?_=${this.state.reqID}`,
        }),
      },
      () => {
        const { viewer } = this.state;
        const {
          enableRotate,
          enableZoom,
          enablePan,
          walkingSpeed,
        } = this.props;

        const walk = viewer!.animations.add(WalkingAnimation);
        walk.speed = walkingSpeed || 0.7;

        let control = createOrbitControls(viewer!);
        control.enableRotate = enableRotate || true;
        control.enableZoom = enableZoom || false;
        control.enablePan = enablePan || false;
      }
    );
  }

  public componentWillUnmount() {
    console.log("[Skin3d] Cleaing up the component...");

    this.setState({
      viewer: undefined,
      reqID: undefined,
    });
  }

  public componentDidUpdate(prevProps: Props) {
    const { viewer } = this.state;

    if (prevProps.username !== this.props.username) {
      console.log("[Skin3d] Component received new username prop.");

      // Reassigning new skin and cape for the viewer
      viewer!.skinUrl = `https://skin.vimeworld.ru/raw/skin/${this.props.username}.png?_=${this.state.reqID}`;
      viewer!.capeUrl = `https://skin.vimeworld.ru/raw/cape/${this.props.username}.png?_=${this.state.reqID}`;
    }

    if (
      prevProps.width !== this.props.width ||
      prevProps.height !== this.props.height
    ) {
      viewer!.setSize(this.props.width!, this.props.height!);
    }
  }

  public render() {
    return (
      <Fragment>
        <div
          ref={this.skinviewRef}
          className="playerSkinCanvasParent shadow"
          style={{ cursor: "move" }}
        />
      </Fragment>
    );
  }
}
