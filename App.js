import React, { useState } from "react";
import backDesk from "./Assets/Group-2.jpg"
import backMob from "./Assets/bg-main-mobile.jpg"
import logo from "./Assets/card-logo.svg"
import tick from './Assets/icon-complete.svg'
import './app.css'
import { format } from "date-fns";

function App() {
   const [formDisplay, setformDisplay] =  useState(false);
   const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("01/23");
  const [cvc, setCvc] = useState("");

  const handleCard = (e) => {
    const limit = 16;
    setCardNumber(e.target.value.slice(0, limit));
  }

  const handleCvc = (e) => {
    const limit = 3;
    setCvc(e.target.value.slice(0, limit));
  }



  return (
    <>
      <section>
        <div className="pic">
          <picture>
            <source media="(min-width: 1024px)" srcSet={backDesk} />
            <img src={backMob} alt="" />
          </picture>
        </div>

        <div className="bodyStyle">
          <div className="styleCard">
            <article className="front_card">
              <img src={logo} alt="" className="logoo"></img>

              <div className="front_text">
                <h1>
                    {cardNumber}
                </h1>
                <ul className="list">
                    <li>{name}</li>
                    <li>{format(new Date(date), "MM/yy")}</li>
                </ul>

              </div>
            </article>
            <article className="back_card">
              <p className="absolute right-0">
                {cvc}
              </p>
            </article>

          </div>

          <div className="styleForm"> 
            {formDisplay && <div className="formD">
                <form>
                    <div>
                        <label>CARDHOLDER NAME <br/>
                        <input className="majInp" type="text" name="name" placeholder="e.g. Jane Appleseed" required value={name} uppercase onChange={(e) => setName(e.target.value.toUpperCase())}/>
                        </label> <br/>
                    </div>
                    <div>
                        <label>CARD NUMBER <br/>
                        <input className="majInp" type="number" required placeholder="e.g. 1234 5678 9123 0000(spaces required)" value={cardNumber} onChange={handleCard} />
                        </label> <br/>
                    </div>
                    <article className="fix">
                        <label>EXP. DATE(MM/ YY)<br/>
                        <input className="inp" type="date" placeholder="00" required value={date} onChange={(e) => setDate(e.target.value)}/>
                        </label>
                    
                        <label>CVV
                        <input type="number" className="inp" placeholder="123" required maxLength={3} value={cvc} onChange={handleCvc}/>
                        </label>
                    </article>

                    <button onClick={() => setformDisplay(true)}>Confirm</button>
                </form> 
                
            </div>}
            {!formDisplay && <ThankYou setformDisplay={setformDisplay}/>}
          </div>
        </div>
      </section>
    </>
            )
}

function ThankYou({setformDisplay}){
    return(
        <>
        <div className="thanks">
            <img src={tick} alt="" className="ticki"></img>
            <h1>Thank you!</h1>
            <p>We've added your card details</p>
            <button onClick={() => setformDisplay(true)}>Continue</button>
        </div>
        </>
    )
}


export default App;
{/* <img src={backg} alt="gradient"></img> */}