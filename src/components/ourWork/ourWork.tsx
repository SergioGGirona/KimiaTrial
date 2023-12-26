import spainImage from "../../assets/imagenes/spain.svg";
import styles from "./ourWork.module.scss";

export function OurWork() {
  return (
    <>
      <section className={styles.ourWork}>
        <h2>¿Cómo funcionamos?</h2>
        <div className={styles.workProcess}>
          <div className={styles.steps}>
            <div className={styles.step}>
              <i className="fa-solid fa-pen-nib" title="Pluma de escritura"></i>
            </div>
            <p className={styles.specificWidth}>Nos das tus datos</p>
          </div>
        </div>

        <div className={styles.workProcess}>
          <div className={styles.steps}>
            <div className={styles.step}>
              <i className="fa-solid fa-phone" title="Teléfono"></i>
            </div>
          </div>
          <p className={styles.specificWidth2}>
            Nos ponemos en contacto contigo
          </p>
        </div>

        <div className={styles.workProcess}>
          <div className={styles.steps}>
            <div className={styles.step}>
              <i className="fa-solid fa-handshake" title="Saludo"></i>
            </div>
            <p>Determinamos juntos la mejor opción solar para ti</p>
          </div>
        </div>

        <div className={styles.workProcess}>
          <div className={styles.steps}>
            <div className={styles.step}>
              <i
                className="fa-solid fa-file-lines"
                title="Candado de formulario seguro"
              ></i>
            </div>
            <p>Gestionamos el papeleo de tus subvenciones</p>
          </div>
        </div>

        <div className={styles.workProcess}>
          <div className={styles.steps}>
            <div className={styles.step}>
              <i
                className="fa-solid fa-solar-panel"
                title="Candado de formulario seguro"
              ></i>
            </div>
            <p>¡Instalamos!</p>
          </div>
        </div>

        <div className={styles.vLine} />
        <a id="back-top" href="#top">
          Descubre cómo
        </a>
      </section>
      <section className={styles.ourWork}>
        <hgroup>
          <h2>Trabajamos con instaladores en todo el país</h2>
          <p>
            Tenemos cobertura en toda España (incluidas Islas Baleares y
            Canarias), contando con equipos de expertos y los instaladores más
            cualificados para asegurar la excelencia en todas las instalaciones.
            Selecciona tu provincia para continuar con el proceso.
          </p>
        </hgroup>
        <img src={spainImage} alt="Esquema del mapa de España" />
        <a href="#top">Empieza ahora</a>
      </section>
    </>
  );
}
