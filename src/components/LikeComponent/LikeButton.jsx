
class LikeButton extends React.Component {

        state = {
            likes: this.props.likes || 0,
            isLiked: this.props.isLiked || false
        };


    handleClick = () =>  {
        const isLiked = this.state.isLiked;
        const likes = this.state.likes + (isLiked ? -1 : 1);

        this.setState({likes, isLiked: !isLiked});
    };

    render() {


        return <button className="btn btn-link" onClick={ this.handleClick}>
            {this.state.likes}
            <i
                className={
                    this.state.isLiked ? "fas fa-thumbs-up" : "far fa-thumbs-up"}/>
            &nbsp;
            {this.state.isLiked ? "Je n'aime plus" : "J'aime !"}
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