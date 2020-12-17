import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const movie = {
    title: 'React Redux',
    version: 10.1,
    overview: 'Redux is a standalone JS library. ... React lets you describe your UI as a function of your state, and Redux contains state and updates it in response to actions. ',
    image: 'https://miro.medium.com/max/1838/0*95tBOgxEPQAVq9YO.png'
}


const Image = props => {
    return(
        <img src={props.src} alt={props.title} style={setImageParam} />
    )
}

const setImageParam ={
    width:'550px',
   
}

class MovieItem extends Component {

    constructor(props){
        super(props)

        this.state ={
            show:false,
            like:false
        }
        this.handlerToggle = this.handlerToggle.bind(this)
    }
    handlerToggle(){
        this.setState({
            show: !this.state.show
        })
    }
    handlerLike = () => {
        this.setState({
            like: !this.state.like
        })
    }

    render(){
    const {data:{title , version , overview , image}} = this.props;
    console.log(this)
     return(
        <>
        <h1>
        {title}
        </h1>
        <p>
        {version}
        </p>
        <Image src={image} alt={title} />
        <br/>
        <button type='button' onClick={this.handlerToggle} >{this.state.show ? 'hide': 'show'}</button>
        <button type='button' onClick={this.handlerLike} className={this.state.like ? 'btn__like': ''}>Like</button>
        <p>
        {this.state.show ? overview : null}
        </p>
        </>
     )   
    }
}


const App = () => {

    return(
        <>
        <MovieItem data={movie}/>
        </>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'));

