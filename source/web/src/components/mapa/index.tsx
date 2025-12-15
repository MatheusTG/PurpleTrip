import styles from "./mapa-estatico.module.css";

export default function MapaEstatico() {
  return (
    <div className={styles.container}>
      <iframe
        className={styles.iframe}
        src="https://www.google.com/maps?q=Campo%20Mourão%20Brasil&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
