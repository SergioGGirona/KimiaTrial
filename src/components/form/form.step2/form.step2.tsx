import styles from "./form.step2.module.scss";

type UserInfo = {
  name: string;
  surname: string;
  email: string;
  phone: number;
  isChecked: boolean;
};
type UserInfoProps = UserInfo & {
  updateFields: (fields: Partial<UserInfo>) => void;
};

export function Form2({
  name,
  surname,
  email,
  phone,
  isChecked,
  updateFields,
}: UserInfoProps) {
  return (
    <div className={styles.stepTwo}>
      <h2>
        Indícanos cómo podemos contactarte para analizar juntos las opciones
        solares acordes a tus necesidades.
      </h2>
      <div className={styles.formInputs}>
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          className={styles.textForm}
          required
          value={name}
          onChange={(e) => updateFields({ name: e.target.value })}
        />

        <input
          type="text"
          placeholder="Apellido"
          name="surname"
          className={styles.textForm}
          required
          value={surname}
          onChange={(e) => updateFields({ surname: e.target.value })}
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          name="email"
          className={styles.textForm}
          required
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
        />
        <div className={styles.phoneForm}>
          <span>+34</span>
          <input
            type="number"
            placeholder="Número de teléfono"
            name="phone"
            className={styles.numberForm}
            required
            value={phone}
            onChange={(e) =>
              updateFields({ phone: e.target.valueAsNumber || 0 })
            }
          />
        </div>
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            required
            checked={isChecked}
            onChange={(e) => updateFields({ isChecked: e.target.checked })}
          />
          <p>
            He leído y acepto el tratamiento de mis datos por parte de JUSTNET
            MEDIA SERVICES, S.L y sus partners comerciales conforme viene
            descrito en la <em>Política de privacidad</em>
          </p>
        </div>
      </div>

      <div className={styles.stepBar}>
        <div className={styles.bar}></div>
        <p>2 de 2</p>
      </div>
    </div>
  );
}
