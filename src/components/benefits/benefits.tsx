import familyImage from "../../assets/imagenes/smiling-family-standing-front-their-home-with-solar-panels-installed-rooftop.jpg";
import styles from "./benefits.module.scss";
export function Benefits() {
  return (
    <div className={styles.benefits}>
      <img
        src={familyImage}
        alt="Hombre con tres hijas contentos disfrutando de un momento juntos"
      />
      <div className={styles.benefitsText}>
        <h2>BENEFICIOS DE SOLARIA</h2>
        <hgroup>
          <h3>Comparamos objetivamente</h3>
          <p>
            No estamos afiliados a ninguna marca ni instalador en particular.
            Entendemos que cada casa es única y tiene necesidades distintas, por
            eso nuestra misión es ayudarte a encontrar la mejor oferta en
            energía solar adaptada a ti.
          </p>
        </hgroup>

        <hgroup>
          <h3>Comparamos objetivamente</h3>
          <p>
            Nuestra plataforma compara múltiples instaladores en segundos,
            evitando la necesidad de buscar y contactar a cada uno por separado.
            Esto no solo te ahorra tiempo, también dinero encontrando la oferta
            más competitiva.
          </p>
        </hgroup>

        <hgroup>
          <h3>Comparador líder</h3>
          <p>
            Encontrar la solución de energía solar perfecta para tu hogar nunca
            ha sido tan fácil. En SOLARIA, somos líderes en la comparación de
            instaladores de placas solares para particulares.
          </p>
        </hgroup>
        <a href="#top">¿Tienes dudas? Te llamamos gratis</a>
      </div>
    </div>
  );
}
