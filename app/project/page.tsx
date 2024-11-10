import Image from "next/image";
import Link from "next/link";
function ProjectPage() {
  return (
    <main className=" h-full w-screen flex flex-col  items-center  bg-[#0d0d0d] ">
      <div className=" flex items-center gap-2  w-56 md:w-72 ">
        <h1 className="p-3 text-4xl sm:text-5xl text-slate-50 font-bold font-serif">
          {" "}
          Project{" "}
        </h1>
        <div className=" ml-3 bg-gradient-to-r from-fuchsia-950 to-orange-200  w-7 h-7 rounded-full animate-spin-slow "></div>
      </div>
      <section className=" w-screen h-full flex flex-col md:flex-row md:gap-5 ">
        <div className=" w-full h-auto md:w-1/2 md:ml-9 p-6 md:p-0 ">
          <Image src={"/one1.png"} alt="project1" width={700} height={700} />

          <div className=" ml-8  w-7 h-7 border border-  animate-spin-slow  "></div>
        </div>

        <div className=" w-full md:w-1/3 md:h-[440px] flex items-end ">
          <div className="flex flex-col justify-end items- p-8 gap-3 bg-slate-100/5 rounded-2xl m-5 w-72  md:w-96 md:h-60 ">
            <div className="  bg-gradient-to-r from-fuchsia-950 to-orange-200  w-7 h-7 rounded-full animate-spin-slow "></div>
            <h3 className=" text-lg text-slate-50 font-semibold font-serif ">
              Project1
            </h3>
            <p className=" font-thin text-slate-50 ">
              {" "}
              In this project i create a Sanbox clone with nextjs and custom css{" "}
            </p>
            <div className=" flex  gap-3">
              <Link
                className=" text-slate-50 hover:hover:text-fuchsia-700 hover:underline "
                href={"https://nextassigment2-p9gk.vercel.app/"}
                target=" _blank"
              >
                {" "}
                Click Here Go
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className=" w-screen h-full flex flex-col md:flex-row md:gap-5 ">
        <div className=" w-full h-auto md:w-1/2 md:ml-9 p-6 md:p-0 ">
          <Image src={"/two.png"} alt="project1" width={700} height={700} />
          <div className=" ml-8  w-7 h-7 border border-  animate-spin-slow  "></div>
        </div>
        <div className=" w-full md:w-1/3 md:h-[440px] flex items-end ">
          <div className="flex flex-col justify-end items- p-8 gap-3 bg-slate-100/5 rounded-2xl m-5 w-72  md:w-96 md:h-60 ">
            <div className="  bg-gradient-to-r from-fuchsia-950 to-orange-200  w-7 h-7 rounded-full animate-spin-slow "></div>
            <h3 className=" text-lg text-slate-50 font-semibold font-serif ">
              Project2
            </h3>
            <p className=" font-thin text-slate-50 ">
              {" "}
              In this project i create a personal portfolio with html and css
            </p>
            <div className=" flex  gap-3">
              <Link
                className=" text-slate-50 hover:hover:text-fuchsia-700 hover:underline "
                href={"https://spontaneous-gecko-0fb282.netlify.app/"}
                target="_blank"
              >
                {" "}
                Click Here Go
              </Link>
              <Image src={"/arrow.svg"} alt="icon" width={15} height={15} />
            </div>
          </div>
        </div>
      </section>
      <section className=" w-screen h-full flex flex-col md:flex-row md:gap-5 ">
        <div className=" w-full h-auto md:w-1/2 md:ml-9 p-6 md:p-0 ">
          <Image src={"/three.png"} alt="project1" width={700} height={700} />

          <div className=" ml-8  w-7 h-7 border border-  animate-spin-slow  "></div>
        </div>
        <div className=" w-full md:w-1/3 md:h-[440px] flex items-end ">
          <div className="flex flex-col justify-end items- p-8 gap-3 bg-slate-100/5 rounded-2xl m-5 w-72  md:w-96 md:h-60 ">
            <div className="  bg-gradient-to-r from-fuchsia-950 to-orange-200  w-7 h-7 rounded-full animate-spin-slow "></div>
            <h3 className=" text-lg text-slate-50 font-semibold font-serif ">
              Project3
            </h3>
            <p className=" font-thin text-slate-50 ">
              {" "}
              In this project i create a simple landingpage with nextjs and
              tailwind css
            </p>
            <div className=" flex  gap-3">
              <Link
                className=" text-slate-50 hover:hover:text-fuchsia-700 hover:underline "
                href={"https://github.com/khadija-faisal/assignment_next3"}
                target="_blank"
              >
                {" "}
                Click Here Go for Code
              </Link>
              <Image src={"/arrow.svg"} alt="icon" width={15} height={15} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectPage;
