import React from 'react';

const Accueil = React.lazy(() => import('./components/AccueilComponent/Accueil'));

const Connexion = React.lazy(() => import('./components/PagesComponents/Connexion/Connexion'));
const Formulaire = React.lazy(() => import('./components/PagesComponents/UtilisateurCreation/Formulaire'));
const ListeUtilisateur = React.lazy(() => import('./components/PagesComponents/UtilisateurCreation/ListUser'));
const SuggestionCreation = React.lazy(() => import('./components/PagesComponents/Suggestion/SuggestionCreation'));
const SuggestionListe = React.lazy(() => import('./components/PagesComponents/Suggestion/SuggestionList'));
const SuggestionTri = React.lazy(() => import('./components/SuggestionCreationComponent/SuggestionsSortByLike'));
const Sortie = React.lazy(() => import('./components/SortieComponent/SortieCreation'));
const ListeSortie = React.lazy(() => import('./components/SortieComponent/SortieList'));
const ListeChoseAFaire = React.lazy(() => import('./components/PagesComponents/TodoList/TodoListComponent'));
const ParticipantTest = React.lazy(() => import('./components/ParticipantComponent/OrganisationCourse'));
const UserUpdate = React.lazy(() => import('./components/PagesComponents/UtilisateurCreation/UserUpdate'));
const TodoCreation = React.lazy(() => import('./components/PagesComponents/Todo/TodoComponent'));
const TodoListComponent = React.lazy(() => import('./components/PagesComponents/Todo/TodoListComponent'));


const PageNotFound = React.lazy(() => import('./PageNotFound'));


const routes = [
  { path: '/', exact: true, name: 'Accueil' },
  { path: '/Accueil', name: 'Accueil', component: Accueil },
  { path: '/Connexion', name: 'Connexion', component: Connexion },
  { path: '/Formulaire', name: 'Formulaire', component: Formulaire },
  { path: '/ListeUtilisateur', name: 'ListeUtilisateur', component: ListeUtilisateur },
  { path: '/SuggestionCreation', name: 'SuggestionCreation', component: SuggestionCreation },
  { path: '/SuggestionListe', name: 'SuggestionListe', component: SuggestionListe },
  { path: '/SuggestionTri', name: 'SuggestionTri', component: SuggestionTri },
  { path: '/Sortie', name: 'Sortie', component: Sortie },
  { path: '/ListeSortie', name: 'ListeSortie', component: ListeSortie },
  { path: '/ListeChoseAFaire', name: 'ListeChoseAFaire', component: ListeChoseAFaire },
  { path: '/ParticipantTest', name: 'ParticipantTest', component: ParticipantTest },
  { path: '/UserUpdate', name: 'UserUpdate', component: UserUpdate },
  { path: '/TodoCreation', name: 'TodoCreation', component: TodoCreation },
  { path: '/TodoListComponent', name: 'TodoListComponent', component: TodoListComponent }

];

export default routes;