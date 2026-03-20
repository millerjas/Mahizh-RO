import Marquee from "react-fast-marquee";
import styles from "./marquee.module.css";

export default function Bar() {
  return (
    <div className={styles.marquee}>
      <Marquee>
        <p>I can be a React component, multiple React components, or just some text.</p>
        <span></span>
        <span></span>
        <p>I can be a React component, multiple React components, or just some text.</p>
      </Marquee>
    </div>
  );
}