import fiveStars from "../../assets/imagenes/fiveStars.svg";
import fourStars from "../../assets/imagenes/fourStars.svg";
import diegoImage from "../../assets/imagenes/hombre-mediana-edad-chaqueta-riendo-feliz.jpg";
import beatrizImage from "../../assets/imagenes/mi-lema-siempre-ha-sido-ser-audaz-retrato-empresaria-madura-sentada-oficina.jpg";
import manuelImage from "../../assets/imagenes/portrait-young-man-street.jpg";
import martaImage from "../../assets/imagenes/retrato-abuela-sonriente-imagen-ilustracion-hermosa-ia-generativa.jpg";
import styles from "./opinions.module.scss";

export function Opinions() {
  return (
    <section className={styles.opinions}>
      <h2>Las opiniones de nuestros clientes</h2>
      <ul className={styles.cards}>
        <li className={styles.card} id="op_1">
          <img
            className={styles.cardImage}
            src={diegoImage}
            alt="Hombre riendo mirando a cámara"
          />
          <img src={fiveStars} alt="5 Estrellas dadas por el cliente" />
          <p>
            ¡Vaya hallazgo! <br />
            Gracias a esta web, me llamaron y no me cobraron nada. Enseguida me
            pusieron en contacto con instaladores y ya tengo placas en casa
            funcionando.
          </p>
          <p className={styles.clientName}>Diego Torres</p>
        </li>

        <li className={styles.card} id="op_2">
          <img
            className={styles.cardImage}
            src={manuelImage}
            alt="Hombre contento mirando a cámara"
          />
          <img src={fourStars} alt="4 estrellas y media dadas por el cliente" />
          <p>
            Increíblemente útil. No tenía idea de por dónde empezar en mi
            búsqueda de paneles solares, pero esta plataforma me lo facilitó
            todo. Mis nuevas placas funcionan de maravilla y ya estoy ahorrando
            dinero.
          </p>
          <p className={styles.clientName}>Manuel Herrera</p>
        </li>

        <li className={styles.card} id="op_3">
          <img
            className={styles.cardImage}
            src={martaImage}
            alt="Mujer contenta mirando a cámara"
          />
          <img src={fiveStars} alt="5 estrellas dadas por el cliente" />
          <p>
            Nunca había dejado una reseña antes, pero estoy tan impresionada con
            la rapidez y calidad del servicio que sentía que debía hacerlo. Me
            pusieron en contacto con mi instalador super rápido y él también
            vino enseguida.
          </p>
          <p className={styles.clientName}>Marta Díaz</p>
        </li>

        <li className={styles.card} id="op_4">
          <img
            className={styles.cardImage}
            src={beatrizImage}
            alt="Mujer contenta mirando a cámara"
          />
          <img src={fiveStars} alt="5 estrellas dadas por el cliente" />
          <p>
            Me ahorré tiempo y dinero. Me pusieron en contacto inmediatamente
            con profesionales competentes y pude elegir la mejor opción para mi
            casa. Además me ayudaron con las subvenciones.
          </p>
          <p className={styles.clientName}>Beatriz R. Medina</p>
        </li>
      </ul>
      <div></div>
      <ul className={styles.markers}>
        <li>
          <a href="#op_1"></a>
        </li>
        <li>
          <a href="#op_2"></a>
        </li>
        <li>
          <a href="#op_3"></a>
        </li>
        <li>
          <a href="#op_4"></a>
        </li>
      </ul>
      <a href="#top" className={styles.button}>
        ¿Tienes dudas? Te llamamos gratis
      </a>
    </section>
  );
}
