// Next.js imports
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex px-8 justify-end py-5 gap-4 shadow-sm">
      <button className="hover:shadow-md rounded-full transition-all ease-in-out">
        <Image
          src={"/gear.svg"}
          alt="Accounts Settings"
          width={40}
          height={40}
          className="p-2"
        />
      </button>
      <Image src={"/avatar.png"} alt="Profile" width={40} height={40} />
    </header>
  );
}
