import { Link } from 'react-router-dom'

const ShowCard = ({ show }) => {
  return (
    <Link
      to={`/${show.name_en}`}
      className='flex flex-col gap-3 items-center justify-center text-center text-white'
    >
      <img
        src={show.img}
        alt={show.name_ar}
        className='object-cover rounded-xl w-64 h-96 hover:rotate-2 transition-all hover:scale-105'
      />
      <h4 className='text-2xl font-bold'>{show.name_ar}</h4>
    </Link>
  )
}

export default ShowCard
