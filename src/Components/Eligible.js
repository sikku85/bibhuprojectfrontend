import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import "./Eligible.css"

export const Eligible = () => {
  const {setEligiablityData,item,eligiablityData}=useContext(AppContext);
  const [result,setResult]=useState("");
  const [age,setAge]=useState("");
  const navgitate=useNavigate();


  const [foamData, setFoamData] = useState({
    caste:"",
    dob: "",
    selectedGender: "",
    ex_employe:""
  });

  function clickHandler(event) {
    const { name, value } = event.target;
    setFoamData({ ...foamData, [name]: value });
    console.log(foamData)
  }

  const handleGenderChange = (event) => {
    setFoamData({
      ...foamData,
      selectedGender: event.target.value,
    });
  };

  function submit(event) {
    event.preventDefault();
    console.log(foamData);
    setEligiablityData(foamData);
    checkeligble();

    setTimeout(() => {
        setFoamData({
            caste: "",
            dob: "",
            selectedGender: "",
            ex_employe: "",
          });
          setResult("")
        
    }, 5000);
  }
  useEffect(()=>{
    const birthDate = new Date(foamData.dob);
    const today = new Date();
    const ageInMilliseconds = today - birthDate;
    const ageInYears = ageInMilliseconds / 31557600000; // 1 year = 31557600000 ms
    setAge(Math.floor(ageInYears));

  },[foamData.dob])


  function checkeligble(){
    const birthDate = new Date(foamData.dob);
    const today = new Date();
    const ageInMilliseconds = today - birthDate;
    const ageInYears = ageInMilliseconds / 31557600000; // 1 year = 31557600000 ms
    setAge(Math.floor(ageInYears));
    if(item.caste===foamData.caste && age>=item.age){
        setResult("You are eligible");
    }else{
        setResult("You are not eligible");
        // console.log(item.age)
        // console.log(age)
    


    }

   
  }
  return (
    <div className="topcontainer">
        <div className="eligible">

        <div >
            <h1>{result}</h1>
            </div>
        <div className="content">
           
            <div>
            <form onSubmit={submit}>
            <div className="box">
                <label htmlFor="caste">Catageory: </label>
                <select
                onChange={clickHandler}
                name="caste"
                value={foamData.caste}
                id="caste"
                >
               <option value=""></option>
                <option value="OBC">OBC</option>
                <option value="ST">ST</option>
                <option value="SC">SC</option>
                <option value="GEN">GEN</option>
                <option value="OTHER">OTHER</option>
                </select>
            </div>
        

            <div className="box">
                <label htmlFor="dob">Date-of-Birth: </label>
                <input required
                type="date"
                name="dob"
                value={foamData.dob}
                onChange={clickHandler}
                max={new Date().toISOString().split("T")[0]}
                />
            </div>
            
            <div className="box">   
                <label>
                    <input required
                    type="radio"
                    name="gender"
                    value="male"
                    checked={foamData.selectedGender === "male"}
                    onChange={handleGenderChange}
                    />
                    Male
                </label>
                <label>
                    <input required
                    type="radio"
                    name="gender"
                    value="female"
                    checked={foamData.selectedGender === "female"}
                    onChange={handleGenderChange}
                    />
                    Female
                </label>
                <label>
                    <input required
                    type="radio"
                    name="gender"
                    value="other"
                    checked={foamData.selectedGender === "other"}
                    onChange={handleGenderChange}
                    />
                    Other
                </label>
            </div>

            <div className="box">
                <label htmlFor="ex_employe">Ex_employe: </label>
                <select required
                onChange={clickHandler}
                name="ex_employe"
                value={foamData.ex_employe}
                id="ex_employe"
                >
                <option value=""></option>
                <option value="Ex-Service in Defence">Ex-Service in Defence</option>
                <option value="Ex-Service in Army">Ex-Service in Army</option>
                <option value="Ex-Service in Navy">Ex-Service in Navy</option>
                <option value="Ex-Service in Other">Ex-Service in Other</option>
                </select>

            </div>
        


            <br />
            <div className="btn">
            <button >submit</button>
            </div>
        </form>


            </div>
            
            
        </div>


        </div>

       
       
       
     
    </div>
  );
};
