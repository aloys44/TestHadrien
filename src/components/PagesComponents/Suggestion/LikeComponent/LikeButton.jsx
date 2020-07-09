
import React from 'react';
import ReactDOM from 'react-dom'

class LikeButton extends React.Component {


    handleClick = () =>  {
        //this.props.nbr += this.props.is_like ? +1 : -1;

        this.props.fallback(this.props.suggestion, this.props.is_like);
    };

    render() {
        return <button className="btn btn-link" onClick={ this.handleClick}>
            {this.props.nbr}
            <i
                className={
                    this.props.is_like ? "fas fa-thumbs-up" : "fas fa-thumbs-down"}/>
        </button>


    }
}

document.querySelectorAll('span.react-like').forEach(function(span){

    // dans le span quelle est la donnée like le + est pour le nombre
    const likes = +span.dataset.likes;
    console.log(likes)
    // Si c'est c'est égale à 1
    const isLiked = +span.dataset.isLiked === 1;
    console.log(isLiked)


    ReactDOM.render(<LikeButton likes={likes} isLiked={isLiked} />,span);
});

export default LikeButton;