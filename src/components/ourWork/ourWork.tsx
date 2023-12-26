import styles from "./ourWork.module.scss";

export function OurWork() {
  return (
    <section className={styles.ourWork}>
      <h2>¿CÓMO FUNCIONAMOS?</h2>
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
        <p className={styles.specificWidth2}>Nos ponemos en contacto contigo</p>
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
  );
}
