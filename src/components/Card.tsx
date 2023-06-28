import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem } from '@ionic/react';

const CardPlan = ({ ...props }: CardPlanProps) => {
    return (
        <IonCard>
            <IonCardHeader>
            <IonCardTitle>{props.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{props.description} <br/>
            <IonCardSubtitle style={{fontSize: "15px", marginTop: "10px"}}> price : {'$' + props.price}</IonCardSubtitle>
            </IonCardContent>
            <IonButton fill="clear">Buy plan</IonButton>
        </IonCard>
    );
}

export default CardPlan;

export type CardPlanProps = {
    title: string,
    description: string,
    price: number
}