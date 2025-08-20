import {featureLists, goodLists} from "../../constants/index.js";
import {useMediaQuery} from "react-responsive";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const Art = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 })

    useGSAP(() => {
        const start = isMobile ? 'top 20%' : 'top top';

        const maskedTimelne = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start,
                end: 'bottom center',
                scrub: 1.5,
                pin: true
            }
        })

        maskedTimelne
            .to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut' })
            .to('.masked-img', { scale: 1.3, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut' })
            .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut' })
    })

    return (
        <div id={`art`}>
            <div className={`container mx-auto h-full pt-20`}>
                <h2 className={`will-fade`}>THE ART</h2>

                <div className={`content`}>
                    <ul className={`space-y-4 will-fade`}>
                        {goodLists.map((feature, index) => (
                            <li key={index} className={`flex items-center gap-2`}>
                                <img src={`/images/check.png`} alt={`check`}/>
                                <p>{feature}</p>
                            </li>
                        ))}
                    </ul>

                    <div className={`cocktail-img`}>
                        <img className={`abs-center masked-img size-full object-contain`} src={`/images/under-img.jpg`} alt={`cocktail`}/>
                    </div>

                    <ul className={`space-y-4 will-fade`}>
                        {featureLists.map((feature, index) => (
                            <li key={index} className={`flex items-center justify-start gap-2`}>
                                <img src={`/images/check.png`} alt={`check`}/>
                                <p className={`w-60 md:w-fit`}>{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={`masked-container`}>
                    <h2 className={`will-fade`}>Sip-worthy Perfection</h2>
                    <div id={`masked-content`}>
                        <h3>Made with craft, Poured with passion</h3>
                        <p>this isn't just a drink. It's a carefully crafted moment made just for you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Art
