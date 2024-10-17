import { useRouter } from "next/router";
import Logo from "../../public/icons/Logo";

const Navbar = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/create-record");
  };
  return (
    <div className="bg-white w-full py-4 flex justify-between">
      <div className="flex gap-6 items-center">
        <Logo />
        <p> Dashboard </p>
        <p> Records</p>
      </div>
      <div className="flex items-center gap-6">
        <button
          onClick={handleClick}
          className="bg-[#0166FF] py-1.5 px-3 text-white rounded-3xl text-base"
        >
          + Record
        </button>
        <div className="rounded-full w-10 h-10 bg-[url('/images/Profile.jpeg')]"></div>
      </div>
    </div>
  );
};

export default Navbar;
