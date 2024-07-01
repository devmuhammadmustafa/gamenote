import styles from "@/styles/components/Contact.module.css";
import Container from "@/components/Container";
import ProductListTopTexts from "@/components/ProductListTopTexts";
import { useForm } from "react-hook-form";
import InputText from "@/components/Form/InputText";
import Textarea from "@/components/Form/Textarea";
import Button from "@/components/Button";
import Link from "next/link";
import IconButton from "@/components/Button/iconButton";
import WhatsappIcon from "@/components/Icons/WhatsappIcon";
import FacebookIcon from "@/components/Icons/FacebookIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import PhoneIcon from "@/components/Icons/PhoneIcon";
import EnvelopeIcon from "@/components/Icons/EnvelopeIcon";
import MapIcon from "@/components/Icons/MapIcon";
import WhatsappBorderIcon from "@/components/Icons/WhatsappBorderIcon";
import {useTranslation} from "next-i18next";
import {useAtom} from "jotai";
import {SiteDataStore} from "@/store/atoms";
import {Parser} from "html-to-react";
import Swal from "sweetalert2";
import {useRouter} from "next/router";
import {useState} from "react";
import {getCookie} from "cookies-next";

export default function ContactBlock({ pageData }) {
  const { t } = useTranslation('common')
  const [siteData] = useAtom(SiteDataStore)
  const htmlParser = new Parser();
  const router = useRouter()
  const locale = router.locale
  const [clear, setClear] = useState(false)
  const token = getCookie("token");

  const values = {
    apiKey: "4b4277bd1523915d0655ecc44992f2db",
    AccessToken: token
  };

  const {
    register,
    handleSubmit,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm();

  const SuccessTimer = async (text) => {
    let timerInterval;
    Swal.fire({
      title: text,
      icon: "success",
      timer: 5000,
      timerProgressBar: true,
      showCloseButton: true,
      confirmButtonColor: "green",
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      // if (result.dismiss === Swal.DismissReason.timer) {
      //     console.log('I was closed by the timer')
      // }
    });
  };

  const onSubmit = async (data) => {
    const formData = {
      form: {
        ...getValues()
      },
    };
    const mergedObject = {...values, ...formData}
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mergedObject),
      };
      const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}${locale}/contact/store.json`,
          requestOptions
      );
      const jsonData = await response.json();
      if(jsonData?.responseStatus?.ResponseCode === 200){
        await SuccessTimer(t('static_pages.contact_success'))
        setClear(true)
      }
    } catch (error) {
      console.error("Error posting data:", error);
      return null;
    }
  };

  const phone = `tel:${siteData?.Phone}`
  const whatsapp = `https://api.whatsapp.com/send?phone=${siteData?.Whatsapp}`
  const email = `mailto:${siteData?.Email}`
  const instagram = siteData?.instagram
  const facebook = siteData?.facebook

  return (
    <div className={styles.contact}>
      <Container>
        <div className={`${styles.contactSelf} dark:!bg-panel-dark`}>
          <div className={styles.top}>
            <div className={styles.left}>
              <ProductListTopTexts title={t('static_pages.contact_title')}>
                {t('static_pages.contact_desc')}
              </ProductListTopTexts>

              <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                {
                  pageData?.result?.filter(item => item.type == 'Textbox')?.map((item, i) => (
                      <div key={i} className={styles.col}>
                        <InputText
                            clearErrors={clearErrors}
                            errors={errors}
                            register={register}
                            required
                            label={item.name}
                            type="text"
                            name={item.id}
                            clear={clear}
                        />
                      </div>
                  ))
                }
                {
                  pageData?.result?.filter(item => item.type == 'Numbers')?.map((item, i) => (
                      <div key={i} className={styles.col}>
                        <InputText
                            clearErrors={clearErrors}
                            errors={errors}
                            register={register}
                            required
                            label={item.name}
                            type="text"
                            name={item.id}
                            clear={clear}
                        />
                      </div>
                  ))
                }

                {
                  pageData?.result?.filter(item => item.type == 'Textarea')?.map((item, i) => (
                      <div key={i} className={`${styles.col} !w-full`}>
                        <Textarea
                            clearErrors={clearErrors}
                            errors={errors}
                            register={register}
                            required
                            label={item.name}
                            name={item.id}
                            clear={clear}
                        />
                      </div>
                  ))
                }

                <div className={styles.col}>
                  <Button text={t('static_pages.send')} full="true" />
                </div>
              </form>
            </div>

            <div className={styles.right}>
              {htmlParser.parse(siteData?.map_iframe)}
            </div>
          </div>

          {
            siteData &&
            <div className={styles.bottom}>
                <div className={styles.left}>
                  <div className={styles.contactItems}>
                    <Link
                        href={phone}
                        className={`${styles.link} after-divider dark:text-light`}
                    >
                      <PhoneIcon />
                      <span className="inline-block pl-[6px] font-medium">
                    {siteData?.Mobile}
                  </span>
                    </Link>
                    <Link
                        href={whatsapp}
                        className={`${styles.link} after-divider dark:text-light`}
                    >
                  <span className={styles.icon}>
                    <WhatsappBorderIcon />
                  </span>
                      <span className="inline-block pl-[6px] font-medium">
                    {siteData?.Whatsapp}
                  </span>
                    </Link>
                    <Link
                        href={email}
                        className={`${styles.link} dark:text-light`}
                    >
                      <EnvelopeIcon />
                      <span className="inline-block pl-[6px] font-medium">
                    {siteData?.Email}
                  </span>
                    </Link>
                  </div>
                </div>
                <div className={styles.right}>
                  <span className={`${styles.text} dark:!text-light`}>{siteData?.follow_us}</span>

                  <Link className={styles.link} target='_blank' href={whatsapp || '#'}>
                    <IconButton icon={<WhatsappIcon dark="true" />} />
                  </Link>
                  <Link className={styles.link} target='_blank' href={instagram || '#'}>
                    <IconButton icon={<InstagramIcon dark="true" />} />
                  </Link>
                  <Link className={styles.link} target='_blank' href={facebook || '#'}>
                    <IconButton icon={<FacebookIcon dark="true" />} />
                  </Link>
                </div>
            </div>
          }
        </div>
      </Container>
    </div>
  );
}
