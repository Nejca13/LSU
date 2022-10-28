import React from 'react'
import { getTasaATreintaDias, getUSD, getUsdOf } from '../../getData'
import styles from './styles/SetData.module.scss'
import { addDoc, collection } from 'firebase/firestore'
import { dataBase } from '../../../firebase'

export const addData = async (usd, usdof, tasa) => {
  await addDoc(collection(dataBase, 'tasasActualizadas'), {
    usd: usd,
    usd_oficial: usdof,
    tasa30: tasa,
  }).then(console.log('Enviado'))
}

const SetData = () => {
  const setter = async () => {
    const usd = await getUSD()
    console.log(usd)
    const usdof = await getUsdOf()
    console.log(usdof)
    const tasa = await getTasaATreintaDias()
    console.log(tasa)
    addData(usd, usdof, tasa)
  }

  return (
    <div className={styles.setdata}>
      <button onClick={() => setter()}>Set data on firebase</button>
    </div>
  )
}

export default SetData
