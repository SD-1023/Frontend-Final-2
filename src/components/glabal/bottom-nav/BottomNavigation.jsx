import { useState } from "react";
import Icon from "../../shared-components/Icon";
import ProfileIcon from "../../shared-components/ProfileIcon";
import { Link } from "react-router-dom";

export default function BottomNavigation() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="flex fixed bottom-0 z-10 w-full justify-around h-14 bg-color-accent sm:hidden hover:cursor-pointer">
      <Link
        to={"/"}
        onClick={() => {
          setSelected(1);
        }}
        className="flex transition-all flex-col justify-center items-center "
      >
        <Icon className="w-6" name={selected !== 1 ? "grey-home" : "home"} />
        <span
          className={`text-color-primary font-medium pt-[2px] text-xs leading-3 ${
            selected !== 1 ? "hidden" : ""
          }`}
        >
          Home
        </span>
      </Link>
      <Link
        onClick={() => {
          setSelected(2);
        }}
        to={"/cart"}
        className="flex transition-all flex-col justify-center items-center "
      >
        <Icon name={selected !== 2 ? "grey-cart" : "bag"} />
        <span
          className={`text-color-primary font-medium pt-[2px] text-xs leading-3 ${
            selected !== 2 ? "hidden" : ""
          }`}
        >
          Cart
        </span>
      </Link>
      <div
        onClick={() => {
          setSelected(3);
        }}
        className="flex transition-all flex-col justify-center items-center "
      >
        <ProfileIcon iconName={selected !== 3 ? "grey-profile" : "profile"} />
        <span
          className={`text-color-primary font-medium pt-[2px] text-xs leading-3 ${
            selected !== 3 ? "hidden" : ""
          }`}
        >
          Profile
        </span>
      </div>
    </div>
  );
}
