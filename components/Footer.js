function Footer() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14
    bg-gray-100 text-gray-600 border-t-2"
    >
      <div className="space-y-4 text-xs text-gray-900">
        <h5 className="font-bold md:text-lg">ABOUT</h5>
        <p className="text-lg cursor-pointer hover:underline">
          How Airbnb works
        </p>
        <p className="text-lg cursor-pointer hover:underline">Newsroom</p>
        <p className="text-lg cursor-pointer hover:underline">Investors</p>
        <p className="text-lg cursor-pointer hover:underline">Airbnb Plus</p>
        <p className="text-lg cursor-pointer hover:underline">Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-900">
        <h5 className="font-bold md:text-lg">COMMUNITY</h5>
        <p className="text-lg cursor-pointer hover:underline">
          How Airbnb works
        </p>
        <p className="text-lg cursor-pointer hover:underline">
          This is not a real site
        </p>
        <p className="text-lg cursor-pointer hover:underline">Investors</p>
        <p className="text-lg cursor-pointer hover:underline">Airbnb Plus</p>
        <p className="text-lg cursor-pointer hover:underline">Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-900">
        <h5 className="font-bold md:text-lg">HOST</h5>
        <p className="text-lg cursor-pointer hover:underline">
          How Airbnb works
        </p>
        <p className="text-lg cursor-pointer hover:underline">Newsroom</p>
        <p className="text-lg cursor-pointer hover:underline">
          Zero to full stack Hero
        </p>
        <p className="text-lg cursor-pointer hover:underline">
          Hundreds of Students
        </p>
        <p className="text-lg cursor-pointer hover:underline">Join Now</p>
      </div>
      <div className="space-y-4 text-xs text-gray-900">
        <h5 className="font-bold md:text-lg">SUPPORT</h5>
        <p className="text-lg">Help Center</p>
        <p className="text-lg">Trust & Safety</p>
        <p className="text-lg">Say Hi YouTube</p>
        <p className="text-lg">Easter Eggs</p>
        <p className="text-lg">For the Win</p>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
