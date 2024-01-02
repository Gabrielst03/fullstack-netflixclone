import AccountMenu from "./AccountMenu";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import { useCallback, useEffect, useState } from "react";

import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs'

const TOP_OFFSET = 66;


const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false)
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true)
            } else {
                setShowBackground(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    const toggleMobileMenu = useCallback(() => {
        setMobileMenu(current => !current)
    }, [])

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current);
    }, []);
    return (
        <nav className="w-full fixed z-40">
            <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500  ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
                <img className="h-4 lg:h-7" src="/logo.png" alt="" />

                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <NavbarItem label="Início" />
                    <NavbarItem label="Séries" />
                    <NavbarItem label="Filmes" />
                    <NavbarItem label="Minha Lista" />
                    <NavbarItem label="Bombando" />
                </div>
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown className="text-white transition " />
                    <MobileMenu visible={mobileMenu} />
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch />
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsBell />
                    </div>
                    <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded overflow-hidden">
                            <img src="/default-blue.png" alt="" />
                        </div>
                        <BsChevronDown className="text-white transition " />
                        <AccountMenu visible={showAccountMenu} />

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;