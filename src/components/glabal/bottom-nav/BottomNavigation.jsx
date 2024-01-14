export default function BottomNavigation() {
  const map = [
    { title: "Home", icon: "home.svg" },
    { title: "Categories", icon: "categories.svg" },
    { title: "Profile", icon: "grey-profile.svg" },
    { title: "Bag", icon: "grey-cart.svg" },
  ];
  return (
    <div className="flex fixed bottom-0 z-10 w-full justify-around h-14 bg-color-accent sm:hidden hover:cursor-pointer">
      {map.map((item) => (
        <div className="flex flex-col justify-center items-center ">
          <img className="w-6" src={`/assets/icons/${item.icon}`} alt="" />
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
