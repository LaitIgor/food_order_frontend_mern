import homepageImg from '../assets/landing.png';
import downloadAppImg from '../assets/appDownload.png';

const Homepage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div 
        className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 "
      >
        <h1 className="text-5xl font-bold tracking-tight text-blue-600">
          Choose your juicy takeaway
        </h1>
        <span className="text-xl">Make one easy click!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={homepageImg} alt="3 mobiles with this app`s screens" />
        <div className='flex flex-col items-center justify-center gap-4 text-center'>
          <span className='font-bold text-3xl tracking-tighter'>
            Pick your food even faster!
          </span>
          <span>
            Download OrderTastyFood APP now and get 50% for your first order!
          </span>
          <img src={downloadAppImg} alt="links to APP donload page" />
        </div>
      </div>
    </div>
  )
}

export default Homepage