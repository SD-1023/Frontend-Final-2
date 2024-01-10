export default function Footer() {
  return (
    <div className=" flex flex-col md:flex-row md:justify-between bg-color-primary w-fill pt-6  md:mr-0 md:px-[3.75rem] pb-7">
      <div className="border-b-2 px-4 pb-7 md:border-0 md:w-3/6 lg:w-5/12 md:flex justify-between border-color-primaryTint ">
        <div className=" w-2/6">
          <h3 className="text-color-bright">Shop by category</h3>
          <ul className="text-color-lightText">
            <li>skincare</li>
            <li>prsonal Care</li>
            <li>Handbags</li>
            <li>Apparels</li>
            <li>Watches</li>
            <li>Eye Wear</li>
            <li>Jewellery</li>
          </ul>
        </div>
        <div className="md:flex md:w-4/6 md:justify-between md:flex-row-reverse">
          <div className=" flex-row md:flex md:flex-col text-color-lightText ">
            <h3 className="text-color-bright">Policy</h3>
            <a>
              Return
              <span className="md:hidden"> | </span>
            </a>
            <a>
              Term of use
              <span className="md:hidden"> | </span>
            </a>
            <a>
              {" "}
              Sitmap
              <span className="md:hidden"> | </span>
            </a>
            <a>
              {" "}
              Security
              <span className="md:hidden"> | </span>
            </a>
            <a>
              {" "}
              Privacy
              <span className="md:hidden"> | </span>
            </a>
            <a> EPR Compliance </a>
          </div>

          <div className=" flex-row md:flex md:flex-col text-color-lightText md:mx-5 lg:ml-7">
            <h3 className="text-color-bright">About</h3>
            <a>
              Contact Us
              <span className="md:hidden"> | </span>
            </a>
            <a>
              About Us
              <span className="md:hidden"> | </span>
            </a>
            <a>
              {" "}
              Careers
              <span className="md:hidden"> | </span>
            </a>
            <a> Press </a>
          </div>
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
