import { Link } from 'react-router-dom'

const SeasonCard = ({ season, name_en, name_ar }) => {
  return (
    <Link
      to={`/${name_en}/${season.name_en}`}
      className='flex flex-col gap-3 items-center justify-center text-center text-white'
    >
      <img
        src={season.img}
        alt={season.name_en}
        className='object-cover rounded-xl w-64 h-96 hover:rotate-2 transition-all hover:scale-105'
      />
      <h4 className='text-2xl font-bold'>{name_ar}</h4>
      <p className='text-lg text-gray-300'>{season.name_ar}</p>
    </Link>
  )
}

export default SeasonCard
