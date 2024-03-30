import Posts from '../../components/Posts/Posts'
import Heaader from '../../components/heaader/Heaader'
import SideBar from '../../components/sidebar/SideBar'
import './Home.css'

export default function Home() {
  return (

    <>

     <Heaader/>
    <div className='Home'>
      
      <Posts/>
      <SideBar/>
      
     
    </div>

    </>
  )
}
