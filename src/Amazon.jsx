import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards";

const Amazon = () => {
return(
    <Card 
       imgsrc={Sdata[1].imgsrc}
       sname={Sdata[1].sname}
       title={Sdata[1].title}
       link={Sdata[1].link} 
     />
  );
}

export default Amazon;