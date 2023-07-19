import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import CardPlan from "../components/Card";
import { useParams } from "react-router";

const CardContent = [
    {
        title: 'LITE',
        description: ` $4 and and earn $0.18 per day or $8 and earn at least $0.36 per day!`,
        price: '$4 at first and 2$ per month',
        ImgUrl: '/lite.png',
        color: 'dark'
    },
    {
        title: 'PREMIUM',
        description:  ` $16 and and earn $0.72 per day or $32 and earn at least $1.44 per day!`,
        price: '$6 at first and $4 per month',
        ImgUrl: '/premium.png',
        color: 'primary'
    },
    {
        title: 'VIP',
        description:  ` $64 and and earn $2.16 per day or $128 and earn at least $4.32 per day!`,
        price: '$8 at first and $6 per month',
        ImgUrl: '/gold.png',
        color: 'warning'
    },
]
const Plan: React.FC = () => {
    const { name } = useParams<{ name: string; }>();
    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                            <IonTitle>{name}</IonTitle>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {CardContent.map((item, index) => (
                        <IonItem>
                            <CardPlan key={index} color={item.color} title={item.title} description={item.description} price={item.price} ImgUrl={item.ImgUrl}/>
                        </IonItem> 
                    ))}
                </IonContent>
            </IonPage>
        </>
    )
}
export default Plan;