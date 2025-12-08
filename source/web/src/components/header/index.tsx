"use client";

import { MessageCircleQuestionMark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import UserPopover from "./user-popover";

export default function Header() {
  const pathname = usePathname();
  const isAuthPage = ["/login", "/register"].includes(pathname);

  if (isAuthPage) {
    return null;
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerPrincipal}>
        <div className={styles.coluna}>
          <Link href="/" className={styles.logoContainer}>
            <Image src="/logo.png" alt="Logo" width={173} height={64} />
          </Link>
        </div>

        <div className={styles.coluna2}>
          <Link href="#" type="button" className={styles.ajuda}>
            <MessageCircleQuestionMark size={24} color="#2e2e2e" />
            <span>Ajuda</span>
          </Link>

          <UserPopover />
        </div>
      </div>
    </header>
  );
}
