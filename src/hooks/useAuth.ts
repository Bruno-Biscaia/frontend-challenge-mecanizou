import Cookies from 'js-cookie';

export function login() {
  Cookies.set('auth', 'true', { expires: 1 }); // tempo de expiração de 1 dia
}

export function logout() {
  Cookies.remove('auth');
}

export function isAuthenticated(): boolean {
  return Cookies.get('auth') === 'true';
}
