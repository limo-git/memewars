
import '../styles/User.css';


function User() {
  return (
    <>
       <div className="User">
    <h6>TOPIC</h6>
    <h1>Cats</h1>

    <div className="upload" >
        <img src={require("../images/uploadicon.jpg")} alt="" />
    </div>
    <h2>Meme tagline</h2>

    <button>Upload</button>
    </div>
    
  </>
  );
}

export default User;