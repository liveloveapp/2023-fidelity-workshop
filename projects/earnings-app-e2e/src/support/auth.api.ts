import * as uuid from 'uuid';

export function login(username: string, password: string) {
  const user = {
    id: uuid.v4(),
    username,
  };

  window.localStorage.setItem('auth', JSON.stringify(user));
}
