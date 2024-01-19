import Icon from "../../shared-components/Icon";

export default function BottomNavigation() {
  const map = [
    { title: "Home", iconName: "home" },
    { title: "Categories", iconName: "categories" },
    { title: "Profile", iconName: "grey-profile" },
    { title: "Bag", iconName: "grey-cart" },
  ];
  return (
    <div className="flex fixed bottom-0 z-10 w-full justify-around h-14 bg-color-accent sm:hidden hover:cursor-pointer">
      {map.map((item) => (
        <div
          key={item.title}
          className="flex flex-col justify-center items-center "
        >
          <Icon className="w-6" name={item.iconName} />
          <span
            className={`text-color-primary font-medium pt-[2px] text-xs leading-3 ${
              item.title !== "Home" ? "hidden" : ""
            }`}
          >
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
}
