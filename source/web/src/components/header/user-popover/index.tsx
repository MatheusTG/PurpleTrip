"use client";

import { User } from "@/@types/user";
import Popover from "@/components/ui/popover";
import { getUser, logout } from "@/utils/auth";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./user-popover.module.css";

export default function UserPopover() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    (async () => {
      const userData = await getUser();
      setUser(userData);
      setLoading(false);
    })();
  }, []);

  return (
    <Popover
      trigger={
        <div className={styles.usuarioContainer}>
          <Image src="/profile-image.jpg" alt="" width={36} height={36} className={styles.usuario} />
          <span>{loading ? "..." : user ? user.name : "Entrar"}</span>
        </div>
      }
      contentClassName={styles.popoverContent}
    >
      {user ? (
        <>
          {pathname !== "/" && (
            <Link href="/" className={styles.popoverItem}>
              Início
            </Link>
          )}
          <Link href="/anfitriao" className={styles.popoverItem}>
            Anfitrião
          </Link>
          <button className={styles.popoverItem} onClick={logout}>
            Sair
          </button>
        </>
      ) : (
        <>
          <Link href="/login" className={styles.popoverItem}>
            Entrar
          </Link>
          <Link href="/register" className={styles.popoverItem}>
            Registrar
          </Link>
        </>
      )}
    </Popover>
  );
}
