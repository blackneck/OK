import axios from 'axios'

import { URI, POSTER } from '../constants/regularExpressions'

export default async () => {
  const response = await axios.get(
    'https://3d-galleru.ru/archive/cat/animirovannye-otkrytki-top-day/',
  )
  const posters = response.data.match(POSTER)
  const uris = posters.map((poster) =>
    poster.match(URI)[0].replace('.jpg', '.gif'),
  )
  return uris
}
