import Cookies from 'universal-cookie';


export function setCookie() {
  const cookies = new Cookies();

    cookies.set('myCat', 'Pacman', { path: '/' });
    console.log(cookies.get('myCat')); // Pacman
 
};