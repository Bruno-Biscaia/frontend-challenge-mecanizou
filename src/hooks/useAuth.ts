import Cookies from 'js-cookie';

export function login() {
  Cookies.set('auth', 'true', { expires: 1 });
}

export function logout() {
  Cookies.remove('auth');
}

export function isAuthenticated(): boolean {
  return Cookies.get('auth') === 'true';
}
