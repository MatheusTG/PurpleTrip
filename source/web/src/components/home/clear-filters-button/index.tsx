"use client";

import { XIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./clear-filters-button.module.css";

export default function ClearFiltersButton() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const hasFilters = searchParams.toString().length > 0;

  const handleClearFilters = () => {
    router.replace(pathname, { scroll: false });
  };

  if (!hasFilters) {
    return null;
  }

  return (
    <button className={styles.clearButton} onClick={handleClearFilters} type="button">
      <XIcon size={14} color="currentColor" />
      <span>Limpar filtros</span>
    </button>
  );
}
