import houseImage from "../../assets/imagenes/aerial-view-private-house-with-solar-panels-roof.jpg";
import womenHappy from "../../assets/imagenes/joven-emocionada-sostiene-carta-papel-siente-euforica-al-recibir-ascenso-laboral-o-reembolso-impuestos-banco-mujer-feliz-leyendo-documento-papeleo-sonriendo-buenas-noticias-agradables-obteniendo-beca-estudiantes.jpg";
import signPaper from "../../assets/imagenes/mano-pone-sello-aprobado-documento.jpg";
import ecoStudy from "../../assets/imagenes/proyectos-ambientales-planificacion-femenina.jpg";
import styles from "./faq.module.scss";
export function Faq() {
  return (
    <section className={styles.faq}>
      <div className={styles.question}>
        <img
          src={houseImage}
          alt="Una casa con placas solares en el techo vista desde una posición elevada"
        />
        <div className={styles.textQuestion}>
          <hgroup>
            <h4>
              ¿Las placas solares permiten aumentar el valor de mi vivienda?
            </h4>
            <p>
              Sí. Los compradores cada vez valoran más la eficiencia energética
              y la capacidad de generar su propia energía, lo que hace a una
              casa con placas solares más atractiva en el mercado. Además, los
              sistemas solares suelen venir con garantías de rendimiento a largo
              plazo, lo que puede ser un atractivo adicional para los
              compradores.
            </p>
          </hgroup>
          <div>
            <p className={styles.ctaQuestion}>¿Quieres más información?</p>
            <a href="#top">
              Consúltanos <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.question}>
        <img
          src={ecoStudy}
          alt="Una casa con placas solares en el techo vista desde una posición elevada"
        />
        <div className={styles.textQuestion}>
          <hgroup>
            <h4>¿La instalación me da independencia Energética?</h4>
            <p>
              Con una instalación de placas solares en tu vivienda, no
              dependerás completamente de la red eléctrica y estarás menos
              expuesto a las interrupciones del suministro eléctrico. Esto puede
              ser especialmente valioso en áreas propensas a apagones. Tu
              sistema seguirá generando energía.
            </p>
          </hgroup>
          <div>
            <p className={styles.ctaQuestion}>¿Necesitas más detalles?</p>
            <a href="#top">
              Te llamamos <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.question}>
        <img
          src={signPaper}
          alt="Una casa con placas solares en el techo vista desde una posición elevada"
        />
        <div className={styles.textQuestion}>
          <hgroup>
            <h4>
              ¿Qué permisos son necesarios para instalar placas solares en mi
              casa?
            </h4>
            <p>
              Sólo hay que tener el CIE (Certificado de Instalación Eléctrica)
              de tu instalación registrado en tu comunidad autónoma. Además, si
              quieres ganar dinero volcando el excedente de tu producción a la
              red, necesitarás firmar el Contrato de compensación de excedentes.
              No te preocupes, nuestros proveedores se encargan de todo el
              proceso.
            </p>
          </hgroup>
          <div>
            <p className={styles.ctaQuestion}>
              ¿Quieres saber qué más necesitas?
            </p>
            <a href="#top">
              Te lo contamos <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.question}>
        <img
          src={womenHappy}
          alt="Una casa con placas solares en el techo vista desde una posición elevada"
        />
        <div className={styles.textQuestion}>
          <hgroup>
            <h4>¿Existen subvenciones a las que poder optar?</h4>
            <p>
              Sí. El gobierno ofrece incentivos y subvenciones para promover la
              adopción de sistemas de energía solar. Estos pueden variar según
              la ubicación y pueden incluir créditos fiscales, reembolsos,
              préstamos de bajo interés o programas de energía renovable.
              Reducen significativamente el coste de la instalación de placas
              solares.
            </p>
          </hgroup>
          <div>
            <p className={styles.ctaQuestion}>
              ¿Quieres comprobar si puedes acceder a ellas?
            </p>
            <a href="#top">
              Aclaramos tus dudas <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
