import './Pramétres.css'


export default function Paramétres() {
  return (
    <div className='Param'>

        <div className="parwarper"></div> 

        <div className="paraWrapper">
        <div className="paraTitle">
          <span className="paraTitleUpdate">Update Your Account</span>
          <span className="paraTitleDelete">Delete Account</span>
        </div>
        <form className="paraForm">
          <label>Profile Picture</label>
          <div className="paraPP">
            <img
              src="./images/mypic.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="paraPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="paraPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="ALi" name="name" />
          <label>Email</label>
          <input type="email" placeholder="alihajji315@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="paraSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
         
    </div>
  )
}
