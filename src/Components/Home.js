import React from "react";
import { Generalinfo } from "./Generalinfo";
import "./NewHomepage.css";
import { Cardsection } from "./Cardsection";
import { Hometable } from "./Hometable";
import { Footer } from "./Footer";

export const Home = () => {
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
        <Hometable></Hometable>
        {/* Table end Here */}

        {/* about the section page */}

        <Generalinfo></Generalinfo>
        <br />
        <Footer></Footer>
        <div className="forspacing"></div>

        {/* about the section page end here */}
      </div>
    </div>
  );
};
