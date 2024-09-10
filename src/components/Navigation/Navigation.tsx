import Icons from "../ui/icons";
import "./Navigation.css";

const localData = [
  {
    id: 1,
    url: "#game",
    name: "Игра",
    icon: "icon_game",
    disabled: false,
  },
  {
    id: 2,
    url: "#leaderboard",
    name: "Лидеры",
    icon: "icon_leader",
    disabled: false,
  },
  {
    id: 3,
    url: "#friends",
    name: "Друзья",
    icon: "icon_friend",
    disabled: false,
  },
  {
    id: 4,
    url: "#shop",
    name: "Магазин",
    icon: "icon_shop",
    disabled: true,
  },
  {
    id: 5,
    url: "#settings",
    name: "Настройки",
    icon: "icon_settings",
    disabled: true,
  },
];

type TNavigationItem = {
  id: number;
  url: string;
  name: string;
  icon: string;
  disabled: boolean;
};

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        {localData.map((item: TNavigationItem) => {
          if (item.disabled) return null;

          return (
            <li key={item.id} className={item.disabled ? "disabled" : ""}>
              <a href={item.url} title={item.name}>
                <Icons name={item.icon} />
                <span>{item.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
