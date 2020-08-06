import React from 'react';

const Accueil = React.lazy(() => import('./components/AccueilComponent/Accueil'));

const Connexion = React.lazy(() => import('./components/PagesComponents/Connexion/Connexion'));
const Formulaire = React.lazy(() => import('./components/PagesComponents/UtilisateurCreation/Formulaire'));
const ListeUtilisateur = React.lazy(() => import('./components/PagesComponents/UtilisateurCreation/ListUser'));
const UserUpdate = React.lazy(() => import('./components/PagesComponents/UtilisateurCreation/UserUpdate'));
const ProfilUser = React.lazy(() => import('./components/PagesComponents/UtilisateurCreation/ProfilUser'));

const SuggestionCreation = React.lazy(() => import('./components/PagesComponents/Suggestion/SuggestionCreation'));
const SuggestionListe = React.lazy(() => import('./components/PagesComponents/Suggestion/SuggestionList'));

const Sortie = React.lazy(() => import('./components/SortieComponent/SortieCreation'));
const ListeSortie = React.lazy(() => import('./components/SortieComponent/SortieList'));
const SortieOrganisation = React.lazy(() => import('./components/SortieComponent/SortieOrganisation'));
const SortieSuscribedList = React.lazy(() => import('./components/SortieComponent/SortieSuscribedList'));

const TodoCreation = React.lazy(() => import('./components/PagesComponents/Todo/TodoComponent'));
const TodoListComponent = React.lazy(() => import('./components/PagesComponents/Todo/TodoListComponent'));

const EvenementCreation = React.lazy(() => import('./components/PagesComponents/Evenement/EvenementCreation'));
const EvenementList = React.lazy(() => import('./components/PagesComponents/Evenement/EvenementList'));
const NextEvenement = React.lazy(() => import('./components/PagesComponents/Evenement/NextEvenement'));

const MessageCreation = React.lazy(() => import('./components/PagesComponents/ForumComponent/MessageComponent/MessageCreation'));
const MessageListe = React.lazy(() => import('./components/PagesComponents/ForumComponent/MessageComponent/MessageListe'));

const ThreadCreation = React.lazy(() => import('./components/PagesComponents/ForumComponent/ThreadComponent/ThreadCreation'));
const ThreadList = React.lazy(() => import('./components/PagesComponents/ForumComponent/ThreadComponent/ThreadList'));


const PageNotFound = React.lazy(() => import('./PageNotFound'));


const routes = [
  { path: '/', exact: true, name: 'Accueil', component: Accueil  },
  { path: '/Accueil', name: 'Accueil', component: Accueil },
  { path: '/Connexion', name: 'Connexion', component: Connexion },
  
  { path: '/Formulaire', name: 'Formulaire', component: Formulaire },
  { path: '/ListeUtilisateur', name: 'ListeUtilisateur', component: ListeUtilisateur },
  { path: '/ProfilUser', name: 'ProfilUser', component: ProfilUser },
  { path: '/UserUpdate', name: 'UserUpdate', component: UserUpdate },

  { path: '/SuggestionCreation', name: 'SuggestionCreation', component: SuggestionCreation },
  { path: '/SuggestionListe', name: 'SuggestionListe', component: SuggestionListe },
  
  { path: '/Sortie', name: 'Sortie', component: Sortie },
  { path: '/SortieOrganisation', name: 'SortieOrganisation', component: SortieOrganisation },
  { path: '/SortieSuscribedList', name: 'SortieSuscribedList', component: SortieSuscribedList },
  
  { path: '/ListeSortie', name: 'ListeSortie', component: ListeSortie },
  { path: '/TodoCreation', name: 'TodoCreation', component: TodoCreation },
  { path: '/TodoListComponent', name: 'TodoListComponent', component: TodoListComponent },

  { path: '/EvenementCreation', name: 'EvenementCreation', component: EvenementCreation },
  { path: '/EvenementList', name: 'EvenementList', component: EvenementList },
  { path: '/NextEvenement', name: 'NextEvenement', component: NextEvenement },

  { path: '/MessageCreation', name: 'MessageCreation', component: MessageCreation },
  { path: '/MessageListe', name: 'MessageListe', component: MessageListe },

  { path: '/ThreadCreation', name: 'ThreadCreation', component: ThreadCreation },
  { path: '/ThreadList', name: 'ThreadList', component: ThreadList },


  { path: '/*', name: 'PageNotFound', component: PageNotFound }

];

export default routes;