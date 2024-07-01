import Modal from "@/components/Modal";
import styles from "@/styles/components/Modal.module.css";
import InputText from "@/components/Form/InputText";
import InputCheckbox from "@/components/Form/InputCheckbox";
import Link from "next/link";
import Button from "@/components/Button";
import {LoginModalVisibility, ModalType} from "@/store/atoms";
import {useAtom} from "jotai";
import {useForm} from "react-hook-form";
import LoginModal from "@/blocks/Modal/LoginModal";
import {AnimatePresence, motion} from "framer-motion";
import RegisterModal from "@/blocks/Modal/RegisterModal";
import ForgetPasswordModal from "@/blocks/Modal/ForgetPasswordModal";

export default function ModalBlock(){
    const [modalType] = useAtom(ModalType)
    let modalContent;

    switch (modalType) {
        case "login":
            modalContent = <LoginModal/>;
            break;
        case "register":
            modalContent = <RegisterModal/>;
            break;
        case "forgetPassword":
            modalContent = <ForgetPasswordModal/>;
            break;
        default:
            modalContent = <></>;
    }

    return(
        <>
            {modalContent}
        </>
    )
}