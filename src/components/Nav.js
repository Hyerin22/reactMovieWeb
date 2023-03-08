import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const logoImage = process.env.PUBLIC_URL + "Rinflix-logo.png";

export default function Nav() {
  return (
    <div className={styles.navCont}>
      <div>
        <img className={styles.logo} src={logoImage} alt="logo" />
      </div>
      <NavLinks />
      <div className={styles.iconNav}>
        <NavLink>
          <FontAwesomeIcon icon={faHeart} color="#66FCF1" size="lg" />
        </NavLink>

        <NavLink>
          <FontAwesomeIcon icon={faMagnifyingGlass} color="#66FCF1" size="lg" />
        </NavLink>
      </div>
    </div>
  );
}
