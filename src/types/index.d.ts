import {UserData} from '../exercicios/Exercicio01';

export {};

declare global {
  interface Window {
    UserData: any; // 👈️ turn off type checking
  }
}
