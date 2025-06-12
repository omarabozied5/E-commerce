const Footer = ({ ref }) => {
  return (
    <div className="bg-gray-900 text-white" id="about" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-1">
            <h1 className="text-lg font-semibold mb-4">Categories</h1>
            <div className="space-y-2">
              <span className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Women
              </span>
              <span className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Men
              </span>
              <span className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Shoes
              </span>
              <span className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Accessoris
              </span>
              <span className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                New Arrival
              </span>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h1 className="text-lg font-semibold mb-4">Links</h1>
            <div className="space-y-2">
              <span className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                FAQ
              </span>
              <span className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Pages
              </span>
              <span className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Stores
              </span>
              <span className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Compare
              </span>
              <span className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Cookies
              </span>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h1 className="text-lg font-semibold mb-4">Categories</h1>
            <div className="space-y-2">
              <span className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Women
              </span>
              <span className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Men
              </span>
              <span className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Shoes
              </span>
              <span className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Accessoris
              </span>
              <span className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                New Arrival
              </span>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h1 className="text-lg font-semibold mb-4">About</h1>
            <span className="text-gray-400 text-sm leading-relaxed block">
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit,sed do
              eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor
              sit amet conse ctetur adipisicing elit,seddo eiusmod tempor
              incididunt ut labore etdolore.
            </span>
          </div>

          <div className="lg:col-span-1">
            <h1 className="text-lg font-semibold mb-4">Contact</h1>
            <span className="text-gray-400 text-sm leading-relaxed block">
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit,sed do
              eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor
              sit amet conse ctetur adipisicing elit,seddo eiusmod tempor
              incididunt ut labore etdolore.
            </span>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <div className="text-2xl font-bold mb-2">Oddies</div>
            <div className="text-gray-400 text-sm">
              © Copyright 2023. All Rights Reserved
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="/img/payment.png"
              alt="payment"
              className="h-8 opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
