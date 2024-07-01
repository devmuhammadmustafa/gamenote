import styles from "@/styles/components/Form/Inputs.module.css";
export default function InputCheckbox({ label, type, name, placeholder }) {
  return (
    <div className={styles.inputCheckbox}>
      <input
        className={styles.input}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
      <label
        className={`${styles.label} text-black dark:text-white before:border-black dark:before:border-white`}
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
}
