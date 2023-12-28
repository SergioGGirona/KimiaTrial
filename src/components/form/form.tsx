import { FormEvent, useState } from "react";
import { useMultiStepForm } from "../hooks/useMultistep";
import styles from "./form.module.scss";
import { Form1 } from "./form.step1/form.step1";
import { Form2 } from "./form.step2/form.step2";

type FormData = {
  placeToInstall: string;
  name: string;
  surname: string;
  email: string;
  phone: number;
  isChecked: boolean;
};

const initialData: FormData = {
  placeToInstall: "",
  name: "",
  surname: "",
  email: "",
  phone: 0,
  isChecked: false,
};
export function Form() {
  const [data, setData] = useState(initialData);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { step, nextStep, currentStepIndex } = useMultiStepForm([
    <Form1 {...data} updateFields={updateFields} />,
    <Form2 {...data} updateFields={updateFields} />,
  ]);

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    console.log(data);
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <hgroup>
        <h1>Encuentra al mejor instalador de paneles solares en tu zona</h1>
        <p>Calcula tu ahorro en menos de 1 minuto</p>
      </hgroup>
      <i className="fa-solid fa-chevron-down"></i>

      {step}

      {currentStepIndex === 0 && (
        <a className={styles.next} onClick={nextStep}>
          Siguiente
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      )}
      {currentStepIndex === 1 && (
        <button className={styles.endForm} type="submit">
          Finalizar
        </button>
      )}
    </form>
  );
}
