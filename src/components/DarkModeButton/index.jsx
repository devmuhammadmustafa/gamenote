import LightModeIcon from "@/components/Icons/LightModeIcon";
import IconButton from "@/components/Button/iconButton";
import {atomWithStorage} from "jotai/utils";
import {useAtom} from "jotai";
import DarkModeIcon from "@/components/Icons/DarkModeIcon";
import { useEffect } from "react";

const darkModeAtom = atomWithStorage('darkMode')

export default function DarkModeButton({ className }){
    const [darkMode, setDarkMode] = useAtom(darkModeAtom);

    useEffect(() => {
        const root = window.document.documentElement;
        darkMode ? root.classList.add("dark") : root.classList.remove("dark")
    }, [darkMode]);

    const rawSetTheme = () => {
        setDarkMode(!darkMode)
        const root = window.document.documentElement;
        darkMode ? root.classList.add("dark") : root.classList.remove("dark")
    };

    return(
        <div className={'dark-mode-button ' + className}>
            <IconButton onClick={rawSetTheme} icon={darkMode ? <LightModeIcon dark='true'/> : <DarkModeIcon dark='true'/>}/>
        </div>
    )
}