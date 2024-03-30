import Posts from '../../Posts/Posts'
import Heaader from '../../heaader/Heaader'
import SideBar from '../../sidebar/SideBar'
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
