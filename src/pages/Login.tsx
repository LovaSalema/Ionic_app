import React from 'react';
import { IonButton, IonInput, IonPage } from '@ionic/react';


const Login: React.FC = () => {
    return (
        <>
            <IonPage>
                <div style={{ height: "screen", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <div style={{ display: 'flex', flexDirection: "column" }}>
                        <div style={{ marginTop: '50px', textAlign: 'center' }}>
                            <h2>Login</h2>
                        </div>
                        <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "20px" }}>
                            <IonInput label="Username" labelPlacement="floating" fill="solid" placeholder="Enter username"></IonInput>
                            <IonInput label="password" type='password' labelPlacement="floating" fill="outline" placeholder="Enter password"></IonInput>
                            <IonButton expand="block">Connect</IonButton>
                        </div>
                        <a href='www.pmdice.com'><p style={{ color: "#4365B3", textDecoration: 'underline', textAlign: "end" }}>go to pmdice</p></a>
                    </div>
                </div>
            </IonPage>
        </>
    );
}

export default Login;