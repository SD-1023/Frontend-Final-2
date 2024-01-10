import Icon from "../../../shared-components/Icon";

export default function MobileNavbar() {
  return (
    <>
      <div className="flex items-center font-semibold text-sm text-color-primary ">
        <Icon className="mr-4 hover:cursor-pointer" name={"menu"} />
        Home
      </div>
      <div className="self-end flex items-center">
        <Icon name={"add-to-homescreen"} />
        <Icon className="px-6" name={"search"} />
        <Icon name={"notifications"} />
      </div>
    </>
  );
}
