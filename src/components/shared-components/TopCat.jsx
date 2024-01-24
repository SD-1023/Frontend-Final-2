import { Link } from "react-router-dom";

export default function TopCat({ id, title, imgPath }) {
  return (
    <Link className="min-w-[3.9rem]" to={`/category/${id}`}>
      <div className={`text-center flex-shrink-0`}>
        <div className="w-full h-full rounded-lg flex justify-center bg-color-accent py-3">
          <img className="" alt="" src={`${imgPath}`} />
        </div>
        <div className="">
          <h4 className="text-xs font-medium leading-5 text-color-typeHighEmphasis">
            {title}
          </h4>
        </div>
      </div>
    </Link>
  );
}
