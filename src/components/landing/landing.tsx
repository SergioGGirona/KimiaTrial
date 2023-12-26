import endesaLogo from "../../assets/brands/endesa.svg";
import holaLuzLogo from "../../assets/brands/holaluz.svg";
import iberdrolaLogo from "../../assets/brands/iberdrola.svg";
import naturgyLogo from "../../assets/brands/naturgy-w.svg";
import repsolLogo from "../../assets/brands/repsol-w.svg";
import totalEnergiesLogo from "../../assets/brands/total-energies.svg";
import solariaLogo from "../../assets/solaria-logo.svg";
import { Form } from "../form/form";
import styles from "./landing.module.scss";
export function Landing() {
  return (
    <>
      <div className={styles.landing}>
        <div className={styles.background}></div>
        <img src={solariaLogo} alt="Solaria logo" />
        <Form></Form>
        <div className={styles.secureLogo}>
          <i
            className="fa-solid fa-lock"
            title="Candado de formulario seguro"
          ></i>
          <span>Formulario seguro</span>
        </div>
        <div className={styles.energiesLogo}>
          <img src={holaLuzLogo} alt="Logotipo Holaluz" />
          <img src={naturgyLogo} alt="Logotipo Naturgy" />
          <img src={endesaLogo} alt="Logotipo Endesa" />
          <img src={repsolLogo} alt="Logotipo Repsol" />
          <img src={iberdrolaLogo} alt="Logotipo Iberdrola" />
          <img src={totalEnergiesLogo} alt="Logotipo TotalEnergies" />
        </div>
      </div>
    </>
  );
}
