import { Platform } from 'react-native';
const localHost = 'http://localhost:5001/mealstogo-406f7/us-central1';
const liveHost = 'https://us-central1-mealstogo-406f7.cloudfunctions.net';
const isIOS = Platform.OS === 'ios';
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isMock = true;
export const host = isDevelopment && isIOS ? localHost : liveHost;
