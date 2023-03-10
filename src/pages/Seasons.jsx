import { useParams } from 'react-router-dom'
import { programs } from '../data'
import SeasonCard from '../components/SeasonCard'

const Seasons = () => {
  const { showName } = useParams()
  const show = programs.find((program) => program.name_en === showName)
  return (
    <section className='flex items-center justify-center gap-16 flex-wrap max-w-6xl mx-auto px-4 my-20'>
      {show?.seasons?.map((season) => (
        <SeasonCard
          key={season.id}
          season={season}
          name_en={show.name_en}
          name_ar={show.name_ar}
        />
      ))}
    </section>
  )
}

export default Seasons
