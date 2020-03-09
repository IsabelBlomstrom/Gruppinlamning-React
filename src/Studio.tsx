import React, { CSSProperties } from 'react'
import Image from "./assets/studio.jpg"

interface Props {

}

interface State {


}
export default class Studio extends React.Component<Props, State> {
    

    render(){
        return(
            <div style={studioDiv}>
                    <img style={studioPic} src={Image}></img>

            <p style={studioText}>Galleri Lunden erbjuder en ljus rymlig studio på Lunden 8.
            Studion är 100 kvm med tre olika rum som alla har högt i tak. 
            Ni kan hyra studion för utställningar, events och workshops. 
            Vi kan erbjuda möbler om så önskas. 
            </p>
            <p style={{textAlign: "center", fontSize: "1rem", marginBottom: "4rem"}}>Pris per rum/vecka: 5000 kr + moms </p>
            </div>

           
        )
    }
}

const studioPic: CSSProperties = {
    width: "60rem",
    height: "30rem",
    objectFit: "cover",
    marginTop: "2rem"
}

const studioDiv: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center", 
   
}

const studioText: CSSProperties = {
    marginTop: "5rem",
    width: "50%",
    fontSize: "1rem",
}