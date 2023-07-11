import React, { ChangeEvent, useEffect, useState } from 'react';
import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonPage, IonToggle } from '@ionic/react';

interface FormData{
    username: string,
    password: string
}

const Login: React.FC = () => {
    const [formData, setFormData]=useState<FormData>(
        {
            username:'',
            password:''
        }
    )
    const [reveal, setReveal]=useState(false);
    useEffect(()=>{
        setFormData(formData);
        console.log('====================================');
        console.log(formData);
        console.log('====================================');
    }, [formData])
    const handleOnchange=(e:any)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
    };

    return (
        <>
            <IonPage>
            <IonContent color='dark'>
                <div style={{ height: "screen", display: "flex", flexDirection: "column", alignItems: 'center', padding: '25px' }}>
                    <div style={{ margin: '15px' }}>
                        <img src="/banner.png" alt="" width={120} height='auto' />
                    </div>
                    <div style={{ display: 'flex', flexDirection: "column", backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
                        <div style={{ marginTop: '50px', textAlign: 'center' }}>
                            <h2 style={{ fontWeight: 'bold', color:'black' }}>Login</h2>
                        </div>
                        <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "20px" }}>
                           
                            <form style={{display:"flex", flexDirection:"column", alignItems:'center', gap:"10px"}}>
                                <IonItem>
                                <IonLabel position="floating">Username</IonLabel>
                                <IonInput
                                    type='text'
                                    placeholder='username'
                                    name="username"
                                    value={formData.username}
                                    onIonChange={(e)=>handleOnchange(e)}
                                >

                                </IonInput>
                                </IonItem>
                                
                                
                                <IonItem>
                                <IonLabel position="floating">Password</IonLabel>
                                <IonInput
                                    type={reveal?'text':'password'}
                                    placeholder='your password'
                                    name="password"
                                    value={formData.password}
                                    onIonChange={(e)=>handleOnchange(e)}
                                >

                                </IonInput>
                                </IonItem>
                                <div style={{width:"100%",display:"flex", flexDirection:"column", alignItems:"end"}}>
                                    <IonToggle color="secondary" onClick={()=>setReveal(!reveal)}></IonToggle>
                                </div>
                                <IonButton 
                                expand="block" 
                                color='primary' 
                                type='submit'>Connect</IonButton>
                            </form>
                           
                        </div>
                        <a href='www.pmdice.com'><p style={{ color: "#4365B3", textDecoration: 'underline', textAlign: "end" }}>go to pmdice</p></a>
                    </div>
                </div>
                </IonContent>
            </IonPage>
        </>
    );
}

export default Login;