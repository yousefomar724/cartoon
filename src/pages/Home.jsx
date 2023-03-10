import { programs } from '../data'
import ShowCard from '../components/ShowCard'

const Home = () => {
  return (
    <main className='py-10 md:py-20'>
      <div className='flex gap-12 md:gap-28 items-center justify-center flex-wrap'>
        {programs.map((program) => (
          <ShowCard show={program} key={program.id} />
        ))}
      </div>
    </main>
  )
}

export default Home
