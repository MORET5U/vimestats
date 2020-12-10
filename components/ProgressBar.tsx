import { useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import { FC, useEffect } from "react";

type Props = {
  startPosition?: number;
  stopDelayMs?: number;
  height?: number;
  options?: any;
};

const ProgressBar: FC<Props> = ({ startPosition = 0.3, stopDelayMs = 200, height = 3, options }) => {
  const router = useRouter();

  let timer: any = null;

  const routeChangeStart = () => {
    NProgress.set(startPosition);
    NProgress.start();
  };

  const routeChangeEnd = () => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      NProgress.done(true);
    }, stopDelayMs);
  };

  const progressBarColor = useColorModeValue("#000000", "#AD87F3");

  useEffect(() => {
    if (options) {
      NProgress.configure(options);
    }

    router.events.on("routeChangeStart", routeChangeStart);
    router.events.on("routeChangeComplete", routeChangeEnd);
    router.events.on("routeChangeError", routeChangeEnd);
  }, []);

  return (
    <style jsx global>{`
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: ${progressBarColor};
        position: fixed;
        z-index: 5000;
        top: 0;
        left: 0;
        width: 100%;
        height: ${height}px;
      }
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px ${progressBarColor}, 0 0 5px ${progressBarColor};
        opacity: 1;
        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
      }
      #nprogress .spinner {
        display: "block";
        position: fixed;
        z-index: 5000;
        bottom: 15px;
        left: 15px;
      }
      #nprogress .spinner-icon {
        width: 42px;
        height: 42px;
        box-sizing: border-box;
        border: solid 5px transparent;
        border-top-color: ${progressBarColor};
        border-left-color: ${progressBarColor};
        border-radius: 50%;
        -webkit-animation: nprogresss-spinner 400ms linear infinite;
        animation: nprogress-spinner 400ms linear infinite;
      }
      .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
      }
      .nprogress-custom-parent #nprogress .spinner,
      .nprogress-custom-parent #nprogress .bar {
        position: absolute;
      }
      @-webkit-keyframes nprogress-spinner {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      @keyframes nprogress-spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  );
};

export default ProgressBar;
