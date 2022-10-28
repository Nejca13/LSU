const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTgyODAxMTgsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJuaWNvbGFzY29udHJlcmFzNjc3QGdtYWlsLmNvbSJ9.rLT1vBtdf5qg_-XPqNn9p1fQDSTWGHjBnrOzf2P6PE9NErTWixp1KU3t8Pc0PRGS3HbO87a6tiN_tSrYeYZuOQ',
  },
}

export const getUSD = async () => {
  let usd
  await fetch('https://api.estadisticasbcra.com/usd', options)
    .then((response) => response.json())
    .then((response) => (usd = response[response.length - 1]))
  return usd
}

export const getUsdOf = async () => {
  let usdOf
  await fetch('https://api.estadisticasbcra.com/usd_of', options)
    .then((response) => response.json())
    .then((response) => (usdOf = response[response.length - 1]))
  return usdOf
}

export const getTasaATreintaDias = async () => {
  let tasa
  await fetch(
    'https://api.estadisticasbcra.com/tasa_depositos_30_dias',
    options
  )
    .then((response) => response.json())
    .then((response) => (tasa = response[response.length - 1]))
  return tasa
}
