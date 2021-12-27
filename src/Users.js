import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import http from './services/httpService';
import config from './config.json';
import 'react-toastify/dist/ReactToastify.css';

class Users extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
   const { data: posts } = await http.get(config.apiUsersEndpoint);
   this.setState({ posts });
  };
  
  handleAdd = async () => {
    const obj = { title: 'a', body: 'There aren\'t notifications' };
    const { data: post } = await http.post(config.apiUsersEndpoint, obj);
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async post => {
    post.username ="new username";
    await http.put(config.apiUsersEndpoint + "/" + post.id, post);
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = {...post};
    this.setState({ posts });
  };

  handleDelete = async post => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });

    try {
      await http.delete(config.apiUsersEndpoint + '/' + post.id);   
    } catch(ex){
        if (ex.response && ex.response.status === 404) 
        alert('This post has already been deleted.');        
      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button className="btn btn-primary btn-md m-1" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table table-hover">
          <thead>
            <tr className="table-info">
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.name}</td>
                <td>{post.username}</td>
                <td>{post.email}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Users;
