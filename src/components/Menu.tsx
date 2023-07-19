import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { Link, useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, cartOutline, diceOutline, heartOutline, heartSharp, logOutOutline, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, personCircleOutline, trashOutline, trashSharp, trendingUp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';
import { useGlobalContext } from '../context/MineContext';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Mine',
    url: '/folder/mine',
    iosIcon: diceOutline,
    mdIcon: diceOutline
  },
  {
    title: 'Buy plan',
    url: '/folder/buy',
    iosIcon: cartOutline,
    mdIcon: cartOutline
  },
  {
    title: 'MyAccount',
    url: '/folder/myaccount',
    iosIcon: personCircleOutline,
    mdIcon: personCircleOutline
  },
  {
    title: 'Statistics',
    url: '/folder/statistics',
    iosIcon: trendingUp,
    mdIcon: trendingUp
  }
];

const labels = [
  {
    title: 'Logout',
    url: '/login/auth',
    iosIcon: logOutOutline,
    mdIcon: logOutOutline
  }
];

const Menu: React.FC = () => {
  const location = useLocation();
  const {isConnected, setConnect}=useGlobalContext();

  const Logout =()=>{
    fetch(
      '/api/logout.php',{
        method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
      }
    )
  }
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Pmdice Auto-bet</IonListHeader>
          <IonNote>Increase your profit</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Logout</IonListHeader>
          {labels.map((label, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem lines="none" key={index} routerLink={label.url} onClick={()=>{setConnect(false); Logout()}}>
                <IonIcon aria-hidden="true" slot="start" icon={logOutOutline} />
                <IonLabel>{label.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
