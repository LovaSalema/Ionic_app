import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./Minning.css";
import { useGlobalContext } from "../context/MineContext";
import Example from "../components/Rechart";
const Minning: React.FC = ({name}:any) => {
        const {data, updateData, isRunning, setRunning}=useGlobalContext();
        const [IntervalId, setIntervalId] = useState<null|any>(null);
        const random = (min : number, max : number)=>(Math.random()*(max-min)+min);
        const startInterval = () => {
            const id = setInterval(() => {
                updateData(random(0,1))
            }, 2000);
            setIntervalId(id);
            setRunning();
          };
          const stopInterval = () => {
            clearInterval(IntervalId);
            setIntervalId(null);
            setRunning()
          };
    return (
        <>
            <IonPage color="#ececec">
            <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                            <IonTitle>{name}</IonTitle>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
           <IonContent>
           <div style={{backgroundColor:"#ececec"}}>
                <div style={{ width: "100%", display:"flex", justifyContent:"center" }}>
                    <IonCard>
                        <div style={{ width: "100%", height:"auto", backgroundColor:"black" }}>
                            <Example/>
                        </div>
                    </IonCard>
                </div>
                <div style={{display: "flex", flexDirection:"column", alignItems:"center", position:'relative', bottom:'20px'}}>
                    <h2 style={{fontSize:'15px', fontWeight:'bold'}}>Live Stats</h2>
                    <div style={{width:260, height:120, backgroundColor:'black', borderRadius:'5px'}}>
                        <div>
                            <div>
                                <h2>

                                </h2>
                                <div>
                                    <h2>
                                        
                                    </h2>
                                    <i>

                                    </i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ height: "100%" }}>
                    <div style={{ marginTop: "20px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <IonButton style={{ width: "120px" }} color={isRunning ?"danger":"success"} onClick={()=>{isRunning? stopInterval(): startInterval()}}>{isRunning ? "STOP":"START"}</IonButton>
                    </div>
                </div>
            </div>
           </IonContent>
            </IonPage>
        </>
    )
}
export default Minning;