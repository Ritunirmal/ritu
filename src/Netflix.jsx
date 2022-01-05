import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards";

const Netflix = () => {
return(
    <Card 
       imgsrc={Sdata[0].imgsrc}
       sname={Sdata[0].sname}
       title={Sdata[0].title}
       link={Sdata[0].link} 
     />
  );
}
  export default Netflix;