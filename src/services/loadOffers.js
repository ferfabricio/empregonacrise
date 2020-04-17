import axios from 'axios'

export default async function loadOffers() {
  console.log(process.env)
  const { data } = await axios.get(process.env.REACT_APP_OFFER_URL)

  return data
}
