import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./Minning.css";
import { useGlobalContext } from "../context/MineContext";
import Example from "../components/Rechart";

const Minning: React.FC = ({ name }: any) => {
    const { data, updateData, isRunning, setRunning } = useGlobalContext();
    const [IntervalId, setIntervalId] = useState<null | any>(null);
    const [pmdiceData, setPmdiceData] = useState<string[]>([]);
    const [profit, setProfit] = useState('');
    const [success, setSuccess]=useState(true);
    const [newParams, setNewParams]=useState({
        chance: 63,
        under_over: 1,
        amount: 0.0002
    })
    let Amount_temp= newParams.amount;
    let count =0;
    
// const random = (min : number, max : number)=>(Math.random()*(max-min)+min);
    const params: { [key: string]: number } = {
        mfpayoutper: newParams.chance,
        mfpayunder_over: newParams.under_over,
        mfInputAmount: newParams.amount
    }

    // Check if the data is updated
    useEffect(() => {
        setPmdiceData(pmdiceData);
        setNewParams(newParams);
        console.log(newParams);
    }, [pmdiceData, newParams])

    const formBody = Object.keys(params).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join('&');

    const startInterval = () => {
        const id = setInterval(async () => {
            if(false){
                setSuccess(true);
                setNewParams({...newParams, chance: 63, amount: 0.0002})
                console.log(newParams);
                count ++;
            }else{
                Amount_temp = Amount_temp*(1.50);
                setSuccess(false);
                setNewParams({...newParams, chance: 34, amount: (Math.ceil(Amount_temp*10000)/10000)})
            }
            let data=pmdiceData[12]?.split(",")
            
            await fetch('/api/playb.php', {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formBody
            }).then((response) => response.text())
                .then((data) => {
                    let CleanData = data.split(",,"); setPmdiceData(CleanData);
                }
                ).catch((error) => console.log(error)
                )
                ; updateData(parseInt(profit))
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
                    <div style={{  padding: "20px" }}>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <IonCard>
                                <div style={{ width: "100%", backgroundColor: "black", padding: "1px" }}>
                                    <Example />
                                </div>
                            </IonCard>
                        </div>
                    </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: 'relative', bottom: '20px' }}>
                            <h2 style={{ fontSize: '15px', fontWeight: 'bold' }}>Live Stats</h2>
                            <div style={{ width: 260, height: 120, backgroundColor: 'black', borderRadius: '5px' }}>
                                <div>
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "10px" }}>
                                        <h2 style={{ color: 'white', fontSize: "small", margin: "10px" }}>
                                            wagger : {profit} $
                                        </h2>
                                        <div>
                                            <h2 style={{ color: 'green', fontSize: "small", margin: "10px" }}>
                                                profit:  0 $
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                
                                    <div>
                                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "10px" }}>
                                            <h2 style={{ color: 'red', fontSize: "small", margin: "10px" }}>
                                                Loss : {profit} 
                                            </h2>
                                            <div>
                                                <h2 style={{ color: 'green', fontSize: "small", margin: "10px" }}>
                                                    Wins:  0 
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                                <div style={{ height: "100%" }}>
                                    <div style={{ marginTop: "20px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <IonButton style={{ width: "120px" }} color={isRunning ? "danger" : "success"} onClick={() => { isRunning ? stopInterval() : startInterval() }}>{isRunning ? "STOP" : "START"}</IonButton>
                                    </div>
                                </div>
                        </div>
                        </IonContent>
                    </IonPage>
                </>
                )
}
export default Minning;