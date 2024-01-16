export default function Footer() {
  const categories = [
    "Skincare",
    "Prsonal Care",
    "Handbags",
    "Apparels",
    "Watches",
    "Eye Wear",
    "Jewellery",
  ];
  return (
    <div className=" flex flex-col md:flex-row md:justify-between bg-color-primary w-fill pt-6  md:mr-0 md:px-[3.75rem] pb-7">
      <div className="text-sm md:text-base border-b-2 px-4 pb-7 md:px-0 md:border-0 md:w-3/6 lg:w-5/12 md:flex justify-between border-color-primaryTint ">
        <div>
          <h3 className="text-color-bright text-sm md:text-base mb-[0.44rem] md:mb-[0.75rem]">
            Shop by Category
          </h3>
          <ul className="text-color-lightText flex flex-col">
            {categories?.map((categorie) => (
              <a href={`/${categorie}`}>{categorie}</a>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-4">
        <div className="pt-4 pb-6 md:flex md:justify-end">
          <img src="/assets/icons/MediaLogos.svg" alt="" />
        </div>
        <div>
          <div className="flex flex-row md:justify-end text-color-bright pb-2">
            <img src="/assets/icons/location.svg" alt="" />
            <p className="pl-2">United States</p>
          </div>
          <p className="text-color-lightText  md:whitespace-pre">
            &copy; 2021 | Cora Leviene All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
