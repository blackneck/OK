import { URI, POSTER } from 'app/constants/regularExpressions'

export const getImages = async () => {
  const html = await fetch(
    'https://3d-galleru.ru/archive/cat/animirovannye-otkrytki-top-day/',
  )
  const posters = html._bodyText.match(POSTER)
  const uris = posters.map((poster) =>
    poster.match(URI)[0].replace('.jpg', '.gif'),
  )
  return uris
}
