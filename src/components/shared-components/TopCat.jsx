export default function TopCat({ title, img, className }) {
    const IMG_PATH = "/Frontend-Final-2/assets/icons/";
  
    return (
      <div className={`relative ${className} `}>

    <div className="w-[3.625rem] rounded-lg h-[3.625rem] flex justify-center bg-color-accent ">
    <img className=" w-[1.2015rem]  " alt="" src={`${IMG_PATH}${img}`} />
    </div>
        <div className="pt-2">
          <h4 className="text-xs font-medium leading-5 text-color-typeHighEmphasis">
            {title}
          </h4>
        </div>
      </div>
    );
  }
  