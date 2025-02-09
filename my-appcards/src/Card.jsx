import profilePic from './assets/insta pic.jpg'
function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" ></img>
            <h2 className='card-title'>Idris Said</h2>
            <p className='card-text'>I'm a student at SoharUni in the FCIT..</p>
        </div>
    );
}

export default Card