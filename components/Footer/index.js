import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h4>Built with Next.js</h4>
      <div className={styles.mail}>
      <AiOutlineMail />
      <Link href="mailto:sumerf39@gmail.com">
        <h4>Send Mail</h4>
      </Link>
      </div>
    </footer>
  );
};

export default Footer;
