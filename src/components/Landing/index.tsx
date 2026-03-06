"use client";

import styles from "./style.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Counter from '../Counter/index';
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export default function Landing() {
    const landingRef = useRef<HTMLDivElement | null>(null);
    const darkContainerRef = useRef<HTMLDivElement | null>(null);
    const paraRef = useRef<HTMLParagraphElement | null>(null);

    useGSAP(() => {
        if (!darkContainerRef.current || !paraRef.current) return;

        gsap.to(darkContainerRef.current, {
            height: "50dvh",
            ease: "power2.inOut",
            duration: 1.2,
            delay: 0.3,
        });

        const split = new SplitText(paraRef.current, {
            type: "lines",
            mask: "lines",
            linesClass: styles.line,
        });

        gsap.from(split.lines, {
            yPercent: 110,
            duration: 1,
            ease: "power3.out",
            stagger: 0.12,
            delay: 1.2,
        });

    }, { scope: landingRef });

    return (
        <section className={styles.landing} ref={landingRef}>
            <div className={styles.darkContainer} ref={darkContainerRef}>
                <Image src="/images/moss.jpg" alt="MOSS" fill />
            </div>
            <div className={styles.lightContainer}>
                <h1 ref={paraRef}>Monitoring & Optimizing<br /> Sustainable Systems</h1>
            </div>
            <Counter />
        </section>
    );
}
