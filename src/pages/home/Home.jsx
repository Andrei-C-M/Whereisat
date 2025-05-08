import "./home.css"

function Home() {
  return (
    <section className='home'>
      <img className='home__logo' src='./src/assets/logo.svg' alt='logo' />
      <h1>Where It´s @</h1>
      <p className='home__slogan'>Ticketing made easy</p>
    </section>
  )
}

export default Home