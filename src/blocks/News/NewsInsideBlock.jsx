import styles from '@/styles/components/News.module.css'
import Image1 from '@/assets/images/news/news-inside.jpg'
import Image4 from "@/assets/images/news/news-1.jpg";
import Image2 from "@/assets/images/news/news-2.jpg";
import Image3 from "@/assets/images/news/news-3.jpg";
import Container from "@/components/Container";
import Image from "next/image";
import QuoteIcon from "@/components/Icons/QuoteIcon";
import CalendarIcon from "@/components/Icons/CalendarIcon";
import Link from "next/link";
import IconButton from "@/components/Button/iconButton";
import WhatsappIcon from "@/components/Icons/WhatsappIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import FacebookIcon from "@/components/Icons/FacebookIcon";
import Slider from "react-slick";
import {useAtom} from "jotai";
import {BannerSlider} from "@/store/atoms";
import RightArrowIcon from "@/components/Icons/RightArrowIcon";
import LeftArrowIcon from "@/components/Icons/LeftArrowIcon";
import {useEffect} from "react";
import {Parser} from "html-to-react";

export default function NewsInsideBlock({ data }){
    const htmlParser = new Parser()

    function CarouselNextArrow(props) {
        const [bannerInfo,setBannerInfo] = useAtom(BannerSlider)
        const { onClick } = props;

        useEffect(() => {
            setBannerInfo(
                {...bannerInfo, currentSlide: props.currentSlide, slideCount: props.slideCount})
        },[props.currentSlide]);

        return (
            <div className={`${styles.nextButton} ${bannerInfo.slideCount - 2 === bannerInfo.currentSlide ? styles.disable : '' }`}>
                <IconButton icon={<RightArrowIcon/>} onClick={onClick}/>
            </div>
        );
    }

    function CarouselPrevArrow(props) {
        const [bannerInfo] = useAtom(BannerSlider)
        const { onClick } = props;
        return (
            <div className={`${styles.prevButton} ${bannerInfo.currentSlide === 0 ? styles.disable : ''}`}>
                <IconButton icon={<LeftArrowIcon/>} onClick={onClick}/>
            </div>
        );
    }

    // const data = {
    //     image: Image1,
    //     title: 'With synchronous technology, I can easily edit part models while programming in a CAM environment, allowing me to program much faster.',
    //     description: 'Before implementing NX software, the company encountered difficulties with their previous CAD/CAM system. As a result, they were unable to manufacture many complex components, losing significant orders from their customers. Using NX CAM software to program the 4-axis machining center, Cosmos mastered the advanced machining processes. The combination of the latest technology and Vietbay’s expertise enables the company to manufacture highly complex products with high surface quality.' +
    //         '“With synchronous technology, I can easily edit part models while programming in a CAM environment, allowing me to program much faster,” says Nguyen Truong Giang, CAM engineer, Cosmos. “NX CAD/CAM multi-axis includes a postprocessor library and post tool to help customize postprocessors for our CNC machines. Integrated G-code simulation enables us to verify NC programs without risking damage to the machine tools.”' +
    //         'Cosmos is very optimistic about the collaboration with Vietbay. Ngo Van Thang, deputy general director, Cosmos, says, “Thanks to the implementation of NX CAM multiaxis solutions and advanced services from Vietbay, we have been able to rapidly process complex mold components and significantly increased our purchase orders. Customer satisfaction has noticeably improved, which will further enhance Cosmos’ competitiveness and market share. NX CAM enables many pathways to automate NC programming and optimize toolpaths. It is also safer for our machining centers with G-code simulation that validates the programs using machines’ digital twins.”',
    //     quotetext: 'NX CAD/CAM multi-axis includes a postprocessor library and post builder environment to help customize postprocessors for our CNC machines.',
    //     date: '5 Oktyabr 2023',
    //     similiarNews: [
    //         {
    //             id: 10,
    //             image: Image1,
    //             title: 'Lenovo 16" Legion Pro 7 16IRX8H Gaming Laptop (Onyx Gray)...',
    //             description: 'Once you arrive at a number of potential solutions, the selection process is then underpinned by rationality. As a designer, you are encouraged to analyze...',
    //             date: '5 Oktyabr 2023'
    //         },
    //         {
    //             id: 11,
    //             image: Image2,
    //             title: 'Lenovo 16" Legion Pro 7 16IRX8H Gaming Laptop (Onyx Gray)...',
    //             description: 'Once you arrive at a number of potential solutions, the selection process is then underpinned by rationality. As a designer, you are encouraged to analyze...',
    //             date: '5 Oktyabr 2023'
    //         },
    //         {
    //             id: 12,
    //             image: Image3,
    //             title: 'Lenovo 16" Legion Pro 7 16IRX8H Gaming Laptop (Onyx Gray)...',
    //             description: 'Once you arrive at a number of potential solutions, the selection process is then underpinned by rationality. As a designer, you are encouraged to analyze...',
    //             date: '5 Oktyabr 2023'
    //         },
    //         {
    //             id: 13,
    //             image: Image1,
    //             title: 'Lenovo 16" Legion Pro 7 16IRX8H Gaming Laptop (Onyx Gray)...',
    //             description: 'Once you arrive at a number of potential solutions, the selection process is then underpinned by rationality. As a designer, you are encouraged to analyze...',
    //             date: '5 Oktyabr 2023'
    //         },
    //         {
    //             id: 14,
    //             image: Image2,
    //             title: 'Lenovo 16" Legion Pro 7 16IRX8H Gaming Laptop (Onyx Gray)...',
    //             description: 'Once you arrive at a number of potential solutions, the selection process is then underpinned by rationality. As a designer, you are encouraged to analyze...',
    //             date: '5 Oktyabr 2023'
    //         },
    //         {
    //             id: 15,
    //             image: Image3,
    //             title: 'Lenovo 16" Legion Pro 7 16IRX8H Gaming Laptop (Onyx Gray)...',
    //             description: 'Once you arrive at a number of potential solutions, the selection process is then underpinned by rationality. As a designer, you are encouraged to analyze...',
    //             date: '5 Oktyabr 2023'
    //         },{
    //             id: 16,
    //             image: Image1,
    //             title: 'Lenovo 16" Legion Pro 7 16IRX8H Gaming Laptop (Onyx Gray)...',
    //             description: 'Once you arrive at a number of potential solutions, the selection process is then underpinned by rationality. As a designer, you are encouraged to analyze...',
    //             date: '5 Oktyabr 2023'
    //         },
    //         {
    //             id: 17,
    //             image: Image2,
    //             title: 'Lenovo 16" Legion Pro 7 16IRX8H Gaming Laptop (Onyx Gray)...',
    //             description: 'Once you arrive at a number of potential solutions, the selection process is then underpinned by rationality. As a designer, you are encouraged to analyze...',
    //             date: '5 Oktyabr 2023'
    //         },
    //         {
    //             id: 18,
    //             image: Image3,
    //             title: 'Lenovo 16" Legion Pro 7 16IRX8H Gaming Laptop (Onyx Gray)...',
    //             description: 'Once you arrive at a number of potential solutions, the selection process is then underpinned by rationality. As a designer, you are encouraged to analyze...',
    //             date: '5 Oktyabr 2023'
    //         },
    //     ]
    // }

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        infinite: false,
        arrows: true,
        fade: false,
        speed: 500,
        nextArrow: <CarouselNextArrow/>,
        prevArrow: <CarouselPrevArrow />,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return(
        <div className={styles.newsInside}>
            <Container>
                <div className={styles.newsInsideSelf}>
                    <Image src={data?.result?.cover} width={0} height={0} sizes='100vw' alt='test' className={styles.image}/>
                    <h2 className={styles.title}>
                        {data?.result?.title}
                    </h2>
                    <div className={styles.description}>
                        {htmlParser.parse(data?.result?.content)}
                    </div>

                    {/*<div className={styles.quotePart}>*/}
                    {/*    <QuoteIcon style={{ color: '#99E000', fontSize: '20px' }}/>*/}
                    {/*    <div className={styles.text}>*/}
                    {/*        {data?.quotetext}*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className={styles.bottom}>
                        <div className={styles.left}>
                            <Link className={styles.link} href='/'>
                                <IconButton icon={<WhatsappIcon dark='true'/>}/>
                            </Link>
                            <Link className={styles.link} href='/'>
                                <IconButton icon={<InstagramIcon dark='true'/>}/>
                            </Link>
                            <Link className={styles.link} href='/'>
                                <IconButton icon={<FacebookIcon dark='true'/>}/>
                            </Link>
                            <span className={styles.text}>Paylaş</span>
                        </div>
                        <div className={styles.right}>
                            <CalendarIcon/>
                            <span className={styles.text}>
                                {data?.result?.created_at}
                            </span>
                        </div>
                    </div>
                </div>

                {/*<div className={`${styles.similiarNews} similiar-news`}>*/}
                {/*    <div className={styles.title}>Oxşar Xəbərlər</div>*/}
                {/*    <div className={styles.list}>*/}
                {/*        <Slider {...settings}>*/}
                {/*            {*/}
                {/*                data.similiarNews.map(item => (*/}
                {/*                    <div key={item.id} className={styles.item}>*/}
                {/*                        <Image className={styles.image} src={item.image} alt='test'/>*/}

                {/*                        <div className={`${styles.title} line-clamp-2`}>*/}
                {/*                            {item.title}*/}
                {/*                        </div>*/}

                {/*                        <div className={`${styles.description} line-clamp-3`}>*/}
                {/*                            {item.description}*/}
                {/*                        </div>*/}

                {/*                        <div className={styles.bottom}>*/}
                {/*                            <div className={styles.left}>*/}
                {/*                                <CalendarIcon/>*/}
                {/*                                <span className={styles.text}>*/}
                {/*                                {item.date}*/}
                {/*                            </span>*/}
                {/*                            </div>*/}
                {/*                            <div className={styles.right}>*/}
                {/*                                <Link className={styles.link} href='/news/1'>Ətraflı bax</Link>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                ))*/}
                {/*            }*/}
                {/*        </Slider>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </Container>
        </div>
    )
}