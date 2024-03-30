import './Heaader.css'

export default function Heaader() {
  return (
    <div className='Heaader'>
      
      <div className="HeaderTitels">
          <span className="headerTitleSm"> HAJJI ALI </span>
           <span className="headerTitlelg"> 
           <img className ="Img1" src="./images/mypic.jpg" alt=""/> 
          </span>
          <span className='headerTitel'>About ME <br /><p>
          Software Engineer <br />
          Dynamic, curious, ambitious
           and good interpersonal skills.
          </p></span>
          
      </div>
            
        <img  className="headerImg" src="images/background.jpg" alt="" />
      
    </div>
  )
}
