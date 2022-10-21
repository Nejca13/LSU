import styles from "./App.module.scss"
import { open, Command } from "@tauri-apps/api/shell"
import { downloadDir } from "@tauri-apps/api/path"
import HeaderMenu from "./components/HeaderMenu/HeaderMenu"
import { message, ask } from "@tauri-apps/api/dialog"
function App() {
  async function system() {
    const pass = prompt("Contraseña de superusuario")
    const command = new Command("super", [
      pass,
      "|",
      "sudo",
      "-S",
      "pacman",
      "-Syyu",
    ])
    command.spawn()
  }
  async function msg() {
    const pass = prompt("Contraseña de superusuario")
  }
  return (
    <div className={styles.App}>
      <HeaderMenu />
      <ul className={styles.list}>
        <li>
          <button onClick={system}>Update</button>
        </li>
        <li>
          <button onClick={msg}>Message</button>
        </li>
      </ul>
    </div>
  )
}

export default App
