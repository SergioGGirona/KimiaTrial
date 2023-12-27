import houseIcon from "../../assets/imagenes/casa.svg";
import flatIcon from "../../assets/imagenes/piso.svg";

import styles from "./form.module.scss";
export function Form() {
  const handleIconClick = (id: string) => {
    const inputElement = document.getElementById(id);
    if (inputElement) {
      inputElement.click();
    }
  };
  return (
    <div className={styles.form}>
      <hgroup>
        <h1>Encuentra al mejor instalador de paneles solares en tu zona</h1>
        <p>Calcula tu ahorro en menos de 1 minuto</p>
      </hgroup>
      <i className="fa-solid fa-chevron-down"></i>
      <h2>¿Dónde quieres instalar tus placas solares?</h2>
      <div>
        <div className={styles.icon}>
          <img
            src={houseIcon}
            alt="Un sencillo icono de una casa con un tejado rojo"
            onClick={() => handleIconClick("house")}
          />
          <input type="radio" name="placeToInstall" id="house" />
          <label htmlFor="house">Casa</label>
        </div>
        <div className={styles.icon}>
          <img
            src={flatIcon}
            alt="Un sencillo icono de un piso moderno"
            onClick={() => handleIconClick("flat")}
          />
          <input type="radio" name="placeToInstall" id="flat" />
          <label htmlFor="flat">Bloque de pisos</label>
        </div>

        <div className={styles.stepBar}>
          <div className={styles.bar}></div>
          <p>1 de 2</p>
        </div>
      </div>
      <a className={styles.next}>
        <p>Siguiente</p>
        <i className="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  );
}
