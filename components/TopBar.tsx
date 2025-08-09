import Logo from "./Logo";
import PrimaryCta from "./PrimaryCta";

export default function TopBar() {
    return <div className="flex w-full justify-center items-center px-4 md:px-36 py-2">
        <div className="justify-between flex w-full bg-gray-300 dark:bg-[#1E293B] px-4 py-2 rounded-xl">
            <Logo />
            <PrimaryCta />
        </div>
    </div>
}