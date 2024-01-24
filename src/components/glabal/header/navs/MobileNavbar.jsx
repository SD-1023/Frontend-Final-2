import Icon from "../../../shared-components/Icon";
import SearchContainer from "./searchBar/SearchContainer";

export default function MobileNavbar() {
  return (
    <>
      <div className="flex items-center font-semibold text-sm sm:text-[1.225rem] text-color-primary ">
        <Icon className="mr-4 hover:cursor-pointer" name={"menu"} />
        Home
      </div>
      <div className="self-end flex items-center">
        <SearchContainer />
        <Icon name={"notifications"} />
      </div>
    </>
  );
}
