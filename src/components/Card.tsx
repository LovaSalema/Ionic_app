import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem } from '@ionic/react';
import { checkmarkOutline } from 'ionicons/icons';

const CardPlan = ({ ...props }: CardPlanProps) => {
    return (
        <IonCard style={{maxWidth:'400px'}}>
            <IonCardHeader>
            <IonCardTitle color={props.color} style={{alignSelf:'center'}}>{props.title}</IonCardTitle>
            <div style={{width:'100%', display:'flex', justifyContent:'center' }}>
                <img src={props.ImgUrl} alt="" width={170} height='auto'/>
            </div>
            </IonCardHeader>
           <div style={{display:'flex', flexDirection:'row'}}>
           
            <IonCardContent ><IonIcon aria-hidden="true" size="small" md={checkmarkOutline} color={props.color} style={{position:"relative", top:'3px', right:"2px"}} ></IonIcon><b> INVEST :</b>{props.description} <br/>
            <IonCardSubtitle style={{fontSize: "15px", marginTop: "10px"}}><IonIcon aria-hidden="true" size="small" md={checkmarkOutline} color={props.color} style={{position:"relative", top:'3px', right:"2px"}} ></IonIcon><b> PRICE :</b> {props.price}.</IonCardSubtitle>
            </IonCardContent>
           </div>
            <IonButton fill="clear" color={props.color}>Buy plan</IonButton>
        </IonCard>
    );
}

export default CardPlan;

export type CardPlanProps = {
    title: string,
    description: string,
    price: string,
    ImgUrl: string,
    color: string
}