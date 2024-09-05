import React, { useState } from "react";
import { motion, PanInfo, useAnimation, useMotionValue } from "framer-motion";
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

const rotateV = {
  start: ({ rotate }: { rotate: number }) => ({
    rotate: rotate,
    transition: { type: "tween", duration: 8, ease: [0.5, 0.1, 0.15, 1] },
  }),
  stop: ({ endDeg }: { endDeg: number }) => ({
    rotate: endDeg,
    transition: { type: "tween", duration: 0 },
  }),
};

export const TarotWheel = () => {
  const [isAnimationStart, setIsAnimationStart] = useState(false);

  const rotateControl = useAnimation();
  const spinCount = 3;
  // position will come from api, it's between 1 ... 8
  const position = 4;
  const offset = (360 / numberOfCards) * position;
  const endValue = useMotionValue(360 * spinCount - offset);
  const onAnimationStart = (event: PointerEvent, info: PanInfo): void => {
    console.log("isAnimationStart", isAnimationStart);
    setIsAnimationStart(true);
    rotateControl.start("start");
    console.log("info", info);
    // setTimeout(() => {
    //   rotateControl.start("stop");
    //   pulseControl.start(vPulse);
    //   setIsAnimationStart(false);
    // }, 8000);
  };
  const onAnimationEnd = () => {
    rotateControl.start("stop");
    setIsAnimationStart(false);
  };

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
        custom={{
          rotate: [0, endValue.get()],
          endDeg: endValue.get(),
        }}
        animate={rotateControl}
        variants={rotateV}
        onPan={onAnimationStart}
        onClick={onAnimationEnd}
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
