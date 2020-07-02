
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class LikeButton extends React.Component {

    handleClick = () =>  {
        console.log("test");
        this.props.fallback(this.props.suggestion);
    };

    render() {


        return <button className="btn btn-link" onClick={ this.handleClick}>
            {this.props.likes}
            <i
                className={
                    this.props.likes > 0 ? "far fa-thumbs-up"  : "fas fa-thumbs-up"}/>
            &nbsp;
            {this.props.likes > 0 ? "J'aime !" : "Je n'aime plus"}
            &nbsp;
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