import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import HeaderMenu from './components/HeaderMenu/HeaderMenu'
import Loader from './components/Loader/Loader'
import { obtenerDatos } from './server'
import imagen from '/src/assets/money.svg'

function App() {
  const [ready, setReady] = useState(0)
  const [monto, setMonto] = useState(0)
  const [interes, setInteres] = useState(0)
  const [tasas, setTasas] = useState(0)

  useEffect(() => {
    setTimeout(async () => {
      setTasas(await obtenerDatos())
      setReady(1)
    }, 800)
  }, [ready])

  const calcularPlazoFijo = (e) => {
    e.preventDefault()
    const interesGenerado = monto * (0.75 / 12)
    setInteres(
      `ARS ${interesGenerado} | USD ${(interesGenerado / tasas.usd.v).toFixed(
        2
      )}`
    )
  }

  return (
    <div className={styles.App}>
      <HeaderMenu />
      {ready === 1 ? (
        <div className={styles.main}>
          <div className={styles.title}>
            <p>Calculador de plazo fijo</p> <img src={imagen} alt='' />
          </div>
          <div className={styles.container}>
            <form onSubmit={calcularPlazoFijo}>
              <label htmlFor='monto'>Monto en AR$</label>
              <input
                id='monto'
                type='number'
                onChange={(e) => setMonto(e.target.value)}
              />
              <input
                className={styles.btnCalcular}
                type='submit'
                value='Calcular'
              />
              <label htmlFor='Intereses_generados' id='Intereses_generados'>
                Intereses generados a 30 dias
              </label>
              <input
                type='text'
                id='Intereses_generados'
                disabled={true}
                value={interes}
              />
            </form>
            <span>
              USD calculado en base al dolar blue ${tasas ? tasas.usd.v : 0}
            </span>
          </div>
          <div className={styles.container20}>
            <table>
              <tr>
                <th>Bien</th>
                <th>Valor</th>
              </tr>
              <tr>
                <td>Precio Dolar Blue</td>
                <td>AR${tasas && tasas.usd.v}</td>
              </tr>
              <tr>
                <td>Precio Dolar oficial</td>
                <td>AR${tasas && tasas.usd_oficial.v}</td>
              </tr>
              <tr>
                <td>Tasa a 30 dias</td>
                <td>%{tasas && tasas.tasa30.v}</td>
              </tr>
            </table>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default App
