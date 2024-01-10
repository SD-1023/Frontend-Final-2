export default function Footer() {
  return (
    <div className=" flex flex-col md:flex-row md:justify-between bg-color-primary w-fill ">
      <div className="border-b-2 pt-6 px-4 md:mr-0 md:pl-[3.75rem] pb-7 md:flex	border-color-primaryTint ">
        <div className="pb-6 lg:mr-[4.25rem] md:mr-[4.25rem] ">
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
       <div className="md:flex md:flex-row-reverse ">
       <div className=" flex-row md:flex md:flex-col text-color-lightText pb-9">
          <h3 className="text-color-bright">Policy</h3>
          <a>Return 
            <span className="md:hidden"> | </span>
              </a>

          <a>Term of use 
          <span className="md:hidden"> | </span>
          </a>
          <a> Sitmap 
          <span className="md:hidden"> | </span>
          </a>
          <a> Security 
          <span className="md:hidden"> | </span>
          </a>
          <a> Privacy
          <span className="md:hidden"> | </span>
             </a>
          <a> EPR Compliance </a>
        </div>

        <div className="lg:mr-[6.69rem] md:mr-[6.69rem] flex-row md:flex md:flex-col text-color-lightText">
          <h3 className="text-color-bright">About</h3>
          <a>Contact Us
          <span className="md:hidden"> | </span>
              </a>
          <a>About Us 
          <span className="md:hidden"> | </span>
          </a>
          <a> Careers
          <span className="md:hidden"> | </span>
             </a>
          <a> Press </a>
        </div>
       </div>
      </div>
      <div >
      <div className="py-6 pl-4 md:flex md:justify-end pr-16 ">
        <img src="/assets/icons/MediaLogos.svg" alt="" />
      </div>
      <div className="px-4 pb-6  ">
        <div className="flex flex-row pr-12  md:justify-end text-color-bright">
          <img src="/assets/icons/location.svg" alt="" />
          <p className="pl-2">United States</p>
        </div>
        <p className="text-color-lightText pr-12  md:whitespace-pre" >
          &copy; 2021 | Cora Leviene All Rights Reserved
        </p>
      </div>
      </div>
    </div>
  );
}
