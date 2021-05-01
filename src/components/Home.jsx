import { useEffect } from 'react'

export default function Home({ color }) {
  useEffect(() => {
    document.querySelector('.home__container').style.backgroundColor = color
    console.log(color)
  })
  return (
    <div className="home">
      <div className="container home__container"></div>
    </div>
  )
}
