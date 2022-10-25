import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import HeaderMenu from './components/HeaderMenu/HeaderMenu'

function App() {
  const [monto, setMonto] = useState(0)
  const [plazo, setPlazo] = useState(0)
  const [interes, setInteres] = useState(0)

  useEffect(() => {
    setInteres()
  }, [interes])

  const calcularPlazoFijo = (e) => {
    e.preventDefault()
    const interesGenerado = monto * 0.0625
    setInteres(interesGenerado)
  }
  return (
    <div className={styles.App}>
      <HeaderMenu />
      <div className={styles.container}>
        <div className={styles.title}>Calculador de plazo fijo</div>
        <form onSubmit={calcularPlazoFijo}>
          <label htmlFor='monto'>Monto</label>
          <input
            id='monto'
            type='number'
            onChange={(e) => setMonto(e.target.value)}
          />
          {/* <input type='number' onChange={(e) => setPlazo(e.target.value)} /> */}
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
      </div>
    </div>
  )
}

export default App
