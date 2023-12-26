import callCenter from "../../assets/imagenes/retrato-mujer-trabajadora-servicio-al-cliente.jpg";
import solariaLogo from "../../assets/solaria-logo.svg";
import styles from "./footer.styles.module.scss";
export function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.lastCta}>
        <img src={callCenter} alt="Mujer trabajadora de atención al cliente" />
        <div className={styles.ctaText}>
          <p>¿Te quedan preguntas?</p>
          <a href="#top">Te llamamos gratis</a>
        </div>
      </div>
      <div className={styles.politics}>
        <img src={solariaLogo} alt="Solaria logo" />
        <span>Política de privacidad</span>
        <span>Políticia de cookies</span>
        <span>Contacto</span>
      </div>
      <p>© 2023 Justnet Media Services, S.L. Servicio publicitario.</p>
    </section>
  );
}
