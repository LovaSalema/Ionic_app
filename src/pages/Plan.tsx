import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import CardPlan from "../components/Card";
import { useParams } from "react-router";

const CardContent = [
    {
        title: 'Plan 0',
        description: 'This plan is not secured but try to increase your balance. Balance between $5 and $10 can have 0.24$/day, $1.68/week, $6.72/month.',
        price: 4
    },
    {
        title: 'Plan 1',
        description: 'Invest more than 10$ and earn more than 0.45$/day, 3.15$/week, 12.6$/month.',
        price: 8
    },
    {
        title: 'Plan 2',
        description: 'Invest more than 20$ and earn more than 0.9$/day, 6.3$/week, 25.2$/month.',
        price: 10
    },
    {
        title: 'Plan 3',
        description: 'Invest more than 40$ and earn more than 1.8$/day, 12.6$/week, 50.4$/month',
        price: 15
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
                            <CardPlan key={index} title={item.title} description={item.description} price={item.price} />
                        </IonItem>
                    ))}
                </IonContent>
            </IonPage>
        </>
    )
}
export default Plan;