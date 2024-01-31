import { Link } from "react-router-dom";
import Icon from "../../shared-components/Icon";

export default function Footer({ categories }) {
  return (
    <div className=" flex flex-col md:flex-row md:justify-between bg-color-primary w-fill pt-6  md:mr-0 md:px-[3.75rem] pb-7">
      <div className="text-sm md:text-base border-b-2 px-4 pb-7 md:px-0 md:border-0 md:w-3/6 lg:w-5/12 md:flex justify-between border-color-primaryTint ">
        <div>
          <h3 className="text-color-bright text-sm md:text-base mb-[0.44rem] md:mb-[0.75rem]">
            Shop by Category
          </h3>
          <ul className="text-color-lightText flex flex-col">
            {categories &&
              categories.map((categorie) => (
                <Link
                  className="w-fit"
                  key={categorie.id}
                  to={`/category/${categorie.name}`}
                >
                  {categorie.name}
                </Link>
              ))}
          </ul>
        </div>
      </div>
      <div className="px-4 pb-12 sm:pb-0">
        <div className="pt-4 pb-6 md:flex md:justify-end">
          <Icon name={"MediaLogos"} />
        </div>
        <div>
          <div className="flex flex-row md:justify-end text-color-bright pb-3">
            <Icon name={"location"} />
            <p className="pl-2">Palestine</p>
          </div>
          <p className="text-color-lightText pl-1 md:whitespace-pre">
            &copy; 2024 | Cora Leviene All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
