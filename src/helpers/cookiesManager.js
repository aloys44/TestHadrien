import Cookies from 'universal-cookie';


export function setCookie(tokenName, tokenContent) {
  const cookies = new Cookies();

    cookies.set(tokenName, tokenContent, { path: '/' });
};

export function getCookie(tokenName) {
  const cookies = new Cookies();

    return cookies.get(tokenName);
};