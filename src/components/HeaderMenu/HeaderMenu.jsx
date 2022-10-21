import React from "react"
import styles from "./styles/HeaderMenu.module.scss"
import { exit } from "@tauri-apps/api/process"
const HeaderMenu = () => {
  const close = async () => {
    await exit(1)
  }
  return (
    <div className={styles.headermenu}>
      <ul>
        <li>
          <button onClick={() => close()}>X</button>
        </li>
      </ul>
    </div>
  )
}

export default HeaderMenu
