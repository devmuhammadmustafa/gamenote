import styles from "@/styles/components/InfoBlock.module.css";
import CupIcon from "@/components/Icons/CupIcon";
import AzerbaijanMapIcon from "@/components/Icons/AzerbaijanMapIcon";
import EasyPaymentIcon from "@/components/Icons/EasyPaymentIcon";
import TrustIcon from "@/components/Icons/TrustIcon";
import { useRouter } from "next/router";
export default function Info() {
  const router = useRouter();
  const locale = router.locale;

  const data = [
    {
      id: 1,
      icon: <CupIcon />,
      title_az: "Texnologiya sahəsində 7 il",
      title_ru: "7 лет в сфере технологий",
      title_en: "7 years in the field of technology",
      description_az:
        "2016-ci ildən bəri oyun cihazları bazarında qüsursuz xidmət",
      description_ru:
        "С 2016 года безупречный сервис на рынке игровых устройств.",
      description_en:
        "Since 2016, impeccable service in the market of gaming devices",
    },
    {
      id: 2,
      icon: <AzerbaijanMapIcon />,
      title_az: "Sürətli çatdırılma",
      title_ru: "Быстрая доставка",
      title_en: "Fast delivery",
      description_az: "⁠Bakı və Bakı ətrafı sürətli və təhlükəsiz çatdırılma",
      description_ru: "Быстрая и безопасная доставка в Баку и окрестности Баку",
      description_en: "Fast and safe delivery to Baku and Baku surroundings",
    },
    {
      id: 3,
      icon: <EasyPaymentIcon />,
      title_az: "Rahat ödəniş",
      title_ru: "Удобная оплата",
      title_en: "Easy payment",
      description_az:
        "Təhvil alma məntəqəsində nağd pul və ya kart ilə satın alma",
      description_ru: "Оплата наличными или картой в пункте доставки",
      description_en: "Purchase by cash or card at the delivery point",
    },
    {
      id: 4,
      icon: <TrustIcon />,
      title_az: "Etibarlı zəmanət",
      title_ru: "Надежная гарантия",
      title_en: "Reliable warranty",
      description_az:
        "2 ilə qədər zəmanət, istifadə müddəti ərzində onlayn məsləhət",
      description_ru:
        "Гарантия до 2 лет, онлайн-консультация в период использования.",
      description_en:
        "Warranty up to 2 years, online consultation during the period of use",
    },
  ];

  return (
    <div
      className={`${styles.self} after:bg-[#D9D9D9] after:dark:bg-[#3B474E] before:bg-[#D9D9D9] before:dark:bg-[#3B474E] max-[550px]:hidden`}
    >
      {data.map((item) => (
        <div
          key={item.id}
          className={`${styles.card} dark:bg-panel-dark bg-white`}
        >
          <div className={`${styles.icon} text-dark-green dark:text-green`}>
            {item.icon}
          </div>
          <div className={`${styles.title} text-dark-green dark:text-green`}>
            {item["title_" + locale]}
          </div>
          <div className={`${styles.description} text-black dark:text-light`}>
            {item["description_" + locale]}
          </div>
        </div>
      ))}
    </div>
  );
}
