import { Link, NavLink } from "react-router-dom";
function LogIn() {
  return (
    <div>
      <NavLink className=" relative max-w-5xl m-auto pb-0 pt-2 md:pt-3 px-1 md:px-4 flex items-center justify-between flex-nowrap">
        <Link to="/" className="w-24 h-6 ">
          <img src="../public/images/login-logo.svg" alt="" />
        </Link>
        <div className="flex justify-center items-center">
          <div className="text-[16px] py-2 px-3 mr-3 hover:font-semibold rounded-3xl  hover:bg-[#F5F5F5] ">
            Join Now
          </div>
          <div className="text-[#0a66c2] border-solid border border-[#0a66c2] rounded-3xl text-[16px] py-2 px-6 hover:bg-[#F0F7FE] hover:font-semibold">
            Sign in
          </div>
        </div>
      </NavLink>

      <div className="mt-10 p-2 flex flex-wrap justify-between items-center max-w-screen-lg relative min-h-[900px] md:min-h-0 w-[100%] m-auto">
        <div>
        <h1 className="mt-20 md:w-[503px] md:h-[240px] text-[64px] text-[#526A6E] leading-[90px]">Welcome to your professional community</h1>
        <button className="mt-10 flex justify-center items-center gap-2 border-solid border border-[#7c838a] rounded-3xl py-2 px-6 w-96 hover:bg-[#d2e3fc] hover:border-2"><img src="../public/images/google.svg"/>Sign in With Google</button>
        </div>
        <img className="z-10 md:w-[700px] w-fit h-[560px] absolute right-[-150px] md:top-[-2px] top-6" src="https://static.licdn.com/aero-v1/sc/h/d58zfe6h3ycgq5l1ccjpkrtdn" alt="" />
      </div>

      <div className="">
        
      </div>
    </div>
  );
}

export default LogIn;
