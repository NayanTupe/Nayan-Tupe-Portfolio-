import { useEffect, useRef } from "react";

const TALKING_SEQUENCE = [0, 1, 2, 3, 4, 1, 3, 2, 4, 0];
const FRAME_SIZE = 512;

function removeChromaKey(context) {
  const image = context.getImageData(0, 0, FRAME_SIZE, FRAME_SIZE);
  const { data } = image;

  for (let index = 0; index < data.length; index += 4) {
    const red = data[index];
    const green = data[index + 1];
    const blue = data[index + 2];
    const magentaStrength = Math.min(red, blue) - green;

    if (red > 150 && blue > 130 && magentaStrength > 55) {
      data[index + 3] = 0;
    } else if (red > 125 && blue > 115 && magentaStrength > 34) {
      data[index + 3] = Math.max(0, 255 - (magentaStrength - 34) * 8);
      data[index] = Math.max(0, red - magentaStrength * 0.35);
      data[index + 2] = Math.max(0, blue - magentaStrength * 0.28);
    }
  }

  context.putImageData(image, 0, 0);
}

function TalkingAvatar({ isTalking }) {
  const canvasRef = useRef(null);
  const framesRef = useRef([]);
  const frameIndexRef = useRef(0);

  useEffect(() => {
    const source = new Image();
    source.src = "/images/nayan-talking-sprite-v2.png";

    source.onload = () => {
      framesRef.current = Array.from({ length: 6 }, (_, index) => {
        const frame = document.createElement("canvas");
        frame.width = FRAME_SIZE;
        frame.height = FRAME_SIZE;
        const context = frame.getContext("2d", { willReadFrequently: true });
        const column = index % 3;
        const row = Math.floor(index / 3);

        context.drawImage(
          source,
          column * FRAME_SIZE,
          row * FRAME_SIZE,
          FRAME_SIZE,
          FRAME_SIZE,
          0,
          0,
          FRAME_SIZE,
          FRAME_SIZE,
        );
        removeChromaKey(context);
        return frame;
      });

      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (canvas && context) {
        context.clearRect(0, 0, FRAME_SIZE, FRAME_SIZE);
        context.drawImage(framesRef.current[0], 0, 0);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return undefined;

    frameIndexRef.current = 0;

    const drawFrame = () => {
      if (!framesRef.current.length) return;
      const sequence = isTalking ? TALKING_SEQUENCE : [0, 0, 0, 0, 5, 0];
      const frame = sequence[frameIndexRef.current % sequence.length];
      context.clearRect(0, 0, FRAME_SIZE, FRAME_SIZE);
      context.drawImage(framesRef.current[frame], 0, 0);
      frameIndexRef.current += 1;
    };

    drawFrame();
    const interval = window.setInterval(drawFrame, isTalking ? 165 : 900);
    return () => window.clearInterval(interval);
  }, [isTalking]);

  return (
    <canvas
      ref={canvasRef}
      className="talking-avatar-canvas"
      width={FRAME_SIZE}
      height={FRAME_SIZE}
      aria-label="Animated AI avatar of Nayan Tupe"
      role="img"
    />
  );
}

export default TalkingAvatar;
