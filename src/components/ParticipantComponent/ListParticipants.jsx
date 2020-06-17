import React from 'react';
import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';


function ListParticipants(props){ 
    const participantsTeamOne = props.participantsTeamOne;
    const ListParticipants = participantsTeamOne.map(participant =>
   {
       return <div className="list" key={participant.id}>
     <p>
         <input type="text" id={participant.id} value={participant.pseudo} 
         onChange={(e)=>{
             props.setUpdate(e.target.value,participant.id)}}/>
        <span>
        <i className="far fa-trash-alt" onClick={() => {
            props.deleteParticipant(participant.id)
        }}   />
        </span>
     </p>
     
    </div>})
    return <div>
        <FlipMove duration={300} easing="ease-in-out">
        {ListParticipants}
        </FlipMove>
    
    </div>;
  }

  export default ListParticipants;