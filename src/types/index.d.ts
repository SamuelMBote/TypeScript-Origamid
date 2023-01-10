export {};

declare global {
  interface Window {
    UserData: any; // 👈️ turn off type checking
  }
}
declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';
