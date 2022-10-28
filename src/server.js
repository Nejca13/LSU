import { collection, getDocs } from 'firebase/firestore'
import { dataBase } from '../firebase'

export const obtenerDatos = async () => {
  const playersCollection = collection(dataBase, 'tasasActualizadas')
  const data = await getDocs(playersCollection)
  const DB1 = data.docs.map((doc) => doc.data())
  return DB1[0]
}
