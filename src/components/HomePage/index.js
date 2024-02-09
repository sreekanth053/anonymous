import './index.css'

const HomePage=()=>{

    return(
        <>
        <div className='homepage'>
          <div className='users'>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/001/504/957/small/rocket-icon-free-vector.jpg" alt="homepage-logo" className='logo-homepage'/>
            <p className='for-users'>For Indian Users Only</p>
          </div>
          <h1 className='homepage-heading'>
            Start posting anonymously where no one will judge.
          </h1>
          <h5 className='homepage-sub-heading'>Welcome to Stranger discussion forum</h5>
          <div className='buttons'>
            <button className='custom-button'>Create Your Account</button>
          </div>
          <p className='login-page'>Already have account? <span className='login'><a href="" className='login-name' style={{textDecoration:"underline",textDecorationColor:"#ffffff",color:"#ffffff"}}>Login</a></span></p>
        </div>
        </>
    )
}
export default HomePage