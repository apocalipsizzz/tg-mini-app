import React, { Dispatch, SetStateAction, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export const SwipeCards = () => {
  const [cards, setCards] = useState<Card[]>(cardData);
  const [results, setResults] = useState<Card[]>(cardData);

  return (
    <>
      <div>Results: {results[0].id}</div>
      <motion.div className="cards">
        {cards.map((card, index) => {
          return (
            <Card
              key={`${card.id}`}
              cards={cards}
              setCards={setCards}
              setResults={setResults}
              index={index + 1}
              {...card}
            />
          );
        })}
      </motion.div>
    </>
  );
};

const Card = ({
  id,
  url,
  index,
  setCards,
  setResults,
  cards,
}: {
  id: string;
  url: string;
  index: number;
  setCards: Dispatch<SetStateAction<Card[]>>;
  setResults: Dispatch<SetStateAction<Card[]>>;
  cards: Card[];
}) => {
  const lastId = cards[cards.length - 1].id;
  const [selectedCardId, setSelectedCardId] = useState(lastId);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateRaw = useTransform(x, [-100, 100], [-10, 10]);
  // const opacity = useTransform(y, [-400, 0, 400], [0, 1, 0]);

  const isFront = id === selectedCardId;

  // console.log("isFront1", isFront);
  // console.log("selectedCardId", selectedCardId);
  // console.log("id1", id);
  console.log("index1", index);

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : index % 2 ? 16 : -16;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleSelected = (event) => {
    const target = event.target;
    document.querySelectorAll(".cards__item").forEach((element) => {
      element.classList.remove("hover");
    });
    target.classList.add("hover");
    setSelectedCardId(target.getAttribute("data-id"));
    // console.log("index", event);
    // x.set(0);
  };

  const handleDragStart = (event, info) => {
    // console.log("event3", info);
    // console.log("target3", event.target);
    handleSelected(event);
    if (info.offset.y < -4) {
      console.log("info.offset.y", info.offset.y);
      // console.log("id", id);
      setResults(cards.filter((v) => v.id === id));
      // setCards([cards[2], cards[0], cards[1]]);
      // setCards((pv) => pv.filter((v) => v.id !== id));
    }
  };

  const handleDragEnd = (event: any, info: any) => {
    event.target.classList.remove("hover");
    console.log("info", info);
    console.log("event target", event.target);
    // console.log("offset", info.offset.y);
    // console.log("points", info.point.x, info.point.y);
    // if (Math.abs(x.get()) > 100) {
    //   setCards([cards[2], cards[0], cards[1]]);
    // }
    // if (info.offset.y < -50) {
    //   // console.log("offset2", info.offset.y);
    //   setCards([cards[2], cards[0], cards[1]]);
    //   // setCards(cards.slice(0, -1));
    // }
    // console.log("y", info.offset.y);
    // x.on("change", (latest) => console.log(latest));
    // console.log("index2", index);
    // x.set(0);
  };

  const handleHoverStart = (event) => {
    console.log("event2", event);
    console.log("target2", event.target);
    event.target.classList.add("hover");
  };
  const handleHoverEnd = (event) => {
    console.log("event1", event);
    console.log("target1", event.target);
    event.target.classList.remove("hover");
    console.log("index2", index);
    // x.set(0);
    // y.set(index % 2 ? -32 : 32);
  };

  function angle(i: number) {
    const factor = cards.length / 4;
    let x = offsetFromCenter(cards, i) * 0.05;
    if (cards.length % 2 === 0) x += 0.025;
    return x * (Math.PI / factor);
  }

  function offsetFromCenter<T>(array: T[], index: number): number {
    return index - Math.floor(array.length / 2);
  }

  return (
    <motion.div
      className="cards__item"
      drag
      dragConstraints={{ bottom: 0, left: 0, right: 0 }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      // onHoverStart={handleSelected}
      // onHoverEnd={handleHoverEnd}
      dragElastic={0.4}
      style={{
        x,
        y,
        rotate,
        // opacity,
      }}
      data-id={id}
      data-index={index}
    >
      <motion.img className="cards__image" src={url} alt="Placeholder alt" />
    </motion.div>
  );
};

type Card = {
  id: string;
  url: string;
};

const cardData: Card[] = [
  {
    id: "11",
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "12",
    url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "13",
    url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "11",
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "12",
    url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "13",
    url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "11",
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "12",
    url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "13",
    url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
