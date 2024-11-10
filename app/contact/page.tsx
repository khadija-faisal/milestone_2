function ContactPage() {
  return (
    <main className=" h-screen flex flex-col items-center w-screen bg-[#0d0d0d]">
      <div className=" flex items-center gap-2 mt-20 w-60 md:w-96 ">
        <h1 className="p-3 text-3xl sm:text-5xl text-slate-50 font-bold font-serif">
          {" "}
          Contact me{" "}
        </h1>
        <div className="  bg-gradient-to-r from-fuchsia-950 to-orange-200  w-7 h-7 rounded-full animate-spin-slow "></div>
      </div>
      <section className=" container flex justify-center items-center">
        <form>
          <div className=" flex md:flex-row items-center flex-col p-5 md:px-7 gap-4 ">
            <div className="flex flex-col gap-2">
              <label className="text-sm sm:text-base text-slate-50 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-2 text-slate-50 border-zinc-800 bg-slate-100/5 rounded-md p-2 focus:outline-none focus:border-fuchsia-950"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm sm:text-base text-slate-50 font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-2 text-white border-zinc-800 bg-slate-100/5  rounded-md p-2 focus:outline-none focus:border-fuchsia-950"
              />
            </div>
          </div>
          <div className=" flex flex-col items-center md:items-start md:px-7">
            <div className="flex flex-col gap-4">
              <label className="text-sm sm:text-base text-slate-50 font-medium">
                Message
              </label>
              <textarea
                placeholder="Enter your Message"
                className="border-2 text-white border-zinc-800 bg-slate-100/5 w-52 md:w-[420px] rounded-md p-2 focus:outline-none focus:border-fuchsia-950"
              ></textarea>
              <div className=" flex flex-col items-center md:flex-row gap-4 md:gap-7">
                <button className=" bottom-1 bg-fuchsia-950 text-slate-50 rounded-lg px-16 py-2">
                  Send
                </button>
                <p className="text-slate-50 font-medium">
                  I respond within 3 hours.
                </p>
              </div>
            </div>
          </div>
        </form>
      </section>
      <div className=" flex mt-16 justify-center items-center  w-screen">
        <div className="  w-7 h-7 border animate-spin-slow  "></div>
      </div>
    </main>
  );
}

export default ContactPage;
