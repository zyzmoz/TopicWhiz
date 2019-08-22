import firebase from 'firebase';
import config from '../../config.firebase';

export const firebaseApp = firebase.initializeApp(config);
// export const topicRef = firebaseApp.database().ref();