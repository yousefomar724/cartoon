const Banner = ({ showImg }) => {
  return (
    <section className='flex items-center justify-center px-4'>
      <img
        src={showImg}
        alt='Banner'
        className='w-[90%] lg:w-[700px] -top-16 md:-top-40 relative'
      />
    </section>
  )
}

export default Banner
