import axios from 'axios';
import React, { useState, useEffect } from 'react';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react';

import './Tab1.css';

interface Item {
  description: string;
}

const Tab1: React.FC = () => {
  const [itemsContent, setItemsContent] = useState([]);

  const items = itemsContent.map((item: Item) => (
    <IonItem>
      <IonLabel>{item.description}</IonLabel>
    </IonItem>
  ));
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1: Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1: Events</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>{items}</IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
