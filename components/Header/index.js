import React from "react";
import Link from "next/link";
import styles from './styles.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img className={styles.profile}
          src="https://media.licdn.com/dms/image/D4D03AQFMfnp5H1M-vA/profile-displayphoto-shrink_800_800/0/1667210919849?e=2147483647&v=beta&t=SL-bp4f4k3ElkP3ot_ahz2KSGT-uH9OeKbtvYwBTajw"
          alt="Ferhat"
        />
      </Link>
      <nav >
      <div className={styles.about}>
        <Link href="https://www.linkedin.com/in/ferhatsumer/">
            <h4>Linkedin</h4>
        </Link>
        <Link href="https://github.com/FERHATSUMER">
            <h4>GitHub</h4>
        </Link>
        <Link href="https://www.instagram.com/ferhatsumer_/">
          <h4>Instagram</h4>  
        </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
