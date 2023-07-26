import React from "react";
import Department from "./student";
import Factory from "./Department";
import Student from "./Factory";

const Home = ({children}) =>{
  return(
    <Department>
      <Factory>
        <Student>
         {children}
        </Student>
      </Factory>
    </Department>
  )
}

export default Home;