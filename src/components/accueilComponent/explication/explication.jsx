import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class explication extends Component {

  render() {
    return (
        
        <div>
            <div class="titreInferieur">
            <h3>Mais alors pourquoi un site web ???</h3>
               <div className="espace_2">
                <center><img src="https://img.icons8.com/emoji/96/000000/thinking-face.png"/></center>
                </div>
                <div className="important_p">
                <h2>Ce site web à plusieurs buts ...</h2>
                </div>
                <p>Déja de faire connaitre l'association, ses membres et son activité ... </p>
                <div className="important_p">
                <h2>Toutefois ce site web ne s'arrête pas là !!!</h2>
                </div>
                <div className="important_p">
                <h4>En effet vous pouvez intervenir de deux manières: En faisant des suggestions vis à vis de l'association et du présent site web. Mais également en vous inscrivant aux prochaines courses !</h4>
                </div>
                <p>
                 Pour vous inscrire à la prochaine course des Joggeurs Utiles il vous suffit d'appuyer sur le bouton participer à une course au sein de la rubrique <strong>Sortie</strong>.
                </p>
                <p>
                 Au travers de la rubrique <strong>suggestion</strong> (ci-dessous) vous pouvez ainsi donnez votre avis quant aux prochaines courses 
                ou pour soumettre toutes idées d'évolution de l'association qui vous paraitrait intéressante.</p>
                <p>Vous pouvez également faire des suggestions quand à l'évolution de ce site web au travers de la rubirque <strong>TODO</strong> (ci-dessous également) c'est une section faite exclusivement pour le site web.</p>
                <div className="important_p">
                <h4>Dans ces 2 cas l'association des Joggeurs Utiles et ses membres pourront vous répondre rapidement.</h4>
                </div>
                <p>Les autres utilisateurs pourront eux <strong>liker</strong> ces 2 types de suggestions. Les suggestions les plus likées seront mises en avant au sein de la première page du site et auront ainsi plus de visibilité.</p>
        <div className="prerequis">
            <h3>Prerequis :</h3>
            <p>Pour intervenir et participer au sein de ces 2 possibilités il vous faut juste créer un compte et vous connecter ! 
                    Vous ferez ainsi parti de l'empire des joggeurs Utiles !!! </p>
                    <center><img src="https://img.icons8.com/bubbles/150/000000/stormtrooper.png"/></center>
        </div>
            <div className="espace"> 
            <center>
                <a class="button is-primary">
                  <strong>
                    <NavLink to="/Formulaire">Inscription</NavLink>
                  </strong>
                </a>
            </center>
            </div>    
                <center>
                <a class="button is-primary">
                  <strong>
                    <NavLink to="/Connexion">Connection</NavLink>
                  </strong>
                </a>
            </center>
            </div>
        </div>
        
    );
  }
}

export default explication;