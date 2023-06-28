import { IonButton, IonCol, IonContent, IonGrid, IonRow } from "@ionic/react";
import React, { useState } from "react";
import "./Minning.css"
const Minning: React.FC = () => {
    const [toggle, setToggle]=useState<boolean>(true);
    return (
        <>
            <div style={{maxWidth:"100%", height:"100%"}}>
                <div style={{display: "flex", flexDirection:"column", justifyContent:"center"}}>
                    <IonButton style={{width:"120px"}} color={toggle? "success" : "danger"} onClick={()=>setToggle(!toggle)}>{toggle? "START" : "STOP"}</IonButton>
                </div>
            </div>
        </>
    )
}
export default Minning;