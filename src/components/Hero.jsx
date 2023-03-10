const Hero = ({ heroBg, name_ar, name_en, heroImg, heroDescription }) => {
  return (
    <section
      className='h-[calc(100vh-120px)] bg-no-repeat bg-center bg-cover relative'
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className='absolute w-full h-full inset-0 bg-gradient-to-r from-primary-600 via-primary-400 to-primary-800 flex items-center justify-center'>
        <div className='flex justify-between items-center gap-2 md:gap-20 max-w-7xl mx-auto px-4 flex-col md:flex-row'>
          <div className='flex-1'>
            <img src={heroImg} alt={name_en} className='w-full' />
          </div>
          <div className='flex flex-col gap-4 divide-y-2 flex-1 text-white'>
            <div className='flex flex-col gap-3 text-center'>
              <h2 className='text-3xl md:text-4xl font-bold'>{name_ar}</h2>
              <h2 className='text-4xl md:text-5xl font-bold'>{name_en}</h2>
            </div>
            <p className='text-lg'>{heroDescription}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
