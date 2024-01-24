import { Link } from "react-router-dom";

export default function TopCat({ id, title, imgPath }) {
  return (
    <Link className="min-w-[4.625rem]" to={`/category/${id}`}>
      <div className={`text-center flex-shrink-0`}>
        <div className="w-full h-full rounded-lg flex justify-center bg-color-accent p-5">
          <img className="" alt="" src={`${imgPath}`} />
        </div>
        <div className="pt-2">
          <h4 className="text-xs font-medium leading-5 text-color-typeHighEmphasis">
            {title}
          </h4>
        </div>
      </div>
    </Link>
  );
}
