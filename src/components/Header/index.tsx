"use client"
import Link from "next/link";
import { useThemeSwitch } from "@/components/Hooks/useThemeSwitch";
import { useLangSwitch } from "@/components/Hooks/useLangSwitch";
import { usePathname } from "next/navigation";
import Image from "next/image";
import CustomButton from "../Button/CustomButton";

const Header = () => {

  const [modeTheme, setModeTheme]: any = useThemeSwitch();
  const [modeLang, setModeLang]: any = useLangSwitch();
  const path = usePathname()

  const currentPath = path;
  const currentLang = currentPath.split("/")[1]; // Get the initial language segment

  return (
    <header className="w-full p-4 px-5 sm:px-10 ">
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-2 bg-transparent'>
        <Link href={`/${currentLang}`} className='flex justify-center items-center'>
          <Image
            src='/assets/image/logo.png'
            alt='logo'
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={35}
            height={35}
            priority
            className='object-contain'
          />
        </Link>
        <div className="flex flex-wrap gap-2 justify-end">
          <CustomButton
            title={modeTheme === "light" ? 'light' : 'dark'}
            btnType='button'
            containerStyles='text-primary-blue dark:text-white rounded-full border border-gray min-w-[80px]'
            handleClick={() => setModeTheme(modeTheme === "light" ? "dark" : "light")}
          />
          <CustomButton
            title={modeLang === "id" ? 'id' : 'en'}
            btnType='button'
            containerStyles='text-primary-blue dark:text-white rounded-full border border-gray min-w-[80px]'
            handleClick={() => setModeLang(modeLang === "id" ? "en" : "id")}
          />
        </div>
      </nav>
    </header>
  )
}

export default Header;
