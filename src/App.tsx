import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login';
import Plan from './pages/Plan';
import Minning from './pages/Minning';
import { useGlobalContext } from './context/MineContext';
import { useEffect } from 'react';

setupIonicReact();

const App: React.FC = () => {
  const {isConnected, setConnect}=useGlobalContext();
  useEffect(
()=>{setConnect(true)}, [isConnected]
  )
  if(isConnected){
    return (
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Redirect exact  to="/folder/mine"/>
              <Route path="/folder/:name" component={Page}/>
              <Route path="/folder/mine" component={Minning}/>
              <Route path="/folder/buy" component={Plan}/>
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    );
  }else{
    return(
    <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
            <Redirect exact to="/login/auth"/>
            <Route path="/login/auth" component={Login}/>
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    
    )
  }

};

export default App;
