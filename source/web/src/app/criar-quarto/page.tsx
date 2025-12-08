import styles from "./criar-quarto.module.css";
import FormBase from "@/components/criar-quarto/formBase";

export default function CriarQuartoPage() {
  return (
    <article className={`${styles.criarQuartoContainer} container`}>
      <h1 className={styles.title}>Anuncie sua propriedade.</h1>
      <FormBase />
    </article>
  );
}
