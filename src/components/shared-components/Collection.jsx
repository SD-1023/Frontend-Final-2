import { Link } from "react-router-dom";

export default function CollectionCard({ image, title, path }) {
  const IMG_PATH = "/Frontend-Final-2/assets/images/";
  return (
    <Link
      to={path}
      className="relative rounded-lg md:rounded-2xl overflow-hidden"
    >
      <img className=" h-full w-full" src={`${IMG_PATH}${image}`} alt="" />
      <div className="grey-linear-gradient absolute w-full bottom-0 pl-[0.62rem] pb-[0.56rem] md:p-4">
        <h3 className="text-color-typeHighEmphasis text-sm leading-[1.125rem] font-medium sm:font-semibold sm:text-md sm:leading-3 md:text-lg md:leading-5 lg:text-2xl lg:leading-8">
          {title}
        </h3>
      </div>
    </Link>
  );
}
