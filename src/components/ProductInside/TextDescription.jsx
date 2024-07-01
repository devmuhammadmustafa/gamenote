import styles from '@/styles/components/ProductInside.module.css'
import {Parser} from "html-to-react";

export default function TextDescription({ data }){
    const htmlParser = new Parser();

    // const data = [
    //     {
    //         desc: 'Play your favorite titles from anywhere with the 16" Legion 7i Gaming Notebook from Lenovo. This high-performance gaming laptop is powered by a 2.3 GHz 12th Gen Intel Core i9 16-core processor with 32GB of RAM and a 1TB M.2 NVMe SSD to quickly load games and multitask demanding applications. The dedicated NVIDIA GeForce RTX 3080 Ti graphics provide you with high frame rates while supporting real-time ray tracing, artificial intelligence, and more to enhance your gaming experience. The 16" 2560 x 1600 resolution display features a 165 Hz refresh rate which minimizes motion blur when playing fast-paced games. Fully immerse yourself in your favorite games thanks to the Harmon stereo speakers, which feature Nahimic virtual surround sound to fully immerse you in games, movies, and music.\n' +
    //             'If extra storage is needed, there as an additional M.2 NVMe PCIe slot available for an additional solid-state drive. Connect peripherals to the USB 3.2 Gen 1 Type-A and Type-C ports. Additionally, there are two Thunderbolt 4 ports, capable of transferring data at rates up to 40 Gb/s with compatible devices. Connect external monitors through the Thunderbolt 4 and HDMI ports for enhanced multitasking and larger screen viewing. Video conference with the 720p webcam with a built in e-shutter and a dual array microphone. Connect to compatible networks using 802.11ax Wi-Fi 6E or the Gigabit Ethernet port. You can also customize the RGB backlit keyboard with a variety of effects to match your gaming aesthetic and style. The Legion 7i comes with Windows 11 Home (64-Bit) pre-installed.'
    //     },
    {/*    {*/}
    {/*        title: 'WQXGA (2560 x 1660) Display',*/}
    {/*        desc: 'Rise to a new degree of visual superiority beyond FHD gaming with the world\'s first 16" WQXGA (2560 x 1600) gaming display, supporting NVIDIA G-Sync and featuring 34% increased pixel density, Dolby Vision, and VESA DisplayHDR 400 support with 100% sRGB color accuracy and over 500 cd/m² peak brightness. Ensure you\'re leagues ahead of the pack with overdrive that powers up to 165 Hz refresh rates and 3 ms response times.'*/}
    //     },
    //     {
    //         title: 'Stay Frosty with Legion Coldfront 3.0',
    //         desc: 'Building on a generation legacy of max clock speeds for hours of gaming with zero throttling, the 7i\'s Legion Coldfront 3.0 takes first-class thermal performance even further with a new AI-optimized process. It consists of an intelligent intake system, turbo-charged dual-fan design, thermal intake vents underneath keyboard switches for more airflow, and quad-channel exhaust system with improved thermal fins and heat sinks. These components combine with a new intelligent mode which boosts performance for the most demanding eSports titles with no framerate drops or stutters at WQXGA resolution. You can even control the fan speed and voltage with Q Control 4.0 for a full-throttle flow or extended battery life.'
    //     },
    //     {
    //         title: 'Lenovo Legion AI Engine',
    //         desc: 'Featuring an Auto-Optimization mode, the Legion AI Engine intelligently identifies your game launches and optimizes system performances with dynamic CPU and GPU power distribution to deliver you the highest possible FPS whether your game is CPU or GPU intensive. In Auto-Detect mode, you\'ll enjoy maximum frame rates on the most popular AAA PC game titles.'
    //     },
    //     {
    //         title: 'Windows 11',
    {/*        desc: 'Windows 11 has been completely redesigned from its predecessor to emphasize productivity, creativity, and ease of use. The customizable Start Menu is now at the center of the taskbar and utilizes the cloud, allowing you to quickly find and access recent files, regardless of what platform or device was previously used to view them. The streamlined Start Menu design also lets you pin apps and recent files in addition to powering down the system.'*/}
    //     },
    //     {
    //         title: 'Next Level Gaming',
    //         desc: 'Windows 11 is designed to deliver smooth, immersive gaming experiences with DirectX 12 Ultimate providing realistic graphics at high frame rates while Auto HDR automatically adjusts your game\'s lighting and contrast for high dynamic range. DirectStorage technology streamlines data access to better take advantage of high-speed devices such as NVMe solid-state drives and directly from graphics cards without dragging down the CPU, which minimizes load times while helping to reduce artifacts such as texture popping. Topping it all off is Xbox Game Pass integration, which provides you with access to a massive library of games with a membership subscription.'
    //     },
    //     {
    //         title: 'Adapting to You',
    //         desc: 'The Adaptive Input feature automatically optimizes the Windows 11 interface to however you prefer to interact with your device, whether it\'s using a mouse, keyboard, touch, voice, or handwriting.'
    //     }
    // ]
    return(
        <div className={`${styles.textDescription} text-description text-white dark:text-light`}>
            {htmlParser.parse(data?.desc)}
            {/*{*/}
            {/*    data.map((item, i) => (*/}
            {/*        <div key={i} className={styles.textPart}>*/}
            {/*            <h5 className={styles.title}>{item.title}</h5>*/}
            {/*            <p className={styles.desc}>{item.desc}</p>*/}
            {/*        </div>*/}
            {/*    ))*/}
            {/*}*/}
        </div>
    )
}