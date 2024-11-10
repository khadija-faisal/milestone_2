import Link from "next/link";
function HomePage() {
  return (
    <main className=" bg-[#0d0d0d] h-screen w-full flex-col md:flex-row flex  items-center justify-center gap-24 md:gap-10  ">
      <div className=" flex justify-center items-center w-full md:w-1/2 ">
        <div className=" flex  flex-col gap-3 p-4">
          <div className="bg-gradient-to-r from-fuchsia-950 to-orange-200  w-10 h-10 rounded-full animate-spin-slow "></div>
          <h1 className="md:pl-9 text-4xl sm:text-5xl text-slate-50 font-bold font-serif">
            {" "}
            it&rsquo;s Khadija
          </h1>
          <h2 className=" md:pl-9 text-[20px]  text-slate-50 font-semibold ">
            Front-end Developer / Graphic Deigner
          </h2>
          <p className=" md:pl-9 text-slate-50 ">
            learning and working on web 3.0 generative AI developement!
          </p>
          <button className=" md:ml-9 px-10 py-3 text-gray-50 bg-fuchsia-950 rounded-full w-44  ">
            {" "}
            <Link
              href={"https://www.linkedin.com/in/khadijamughal19/"}
              target="_blank"
            >
              LinkedIn
            </Link>
          </button>
        </div>
      </div>
      <div className=" w-1/2 flex justify-center items-center relative">
        <div className=" absolute left-[0.1px] top-1/2 transform -translate-y-1/2 z-10  ">
          <div className=" w-8 h-8   bg-[#0d0d0d] border border-zinc-100 animate-spin-slow "></div>
        </div>
        <div className=" rounded-full flex justify-center items-center border-r-1 border-l-0 border-t border-b md:h-[400px] md:w-[400px]  h-[100px] w-[200px] animate-spin-slow  ">
          <div className="bg-gradient-to-r from-fuchsia-950 to-orange-200 md:h-72 md:w-72 w-16 h-16 rounded-full animate-spin-slow "></div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
