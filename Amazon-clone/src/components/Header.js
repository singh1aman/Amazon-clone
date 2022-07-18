import "./Header.css";
export default function Header({setInputState}) {
  function manageInput(e){
    let {value} = e.target;
    setInputState(value)
    console.log(value)

      
  }
  return (
    
    <>
      <div className="container">
        <div className="main-div">
        <img src="./Images/logo.png" alt=""></img>

        <div className="address-div">
             <div className="a">Hello</div>
             <div id="b">Select ur address</div>
        </div>
        
         <input className="input" placeholder="Search your Product" onChange={manageInput}></input>
        <div className="cart-div">Add (5) <br></br>To Cart  </div>
        <div className="login-div">Login</div>

        </div>
      </div>
    </>
  );
}
