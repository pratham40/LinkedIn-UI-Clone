import { Link, NavLink } from "react-router-dom";
function LogIn() {
  return (
    <div>
      <NavLink className=" relative max-w-6xl m-auto pb-0 pt-0 md:pt-3 px-1 md:px-4 flex items-center justify-between flex-nowrap">
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

      <div>

      </div>
    </div>
  );
}

export default LogIn;
