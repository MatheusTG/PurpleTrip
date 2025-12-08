"use client";

import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import styles from "./formBase.module.css";
import Image from "next/image";

export default function FormBase() {
  return (
    <div className={styles.formBaseContainer}>
      <div>
        <Image src={"/hotel-image-2.webp"} alt="Image of a hotel room." width={440} height={360} />
      </div>
      <div className={styles.formContent}>
        <div className={styles.breadcrumbs}>
          <Link className={styles.breadcrumbsLink} href={"#"}>
            Informações
          </Link>
          <ChevronRightIcon size={16} color="currentColor" />
          <Link className={styles.breadcrumbsLink} href={"#"}>
            Localização
          </Link>
          <ChevronRightIcon size={16} color="currentColor" />
          <Link className={styles.breadcrumbsLink} href={"#"}>
            Preços e condições
          </Link>
          <ChevronRightIcon size={16} color="currentColor" />
          <Link className={styles.breadcrumbsLink} href={"#"}>
            Comodidades e restrições
          </Link>
        </div>
      </div>
    </div>
  );
}
