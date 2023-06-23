import React, { useState,useEffect } from 'react';
import axios from 'axios';
import "./admin.css";
// import { Spinner } from './Spinner';
import { NewSpinner } from './NewSpinner';


export const Admin = () => {

    const [loadding,setLoadding]=useState(false);
    const [uploadStatus, setUploadStatus] = useState('');
    const [title, setTitle] = useState('');
    const [generalAge, setGeneralAge] = useState('');
    const [femaleAge, setFemaleAge] = useState('');
    const [stScAge, setStScAge] = useState('');
    const [obcAge, setObcAge] = useState('');
    const [pwdUnreservedAge, setPwdUnreservedAge] = useState('');
    const [pwdObcAge, setPwdObcAge] = useState('');
    const [exServiceMenAge, setExServiceMenAge] = useState('');
    const [femaleFee, setFemaleFee] = useState('');
    const [generalFee, setGeneralFee] = useState('');
    const [obcFee, setObcFee] = useState('');
    const [ewsFee, setEwsFee] = useState('');
    const [stScFee, setStScFee] = useState('');
    const [pwdObcFee, setPwdObcFee] = useState('');
    const [correctionFee1Fee, setCorrectionFee1Fee] = useState('');
    const [correctionFee2Fee, setCorrectionFee2Fee] = useState('');
    const [modeOfPaymentFee, setModeOfPaymentFee] = useState('');
    const [startDate, setStartDate] = useState('');
    const [lastDate, setLastDat] = useState('');
    const [shortInfo, setShortInfo] = useState('');
    const [apply,setApply]=useState('');

    

   const handlechangeshortInfo=(event) => {
    setShortInfo(event.target.value)
   }

   const handletitleChange = (event) => {
    setTitle(event.target.value);
   };
 
   const handlechangegeneralAge = (event) => {
    setGeneralAge(event.target.value);
   };
   const handlechangefemaleAge = (event) => {
    setFemaleAge(event.target.value);
  };
  const handlechangestScAge = (event) => {
    setStScAge(event.target.value);
  };
  const handlechangeobcAge = (event) => {
    setObcAge(event.target.value);
  };
  const handlechangepwdUnreservedAge = (event) => {
    setPwdUnreservedAge(event.target.value);
  };
  const handlechangepwdObcAge = (event) => {
    setPwdObcAge(event.target.value);
  };
  const handlechangeexServiceMenAge = (event) => {
    setExServiceMenAge(event.target.value);
  };
  const handlechangefemaleFee = (event) => {
    setFemaleFee(event.target.value);
  };
  
  const handlechangegeneralFee = (event) => {
    setGeneralFee(event.target.value);
  };
  const handlechangeobcFee = (event) => {
    setObcFee(event.target.value);
  };
  const handlechangeewsFee = (event) => {
    setEwsFee(event.target.value);
  };
  const handlechangestScFee = (event) => {
    setStScFee(event.target.value);
  };
  const handlechangepwdObcFee = (event) => {
    setPwdObcFee(event.target.value);
  };
  const handlechangecorrectionFee1Fee = (event) => {
    setCorrectionFee1Fee(event.target.value);
  };
  const handlechangecorrectionFee2Fee = (event) => {
    setCorrectionFee2Fee(event.target.value);
  };
  const handlechangemodeOfPaymentFee = (event) => {
    setModeOfPaymentFee(event.target.value);
  };
  const handlechangestartDate = (event) => {
    setStartDate(event.target.value);
  };
  const handlechangelastDate = (event) => {
    setLastDat(event.target.value);
  };

  const handlechangeapply=(event) => {
    setApply(event.target.value);
  }

  





   const handleSubmit = async (event) => {
    setLoadding(true);
    event.preventDefault();
     const formData = new FormData();
     formData.append('title', title);
     formData.append('generalAge', generalAge);
     formData.append('femaleAge', femaleAge);
     formData.append('stScAge', stScAge);
     formData.append('obcAge', obcAge);
     formData.append('pwdUnreservedAge', pwdUnreservedAge);
     formData.append('pwdObcAge', pwdObcAge);
     formData.append('exServiceMenAge', exServiceMenAge);
     formData.append('femaleFee', femaleFee);
     formData.append('generalFee', generalFee);
     formData.append('obcFee', obcFee);
     formData.append('ewsFee', ewsFee);
     formData.append('stScFee', stScFee);
     formData.append('pwdObcFee', pwdObcFee);
     formData.append('correctionFee1Fee', correctionFee1Fee);
     formData.append('correctionFee2Fee', correctionFee2Fee);
     formData.append('modeOfPaymentFee', modeOfPaymentFee);
     formData.append('startDate', startDate);
     formData.append('lastDate', lastDate);
     formData.append('shortInfo',shortInfo);
     formData.append('apply',apply);


     console.log(typeof(formData));
    console.log(formData)
    

     try {
        await axios.post('https://bibhuprojectbackendserver.vercel.app/api/v1/upload/cloudfileupload', formData);
        console.log(formData);
        console.log('Image uploaded successfully');
        
        setUploadStatus('Image uploaded successfully');

      } catch (error) {
        setLoadding(false)
        console.error('Error uploading image:', error);
        setUploadStatus('Error uploading image');

      }
      setLoadding(false);

    
     
   }



  return (
    <div style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
    <form className='foamcontainer' style={{marginBottom:"30px"}} onSubmit={handleSubmit}>
     
      <div class="form-group">
        <label htmlFor="title">Title: </label>
        <input type="text" style={{width:"300px"}} id="title" name='title' value={title} onChange={handletitleChange} />
      </div>
     
      <div class="form-group">
        <label htmlFor="tags">GeneralAge: </label>
        <input type="number" id="generalAge" name='generalAge,' value={generalAge} onChange={handlechangegeneralAge} />
      </div>

      <div class="form-group">
        <label htmlFor="age">femaleAge: </label>
        <input type="number" id="femaleAge" name='femaleAge' value={femaleAge} onChange={handlechangefemaleAge} />
      </div>

      <div class="form-group">
        <label htmlFor="Coin">StScAge: </label>
        <input type="number" id="stScAge" name='stScAge' value={stScAge} onChange={handlechangestScAge} />
      </div>
     
      <div class="form-group">
        <label htmlFor="obcAge">ObcAge: </label>
        <input type="number" id="obcAge" name='obcAge' value={obcAge} onChange={handlechangeobcAge} />
      </div>

      <div class="form-group">
        <label htmlFor="pwdUnreservedAge">PwdUnreservedAge: </label>
        <input type="number" id="pwdUnreservedAge" name='pwdUnreservedAge' value={pwdUnreservedAge} onChange={handlechangepwdUnreservedAge} />
      </div>

      <div class="form-group">
        <label htmlFor="pwdObcAge">PwdObcAge: </label>
        <input type="text" id="pwdObcAge" name='pwdObcAge' value={pwdObcAge} onChange={handlechangepwdObcAge} />
      </div>
     
      <div class="form-group">
        <label htmlFor="exServiceMenAge">ExServiceMenAge: </label>
        <input type="number" id="exServiceMenAge" name='exServiceMenAge' value={exServiceMenAge} onChange={handlechangeexServiceMenAge} />
      </div>

      <div class="form-group">
        <label htmlFor="femaleFee">FemaleFee: </label>
        <input type="number" id="femaleFee" name='femaleFee' value={femaleFee} onChange={handlechangefemaleFee} />
      </div>

      <div class="form-group">
        <label htmlFor="generalFee">GeneralFee: </label>
        <input type="number" id="generalFee" name='generalFee' value={generalFee} onChange={handlechangegeneralFee} />
      </div>

      <div class="form-group">
        <label htmlFor="obcFee">ObcFee: </label>
        <input type="number" id="obcFee" name='obcFee' value={obcFee} onChange={handlechangeobcFee} />
      </div>

      <div class="form-group">
        <label htmlFor="ewsFee">EwsFee: </label>
        <input type="number" id="ewsFee" name='ewsFee' value={ewsFee} onChange={handlechangeewsFee} />
      </div>

      <div class="form-group">
        <label htmlFor="femaleFee">StScFee: </label>
        <input type="number" id="stScFee" name='stScFee' value={stScFee} onChange={handlechangestScFee} />
      </div>

      <div class="form-group">
        <label htmlFor="pwdObcFee">PwdObcFee: </label>
        <input type="number" id="pwdObcFee" name='pwdObcFee' value={pwdObcFee} onChange={handlechangepwdObcFee} />
      </div>

      <div class="form-group">
        <label htmlFor="correctionFee1Fee">CorrectionFee1Fee: </label>
        <input type="number" id="correctionFee1Fee" name='correctionFee1Fee' value={correctionFee1Fee} onChange={handlechangecorrectionFee1Fee} />
      </div>

      <div class="form-group">
        <label htmlFor="correctionFee2Fee">CorrectionFee2Fee: </label>
        <input type="number" id="correctionFee2Fee" name='correctionFee2Fee' value={correctionFee2Fee} onChange={handlechangecorrectionFee2Fee} />
      </div>

      <div class="form-group">
        <label htmlFor="femaleFee">ModeOfPaymentFee: </label>
        <input type="text" id="modeOfPaymentFee" name='modeOfPaymentFee' value={modeOfPaymentFee} onChange={handlechangemodeOfPaymentFee} />
      </div>

      <div class="form-group">
        <label htmlFor="startDate">StartDate: </label>
        <input type="text" id="startDate" name='startDate' value={startDate} onChange={handlechangestartDate} />
      </div>

      <div class="form-group">
        <label htmlFor="lastDate">LastDate: </label>
        <input type="text" id="lastDate" name='lastDate' value={lastDate} onChange={handlechangelastDate} />
      </div>
      <div class="form-group">
        <label htmlFor="shortInfo">ShortInfo: </label>
        <input type="text" style={{width:"400px" }} id="shortInfo" name='shortInfo' value={shortInfo} onChange={handlechangeshortInfo} />
      </div>
      <div class="form-group">
        <label htmlFor="shortInfo">Apply: </label>
        <input type="text" style={{width:"400px"}} id="apply" name='apply' value={apply} onChange={handlechangeapply} />
      </div>

      


      
      <button type="submit">Upload Content</button>
       {loadding?(<NewSpinner></NewSpinner>):( uploadStatus && <p>{uploadStatus}</p>)}

    </form>
    </div>
  )
}
