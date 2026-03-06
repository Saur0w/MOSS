"use client";

import styles from "./page.module.css";
import Landing from "@/components/Landing/index";
import Info from "@/components/Info/index";
import SmoothScroll from "@/ui/SmoothScroll/index";

export default function Home() {
  return (
      <SmoothScroll>
          <div className={styles.page}>
              <Landing />
              <Info />
          </div>
      </SmoothScroll>
  );
}
