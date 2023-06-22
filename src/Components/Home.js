import React from "react";
import { Generalinfo } from "./Generalinfo";
import { useState } from "react";
import "./NewHomepage.css";
import { Cardsection } from "./Cardsection";
import { Hometable } from "./Hometable";
import { Footer } from "./Footer";
import { AdmitcardHomeTable } from "./AdmitcardHomeTable";
import PaginationTable from "./Testingitem";

export const Home = () => {
  const [selectedTable, setSelectedTable] = useState('table1');
  const [defaultvalue, setDefaultvalue] = useState(0);
  function clickhandler() {
    setDefaultvalue(1);
    setSelectedTable('table1');
    
  }
  function clickhandler2() {
    setDefaultvalue(1);
    setSelectedTable('table2');
    
  }
  function clickhandler3() {
    setDefaultvalue(1);
    setSelectedTable('table3');
    
  }

  return (
    <div className="Homewrapper">
      {/* container no1 */}
      <div className="Homeinsidewrapper">
        <div className="Homeinside2titlewrapper">
          <div className="title">PARIKSHA RESULT</div>
          <div className="urltitle">pariksharesult.com</div>
        </div>
        <div className="generalcontex">
          <div className="contex1">
            Sarkari Result : SarkariResult.Com Sarkari Naukri Latest Jobs Online
            Form at Sarkari Results 2023
          </div>
          <br />
          <br />
          <div className="contex2">
            Welcome to India's No 1 Education Portal Sarkari Result
          </div>
          <br />
        </div>

        {/* card start here */}
        <Cardsection></Cardsection>
        {/* card section end here */}
        <br />
        <br />

        {/* Table start Here */}
        

       
        <div  className="btnhome">
        <button onClick={clickhandler} className={selectedTable === 'table1' ? 'activ' : ''}>All Posts</button>
        <button onClick={clickhandler2} className={selectedTable === 'table2' ? 'activ' : ''}>AdmitCards</button>
        <button onClick={clickhandler3} className={selectedTable === 'table3' ? 'activ' : ''}>Results</button>

        </div>
        {
          defaultvalue==0 && <Hometable></Hometable>
        }
       
        {selectedTable === 'table1' && defaultvalue==1 && <Hometable />}
        {selectedTable === 'table2' && <AdmitcardHomeTable />}
        {selectedTable === 'table3' && <Hometable />}

        {/* <Hometable></Hometable> */}
        {/* Table end Here */}

        {/* about the section page */}

        <Generalinfo></Generalinfo>
        <br />
        <PaginationTable></PaginationTable>
        <Footer></Footer>
        <div className="forspacing"></div>

        {/* about the section page end here */}
      </div>
    </div>
  );
};
