import admin from 'firebase-admin';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getRemoteConfig } from 'firebase-admin/remote-config';

const initializeAdminApp = () => {
  // Check if Firebase Admin SDK is already initialized
  if (!getApps().length) {
    try {
      const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_SDK_SA_KEY || '{}');
      const firebaseApp = initializeApp({
        credential: cert(serviceAccount),
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
      });
      return firebaseApp;
    } catch (error) {
      console.error('Firebase Admin initialization error', error.message);
    }
  }
}

const getServerConfig = async () => {
    try {
      const adminApp = initializeAdminApp();
      const remoteConfig = getRemoteConfig(adminApp);
      const template = await remoteConfig.getServerTemplate();
      return template.evaluate(); // or the entire template if needed
    } catch (error) {
      console.error('Error fetching Server Config:', error);
      return null;
    }
}

export { admin, getServerConfig };
