import { useState } from "react";
import Icon from "../../../shared-components/Icon";
import Drawer from "../../drawer/Drawer";
import SearchContainer from "./searchBar/SearchContainer";

export default function MobileNavbar() {
  const [drawerState, setDrawerState] = useState(false);

  return (
    <>
      <div className="flex items-center font-semibold text-sm sm:text-[1.225rem] text-color-primary ">
        <Drawer state={drawerState} setState={setDrawerState} />
        <div
          onClick={() => {
            setDrawerState(true);
          }}
        >
          <Icon className="mr-4 hover:cursor-pointer" name={"menu"} />
        </div>
        Home
      </div>
      <div className="self-end flex items-center">
        <SearchContainer />
        <Icon name={"notifications"} />
      </div>
    </>
  );
}
