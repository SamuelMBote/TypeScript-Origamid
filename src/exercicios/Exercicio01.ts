import {Index} from 'npm-check-updates/build/src/types';

export interface UserData {
  nome?: string;
  email?: string;
  cpf?: string;
}

window.UserData = {};

function isUserData(obj: unknown): obj is UserData {
  if (
    obj &&
    typeof obj === 'object' &&
    ('nome' in obj || 'email' in obj || 'cpf' in obj)
  ) {
    return true;
  } else {
    return false;
  }
}

function validJSON(str: string) {
  try {
    JSON.parse(str);
  } catch (error) {
    return false;
  }
  return true;
}

function loadLocalStorage() {
  const localUserData = localStorage.getItem('UserData');
  if (localUserData && validJSON(localUserData)) {
    const UserData = JSON.parse(localUserData);
    if (isUserData(UserData)) {
      const retorno = Object.entries(UserData).forEach(([key, value]) => {
        const input = document.getElementById(key);
        if (input instanceof HTMLInputElement) {
          input.value = value;
          window.UserData[key] = value;
        }
      });
    }
  }
}
loadLocalStorage();

export function handleInput({target}: KeyboardEvent) {
  if (target instanceof HTMLInputElement) {
    window.UserData[target.id] = target.value;
    localStorage.setItem('UserData', JSON.stringify(window.UserData));
  }
}

export function Exercise() {
  const form = document.querySelector<HTMLElement>('#form');

  form?.addEventListener('keyup', handleInput);
}
