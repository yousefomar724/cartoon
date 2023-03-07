import { Link } from 'react-router-dom'

const SeasonCard = ({ program }) => {
  return (
    <Link
      to={`/${program.name}`}
      className='flex flex-col gap-3 items-center justify-center text-center text-white'
    >
      <img
        src={program.img}
        alt={program.name}
        className='object-cover rounded-xl w-64 h-96'
      />
      <h4 className='text-2xl font-bold'>{program.name}</h4>
      <p className='text-lg'>{program.season}</p>
    </Link>
  )
}

export default SeasonCard
