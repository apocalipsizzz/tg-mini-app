import React, { useEffect, useRef, useState } from "react";
import { motion, TapInfo, useAnimation, useMotionValue } from "framer-motion";
import "./TarotWheel.css";

const cardData = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "7",
    url: "https://images.unsplash.com/photo-1578608712688-36b5be8823dc?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "8",
    url: "https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "9",
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "10",
    url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "11",
    url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "12",
    url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "13",
    url: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "14",
    url: "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "15",
    url: "https://images.unsplash.com/photo-1578608712688-36b5be8823dc?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "16",
    url: "https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "17",
    url: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "18",
    url: "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "19",
    url: "https://images.unsplash.com/photo-1578608712688-36b5be8823dc?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "20",
    url: "https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

type Card = {
  id: string;
  url: string;
};

const width = window.innerWidth;
const height = window.innerHeight;
const numberOfCards = cardData.length;
const _size = 80;
const _cardSize = {
  width: _size,
  height: _size * 1.67,
  borderRadius: 10,
};
const TWO_PI = Math.PI * 2;
const theta = TWO_PI / numberOfCards;
const cardVisibilityPercentage = 0.5;
const cardSize = _cardSize.width * cardVisibilityPercentage;
// Коэфицент отображение карточек, чем ближе к 1 тем больше растояние между картами
const curcleVisibilityPercentage = 1.1;
const curcleRadius = Math.max(
  (cardSize * numberOfCards) / TWO_PI,
  width / curcleVisibilityPercentage
);

// const rotateV = {
//   start: ({ rotate }: { rotate: number }) => ({
//     rotate: rotate,
//     transition: { type: "tween", duration: 8, ease: [0.5, 0.1, 0.15, 1] },
//   }),
//   stop: ({ endDeg }: { endDeg: number }) => ({
//     rotate: endDeg,
//     transition: { type: "tween", duration: 0 },
//   }),
// };

export const TarotWheel = () => {
  // const [isAnimationStart, setIsAnimationStart] = useState(false);
  // const [widthX, setWidthX] = useState<number>(1);
  // const [touchStartX, setTouchStartX] = useState<number>(1);
  // const [touchEndX, setTouchEndX] = useState<number>(1);

  // const rotateControl = useAnimation();
  // const onAnimationStart = (event: PointerEvent, info: TapInfo): void => {
  //   console.log("onAnimationStart info", info);
  //   setIsAnimationStart(true);
  //   rotateControl.start("start");
  //   const pointX = Math.round(info.point.x);
  //   const windowX = window.innerWidth;
  //   if (pointX < 200) {
  //     setWidthX(-pointX);
  //   } else {
  //     setWidthX(pointX);
  //   }
  //   // setTimeout(() => {
  //   //   rotateControl.start("stop");
  //   //   pulseControl.start(vPulse);
  //   //   setIsAnimationStart(false);
  //   // }, 8000);
  // };
  // // const endValue = useMotionValue(widthX);
  // // console.log("widthX1", widthX);
  // const onAnimationEnd = () => {
  //   rotateControl.start("stop");
  //   setIsAnimationStart(false);
  // };

  // const cardWeel = document.querySelector(".card-wheel");
  // cardWeel?.addEventListener("touchstart", (event) => {
  //   // const { touches, changedTouches } = event.originalEvent ?? event;
  //   // const touch = touches[0];
  //   // setTouchX(touch.clientX);
  //   // console.log("event start", event);
  //   // console.log("event start", event.touches[0].clientX);
  //   setTouchStartX(event.touches[0].clientX);
  //   // console.log("touch start", touch);
  // });
  // // cardWeel?.addEventListener("touchend", (event) => {
  // //   console.log("event end", event);
  // //   console.log("event end", event.changedTouches[0].clientX);
  // //   setTouchEndX(event.changedTouches[0].clientX);
  // //   // const { touches, changedTouches } = event.originalEvent ?? event;
  // //   // const touch = touches[0] ?? changedTouches[0];
  // //   // const x = touch.pageX - touchX;
  // //   // console.log("touch end", touch);
  // //   // console.log("touchX1", touchX);
  // //   // console.log("event1", x);
  // //   // setWidthX(x);
  // //   // const touch = event.touches[0] || event.changedTouches[0];
  // //   // const realTarget = document.elementFromPoint(touch.clientX, touch.clientY);
  // //   // event.offsetX = touch.clientX - realTarget.getBoundingClientRect().x;
  // //   // console.log("event1", event.offsetX);
  // // });
  // cardWeel?.addEventListener("touchmove", (event) => {
  //   // const { touches, changedTouches } = event.originalEvent ?? event;
  //   // const touch = touches[0];
  //   // setTouchX(touch.clientX);
  //   // console.log("event touchmove", event);
  //   // console.log("event touchmove", event.changedTouches[0].clientX);
  //   setTouchEndX(event.changedTouches[0].clientX);
  //   // console.log("event start", event.touches[0].clientX);
  //   // setTouchStartX(event.touches[0].clientX);
  //   // console.log("touch start", touch);
  // });

  // useEffect(() => {
  //   setWidthX(touchEndX - touchStartX);
  // }, [touchEndX]);

  // // console.log("touchStartX", touchStartX);
  // // console.log("touchEndX", touchEndX);
  // console.log("touch diff", widthX);

  // const refWheel = useRef<HTMLDivElement>(null);
  const [dial, setDial] = useState(
    document.querySelector(".card-wheel") as HTMLElement
  );
  // const dial = document.querySelector(".card-wheel") as HTMLElement;
  // const dial = refWheel.current;
  const radius = curcleRadius / 2;
  const rect = dial?.getBoundingClientRect() || { top: 0, left: 0 };
  const dialX = rect.left + radius;
  const dialY = rect.top + radius;

  let currentRotation = 45;
  let lastRotation = currentRotation;

  console.log("dialX", dialX);
  console.log("dialY", dialY);

  const getDegress = (x: number, y: number) => {
    const radians = Math.atan2(x - dialX, y - dialY);
    const degrees = Math.round(radians * (180 / Math.PI) + 100);

    return degrees;
  };

  type Touch = {
    identifier: number;
    target: EventTarget;
    clientX: number;
    clientY: number;
    screenX: number;
    screenY: number;
    pageX: number;
    pageY: number;
  };

  const getPosition = (event: {
    touches: Touch[];
    changedTouches: { pageX: number; pageY: number }[];
    pageX: number;
    pageY: number;
  }) => {
    // console.log(event);
    const x = event.touches
      ? event.changedTouches[0].pageX * -100
      : event.pageX;
    const y = event.touches
      ? event.changedTouches[0].pageY * -100
      : event.pageY;

    return { x, y };
  };

  const setDegrees = (event: MouseEvent | TouchEvent) => {
    currentRotation =
      getDegress(...Object.values(getPosition(event))) - lastRotation;
  };

  const setRotation = (degrees: number) => {
    if (dial) {
      dial.style.transform = `rotate(${degrees}deg)`;
    }
  };

  const rotate = (event: any) => {
    const degrees =
      getDegress(...Object.values(getPosition(event))) - currentRotation;

    setRotation(degrees);
    lastRotation = degrees;
  };

  setRotation(currentRotation);

  useEffect(() => {
    const dialog = document.querySelector(".card-wheel") as HTMLElement;
    setDial(dialog);
  }, []);

  dial?.addEventListener("mousedown", (event) => {
    setDegrees(event);
    document.addEventListener("mousemove", rotate);
  });

  dial?.addEventListener("touchstart", (event) => {
    setDegrees(event);
    document.addEventListener("touchmove", rotate);
  });

  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", rotate);
  });

  document.addEventListener("touchend", () => {
    document.removeEventListener("touchmove", rotate);
  });

  return (
    <>
      <motion.div
        className="card-wheel"
        style={{
          width: curcleRadius * 2,
          height: curcleRadius * 2,
          borderRadius: curcleRadius,
          position: "absolute",
          top: height - curcleRadius * 0.8,
        }}
        // ref={refWheel}
        // custom={{
        //   rotate: [0, widthX],
        //   endDeg: widthX,
        // }}
        // animate={rotateControl}
        // variants={rotateV}
        // onTap={onAnimationStart}
        // onClick={onAnimationEnd}
        // onPanEnd={onAnimationEnd}
      >
        {cardData.map((card, index) => {
          return <TarotCard key={card.id} card={card} index={index} />;
        })}
      </motion.div>
    </>
  );
};

const TarotCard = ({ card, index }: { card: Card; index: number }) => {
  return (
    <>
      <motion.div
        className="card__item"
        style={{
          width: _cardSize.width,
          height: curcleRadius * 2,
          rotate: `${theta * index}rad`,
        }}
      >
        <img
          className="card__image"
          src={card.url}
          style={{
            width: _cardSize.width,
            height: _cardSize.height,
            borderRadius: _cardSize.borderRadius,
          }}
          alt="Placeholder alt"
        />
      </motion.div>
    </>
  );
};
