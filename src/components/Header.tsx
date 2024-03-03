import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'

type Props = {

}

function Header({}: Props) {
  return (
    <div className='border-b-2 border-b-blue-500 py-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link 
          to="/" 
          className='text-3xl font-bold tracking-tight text-blue-500'
        >
          OrderTastyFood
        </Link>
        <div className='md:hidden'>
          <MobileNav />
        </div>
      </div>
    </div>
  )
}


export default Header