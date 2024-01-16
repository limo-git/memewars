import '../styles/Voting.css';
import Progressbar from '../Components/Progressbar';

function Voting() {
    
    return (
        <>
        <div className='Voting'>
      

    <div className='profileFlex'>
    <img src={require("../images/profile.png")} alt="" />
    <Progressbar red={50} blue={50}/>
    <img src={require("../images/profile.png")} alt="" />
    </div>

    <h6>TOPIC</h6>
    <h1>Cats</h1>
    

    <div className='uploadFlex'>
        <div className='innerFlexLeft'>
        <img src={require("../images/uploadicon.jpg")} alt="" />
        <h2>Meme tagline</h2>
      
    </div>
    <div className="verticalLine"></div>
        <div className='innerFlexRight'>
        <img src={require("../images/uploadicon.jpg")} alt="" />
        <h2>Meme tagline</h2>

       

    </div>

    </div>




        </div>
        </>
    )

}

export default Voting;