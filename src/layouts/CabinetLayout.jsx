import BreadCrumb from "@/components/Breadcrumb";
import CabinetLeftSidePanel from "@/components/Cabinet/CabinetLeftSidePanel";
import CabinetRightSide from "@/components/Cabinet/CabinetRightSide";
import Container from "@/components/Container";
import {useEffect, useState} from "react";
import {useAtom} from "jotai";
import {PersonalInfo, PersonalInfoSuccess} from "@/store/atoms";
import {getUserDetail} from "@/pages/api/cabinet/getUserDetail";
import {useRouter} from "next/router";
import {deleteCookie} from "cookies-next";

export default function CabinetLayout({ children }) {
    const [success, setSuccess] = useState(false)
    const [storeData] = useAtom(PersonalInfo)
    const router = useRouter();
    let locale = router.locale;


    useEffect(() => {
        const handleGetUserDetail = async () => {
            const response = await getUserDetail(locale);

            if(response?.responseStatus?.ResponseCode == 400){
                deleteCookie('AccessToken');
                router.push('/')
                setSuccess(false)
            } else if(response?.responseStatus?.ResponseCode == 200){
                setSuccess(true)
            }
        };
        handleGetUserDetail();
    }, [locale, router]);
    return(
        <>
            {/*<BreadCrumb/>*/}
            {
                success ?

                <section className="cabinet-layout">
                    <Container>
                        <div className="cabinet-layout-container max-[991px]:flex-col">
                            <CabinetLeftSidePanel personalData={storeData}/>
                            <CabinetRightSide>
                                {children}
                            </CabinetRightSide>
                        </div>
                    </Container>
                </section>

                :

                <></>
            }
        </>
    )
}