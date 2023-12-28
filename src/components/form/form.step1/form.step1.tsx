import houseIcon from "../../../assets/imagenes/casa.svg";
import flatIcon from "../../../assets/imagenes/piso.svg";
import styles from "./form.step1.module.scss";

type UserPlace = {
  placeToInstall: string;
};
type UserFormProps = UserPlace & {
  updateFields: (fields: Partial<UserPlace>) => void;
};

export function Form1({ updateFields }: UserFormProps) {
  const handleIconClick = (id: string) => {
    const inputElement = document.getElementById(id);
    if (inputElement) {
      inputElement.click();
    }
  };
  return (
    <div className={styles.stepOne}>
      <h2>¿Dónde quieres instalar tus placas solares?</h2>
      <div>
        <div className={styles.icon}>
          <img
            src={houseIcon}
            alt="Un sencillo icono de una casa con un tejado rojo"
            onClick={() => handleIconClick("house")}
          />
          <input
            type="radio"
            name="placeToInstall"
            id="house"
            value="casa"
            onChange={(e) => updateFields({ placeToInstall: e.target.value })}
          />
          <label htmlFor="house">Casa</label>
        </div>
        <div className={styles.icon}>
          <img
            src={flatIcon}
            alt="Un sencillo icono de un piso moderno"
            onClick={() => handleIconClick("flat")}
          />
          <input
            type="radio"
            name="placeToInstall"
            id="flat"
            value="piso"
            onChange={(e) => updateFields({ placeToInstall: e.target.value })}
          />
          <label htmlFor="flat">Bloque de pisos</label>
        </div>

        <div className={styles.stepBar}>
          <div className={styles.bar}></div>
          <p>1 de 2</p>
        </div>
      </div>
    </div>
  );
}
