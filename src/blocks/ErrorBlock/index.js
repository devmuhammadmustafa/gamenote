import EmptyPanel from "@/blocks/EmptyPanel";
import Container from "@/components/Container";
import {useTranslation} from "next-i18next";

export default function ErrorBlock(){
    const { t } = useTranslation('common');

    return(
        <div className='error-block pt-[30px]'>
            <Container>
                <EmptyPanel title={t('general.error_page_title')}/>
            </Container>
        </div>
    )
}