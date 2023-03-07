import { useParams } from 'react-router-dom'
import { programs } from '../data'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import EpisodeCard from '../components/EpisodeCard'

const Seasons = () => {
  const { showName } = useParams()
  const show = programs.find((program) => program.name === showName)
  return (
    <>
      <Hero {...show} />
      <Banner showImg={show.bannerImg} />
      <section className='flex items-center justify-center gap-16 flex-wrap max-w-6xl mx-auto px-4 mb-10 m-0 md:-mt-40'>
        {show.episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </section>
    </>
  )
}

export default Seasons
