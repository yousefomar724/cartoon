const EpisodeCard = ({ episode }) => {
  return (
    <div className='flex items-center flex-col justify-center gap-3 text-center text-white'>
      <img
        src={episode.img}
        alt={episode.title}
        className='w-[500px] h-72 object-cover rounded-3xl hover:translate-y-2 transition cursor-pointer'
      />
      <h2 className='text-3xl font-bold'>الحلقة {episode.id}</h2>
      <p className='text-xl text-gray-300'>{episode.title}</p>
    </div>
  )
}

export default EpisodeCard
