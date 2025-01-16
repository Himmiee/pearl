import Image from "next/image";
const Newsletter = () => {
  return (
    <div className="bg-primary-60 py-16 px-4 sm:px-8 my-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">NEWSLETTER</h3>
          <p className="text-sm text-gray-600">Stay Upto Date</p>
        </div>
        <div className="relative flex items-center w-full max-w-[794px]">
          <input
            type="email"
            placeholder="Your Email..."
            className="w-full sm:w-[800px] h-12 py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-transparent"
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary-100 text-white rounded-full w-10 h-10 flex items-center justify-center  focus:outline-none"
          >
            <Image
              src={"/icons/newsletter-logo.svg"}
              height={20}
              width={20}
              alt="newsletter logo"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
