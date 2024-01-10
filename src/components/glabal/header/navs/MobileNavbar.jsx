export default function MobileNavbar() {
  return (
    <>
      <div className="flex items-center font-semibold text-sm text-color-primary ">
        <img
          className="mr-4 hover:cursor-pointer"
          src="/assets/icons/menu.svg"
          alt=""
        />
        Home
      </div>
      <div className="self-end flex items-center">
        <img src="/assets/icons/add-to-homescreen.svg" alt="" />
        <img className="px-6" src="/assets/icons/search.svg" alt="" />
        <img src="/assets/icons/notifications.svg" alt="" />
      </div>
    </>
  );
}
