import Image from "next/image";
function AboutPage() {
  return (
    <main className="flex justify-center items-center flex-col gap-10 md:gap-0 md:flex-row  md:h-screen w-screen  bg-[#0d0d0d] ">
      <div className=" flex items-center justify-center w-full md:w-1/3">
        <Image
          className=" p-8 md:p-0 border rounded-2xl "
          src={"/pic.jpg"}
          alt="mypic"
          width={300}
          height={300}
        />
      </div>
      <div className="p-5 w-ful md:w-1/2">
        <div className=" ml-3 bg-gradient-to-r from-fuchsia-950 to-orange-200  w-7 h-7 rounded-full animate-spin-slow "></div>
        <h1 className=" p-4 text-4xl sm:text-5xl text-slate-50 font-bold font-serif">
          About Me
        </h1>
        <p className=" pl-4 text-slate-50 text-lg font-thin">
          Asalam-o-Alaikum, I'm Khadija Faisal a junior front-end developer and
          graphic designer. i create engaging, user-friendly websites with
          clean, responsive designs with HTML, CSS, TypeScript, Next.js and a
          Strong Desgin Sense, I blend Functionality and creativity to deliver
          visually apealing digital experience. I'm eagar to learn and Take on
          new challenges in the world of web and AI development and Designs. !
        </p>
        <div className=" ml-3 mt-3 w-7 h-7 border border-  animate-spin-slow  "></div>
      </div>
    </main>
  );
}

export default AboutPage;
