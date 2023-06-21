import { createContext } from "react";
import { useState } from "react";


export const AppContext=createContext();
export default function AppContextProvider({children}){

    const [result, setResult] = useState([]);
    const [admitcardresult,setadmitcardResult]=useState([]);
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true)
    const [eligiablityData, setEligiablityData] = useState("");


//  hello

    async function fetchdata() {
        setLoading(true);
        try {

          
          const response = await fetch("http://localhost:4000/api/v1/upload/allimages");
          const admitcardresponse=await fetch("http://localhost:4000/api/v1/upload/admitcardresult");
          const data = await response.json();
          const admitcarddata=await admitcardresponse.json();
          console.log(data);
          setResult(data);
          setadmitcardResult(admitcarddata);
          // Do something with the data
        } catch (error) {
          console.error(error);
          // Handle the error
        }
        setLoading(false);
      }
      


    const value ={
        fetchdata,
        result,
        setResult,
        item,
        setItem,
        loading,setLoading,
        eligiablityData,
        setEligiablityData,
        admitcardresult


    }
    
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>


}
