import { showAnimation } from "../service/animateForm";
import styles from "./freeStudy.module.scss";
export function FreeStudy() {
  return (
    <section className={styles.freeStudy}>
      <div>
        <div className={styles.studyIcon}>
          <i
            className="fa-solid fa-pen-ruler"
            title="Icono de una regla y un lápiz"
          ></i>
        </div>
        <hgroup>
          <h2>Tu estudio gratuito</h2>
          <p>
            Ahora te asesoramos y hacemos un análisis de tus necesidades gratis
            y sin compromiso
          </p>
        </hgroup>
      </div>

      <a onClick={() => showAnimation()}>Quiero mi estudio gratuito</a>
    </section>
  );
}
