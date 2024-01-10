import DesktopNavbar from "./navs/DesktopNavbar";
import MobileNavbar from "./navs/MobileNavbar";

export default function Header() {
  const categories = [
    "Handbags",
    "Watches",
    "Skincare",
    "Jewellery",
    "Apparels",
  ];
  return (
    <div className="p-4 lg:p-5">
      <div className="flex justify-between lg:hidden">
        <MobileNavbar />
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-between">
        <DesktopNavbar categories={categories} />
      </div>
    </div>
  );
}
