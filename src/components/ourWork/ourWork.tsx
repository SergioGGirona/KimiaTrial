import spainImage from "../../assets/imagenes/spain.svg";
import styles from "./ourWork.module.scss";

export function OurWork() {
  return (
    <>
      <section className={styles.ourWork}>
        <h2>¿Cómo funcionamos?</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <i className="fa-solid fa-pen-nib" title="Pluma de escritura"></i>
            <p className={styles.specificWidth}>Nos das tus datos</p>
          </div>

          <div className={styles.step}>
            <i className="fa-solid fa-phone" title="Teléfono"></i>
            <p className={styles.specificWidth2}>
              Nos ponemos en contacto contigo
            </p>
          </div>

          <div className={styles.step}>
            <i className="fa-solid fa-handshake" title="Saludo"></i>
            <p>Determinamos juntos la mejor opción solar para ti</p>
          </div>

          <div className={styles.step}>
            <i
              className="fa-solid fa-file-lines"
              title="Candado de formulario seguro"
            ></i>
            <p>Gestionamos el papeleo de tus subvenciones</p>
          </div>

          <div className={styles.step}>
            <i
              className="fa-solid fa-solar-panel"
              title="Candado de formulario seguro"
            ></i>
            <p>¡Instalamos!</p>
          </div>
        </div>

        <a id="back-top" href="#top">
          Descubre cómo
        </a>
      </section>
      <section className={styles.coverage}>
        <hgroup>
          <h2>Trabajamos con instaladores en todo el país</h2>
          <p>
            Tenemos cobertura en toda España (incluidas Islas Baleares y
            Canarias), contando con equipos de expertos y los instaladores más
            cualificados para asegurar la excelencia en todas las instalaciones.
            Selecciona tu provincia para continuar con el proceso.
          </p>
          <a href="#top" className={styles.specificLink}>
            Empieza ahora
          </a>
        </hgroup>
        <img src={spainImage} alt="Esquema del mapa de España" />
        <a href="#top">Empieza ahora</a>
      </section>
    </>
  );
}
