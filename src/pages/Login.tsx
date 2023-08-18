import React, { useEffect, useRef, useState } from 'react';
import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonPage, IonToggle } from '@ionic/react';
import { useGlobalContext } from '../context/MineContext';
import { useHistory } from 'react-router';
import { Browser } from '@capacitor/browser';

interface Data {
    username: string,
    password: string
}
const Login: React.FC = () => {
    const InputRef = useRef<HTMLIonInputElement>(null)
    const history = useHistory()
    const { isConnected, setConnect } = useGlobalContext();
    const [error, setError] = useState('');
    let container = document.createElement('span');
    container.innerHTML = error;

    const [Data, setData] = useState<Data>({
        username: '',
        password: ''
    });
    useEffect(() => {
        setError(error); setData(Data);
    }, [error, Data])
    const [reveal, setReveal] = useState(false);
    const handleOnChange = (e: any) => {
        setData({ ...Data, [e.target.name]: e.target.value });

    }
    const handleOnSubmit = async (e: any) => {
        setConnect(true);
        e.preventDefault();
        const params = new FormData();
        params.append('loginname', Data.username);
        params.append('loginpw', Data.password);
        const body = new URLSearchParams();
        body.append('loginname', Data.username);
        body.append('loginpw', Data.password);

        await fetch("/api/login.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: body.toString()

        })
            .then((response) => {
                response.text().then((data => {
                    setError(data); if (data === 'ok') {
                        setConnect(true); history.push('/folder/mine');
                    }
                }))
            })
            .catch((err) => { console.log(err); setError(err); })
    }
    const openCapacitorSite = async () => {
        await Browser.open({ url: 'http://pmdice.com/' });
        
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
                                <h2 style={{ fontWeight: 'bold', color: 'black' }}>Login</h2>
                            </div>
                            {isConnected ? '' : <div dangerouslySetInnerHTML={{ __html: error }} style={{ color: 'red', textAlign: "center" }}></div>}
                            <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "20px" }}>

                                <form style={{ display: "flex", flexDirection: "column", alignItems: 'center', gap: "10px" }} onSubmit={(e) => handleOnSubmit(e)}>
                                    <IonItem>
                                        <IonLabel position="floating" >Username</IonLabel>
                                        <IonInput
                                            type='text'
                                            placeholder='username'
                                            name="username"
                                            value={Data.username}
                                            ref={InputRef}
                                            onIonChange={(e) => handleOnChange(e)}
                                        >

                                        </IonInput>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position="floating" aria-label='password'>Password</IonLabel>
                                        <IonInput
                                            type={reveal ? 'text' : 'password'}
                                            placeholder='your password'
                                            name="password"
                                            value={Data.password}
                                            ref={InputRef}
                                            onIonChange={(e) => handleOnChange(e)}

                                        >

                                        </IonInput>
                                    </IonItem>
                                    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "end" }}>
                                        <IonToggle color="secondary" onClick={() => setReveal(!reveal)}></IonToggle>
                                    </div>
                                        <IonButton
                                            expand="block"
                                            color='primary'
                                            type='submit'
                                        >
                                        Connect
                                        </IonButton>
                                </form>

                            </div>
                            <IonButton color="secondary"  >Sign up</IonButton>
                            <IonButton color="tertiary" onClick={openCapacitorSite}> go to Pmdice</IonButton>
                        </div>
                    </div>
                </IonContent>
            </IonPage>
        </>
    )
}

export default Login;
