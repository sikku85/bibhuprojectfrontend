import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./table.css";
import { AppContext } from "../context/AppContext";
import { NavLink } from "react-router-dom";

export const Table = () => {
  const { item } = useContext(AppContext);
  const navigate = useNavigate();

  function backbutton() {
    navigate(-1);
  }
  return (
    <div>
      <div className="maincardcontainers">
        <div className="eletitle element">{item.title}</div>

        <div className="elecard element">
          <div class="card">
            <div class="card-content">
              <h3 class="sticky-header">Dates</h3>
              <div className="DateContainer">
                <div className="elements">
                  <div className="insideelement">StartDate</div>
                  <div className="insideelement">{item.startDate}</div>
                </div>
                <div className="elements">
                  <div className="insideelement">LastetDate</div>
                  <div className="insideelement">{item.lastDate}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-content">
              <h3 class="sticky-header">Age limt</h3>
              <div className="ageContainer">
                <div className="elements">
                  <div className="insideelement">GeneralAge</div>
                  <div className="insideelement">{item.generalAge}</div>
                </div>

                <div className="elements">
                  <div className="insideelement">FemaleAge</div>
                  <div className="insideelement">{item.femaleAge}</div>
                </div>

                <div className="elements">
                  <div className="insideelement">StScAge</div>
                  <div className="insideelement">{item.stScAge}</div>
                </div>

                <div className="elements">
                  <div className="insideelement">ObcAge</div>
                  <div className="insideelement">{item.obcAge}</div>
                </div>

                <div className="elements">
                  <div className="insideelement">PwdUnreservedAge</div>
                  <div className="insideelement">{item.pwdUnreservedAge}</div>
                </div>

                <div className="elements">
                  <div className="insideelement">ExServiceMenAge</div>
                  <div className="insideelement">{item.exServiceMenAge}</div>
                </div>

                <div className="elements">
                  <div className="insideelement">PwdObcAge</div>
                  <div className="insideelement">{item.pwdObcAge}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <h3 class="sticky-header">Fee</h3>
              <div className="feeContainer">
                <div className="elements">
                  <div className="insideelement">GeneralFee</div>
                  <div className="insideelement">₹{item.generalFee}</div>
                </div>

                <div className="elements">
                  <div className="insideelement">FemaleFee</div>
                  <div className="insideelement">₹{item.femaleFee}</div>
                </div>

                <div className="elements">
                  <div className="insideelement">ObcFee</div>
                  <div className="insideelement">₹{item.obcFee}</div>
                </div>

                <div className="elements">
                  <div className="insideelement">EwsFee</div>
                  <div className="insideelement">₹{item.ewsFee}</div>
                </div>

                <div className="elements">
                  <div className="insideelement">StScFee</div>
                  <div className="insideelement">₹{item.stScFee}</div>
                </div>

                <div className="elements">
                  <div className="insideelement">PwdObcFee</div>
                  <div className="insideelement">₹{item.pwdObcFee}</div>
                </div>

                <div className="elements">
                  <div className="insideelement">CorrectionFee1Fee</div>
                  <div className="insideelement">₹{item.correctionFee1Fee}</div>
                </div>

                <div className="elements">
                  <div className="insideelement">CorrectionFee2Fee</div>
                  <div className="insideelement">₹{item.correctionFee2Fee}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <a className="applynow" href={item.apply}>Apply Now</a>
      </div>
      <div className="tablebutton">
        <button>
          <NavLink to="/eligible" className="nav-link">
            Check eligiablity{" "}
          </NavLink>
        </button>
        <button onClick={backbutton}>Back</button>
      </div>

      {/* <div className="container">
        <div className="item item1" style={{fontWeight:"bolder"}}> {item.title}</div>
        <div className="item item6 "> <span className='coloring'>Short Information :</span> <br /> {item.shortInfo} </div>

        <div className="item">StartDate <br /> {item.startDate}</div>
        <div className="item">LastDate <br />{item.lastDate}</div>
        <div className="item">GeneralAge<br />{item.generalAge}</div>  
        <div className="item">FemaleAge <br /> {item.femaleAge}</div>
        <div className="item">StScAge <br />{item.stScAge}</div>
        <div className="item">ObcAge<br />{item.obcAge}</div>
        <div className="item">PwdUnreservedAge <br /> {item.pwdUnreservedAge}</div>
        <div className="item">PwdObcAge <br />{item.pwdObcAge}</div>
        <div className="item">ExServiceMenAge<br />{item.exServiceMenAge}</div>  
        <div className="item">FemaleFee <br /> ₹{item.femaleFee}</div>
        <div className="item">GeneralFee <br />₹{item.generalFee}</div>
        <div className="item">ObcFee<br />₹{item.obcFee}</div>
        <div className="item">EwsFee <br />₹{item.ewsFee}</div>
        <div className="item">StScFee<br />₹{item.stScFee}</div>
        <div className="item">PwdObcFee <br />₹{item.pwdObcFee}</div>
        <div className="item">CorrectionFee1Fee <br />₹{item.correctionFee1Fee}</div>
        <div className="item">CorrectionFee2Fee<br />₹{item.correctionFee2Fee}</div>  
        <div className="item coloring" >ModeOfPaymentFee <br />{item.modeOfPaymentFee}</div>
        <div className="item" ><a className='coloring' href={item.apply} target='_blank'>Apply Now</a></div>

       
    </div>
    
    <div className='tablebutton'>
    <button><NavLink to='/eligible' className="nav-link">Check eligiablity </NavLink></button>
    <button onClick={backbutton}>Back</button>
    </div>
    */}
    </div>
  );
};
