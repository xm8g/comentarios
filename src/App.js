import React, { Component } from 'react';
import 'bootstrap-css-only';

import NewComment from './NewComment'
import Comments from './Comments'

class App extends Component {
  constructor(props) {
    super(props)
    this.postNewComment = this.postNewComment.bind(this)
    
    this.state = {
      comments: {},
      isLoggedIn: false,
      user: {
        name: null,
        photo: null
      }
      
    }

    this.props.auth.onAuthStateChanged((usuarioLogadoGoogle)=>{
      if(usuarioLogadoGoogle){
        this.setState({ isLoggedIn: true, user : { name: usuarioLogadoGoogle.displayName, photo: usuarioLogadoGoogle.photoURL} })
      }else{
        this.setState({ isLoggedIn: false, user: {} })
      }
    }) 
        
    this.refComments = this.props.base.syncState('comments',  {
      context: this,
      state: 'comments'
    })
    
  }

  postNewComment(comment) {
    comment.user = {
      name: this.state.user.name
    }
    const comments = {...this.state.comments}
    const timestamp = Date.now()
    comments[`comm-${timestamp}`] = comment
    this.setState({
      comments: comments
    })
  }

  auth(provider) {
    this.props.auth.signInWithPopup(this.props.providers[provider])
  }

  render() {
    return (
      <div className="container">
        {this.state.isLoggedIn && 
          <div>
            {this.state.user.name}
            <img src={this.state.user.photo} alt={this.state.user.displayName} /><br />
            {console.log(this.state.isLoggedIn)}
            <button onClick={() => this.props.auth.signOut()}>Deslogar</button>
            <NewComment postNewComment={this.postNewComment} />
          </div>}
        {!this.state.isLoggedIn &&
          <div className="alert alert-info">
            <button onClick={() => this.auth('google')}>Entre no Google+ para se Autenticar</button>
          </div>
        }
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
