import Navbar from '../components/Nav'
import {useState} from 'react'
import HeadSection from '../components/HeadSection'
import BrandSection from '../components/BrandSection'
import KeyFeatures from '../components/KeyFeatures'
const Home = () => {
    const [open, setOpen] = useState(false);
    return (
        <div >
           <Navbar open={open} setOpen={setOpen}/>
          <div >
          <HeadSection/>
           <BrandSection/>
             <KeyFeatures/>
          </div>
         
        </div>
    )
}

export default Home
