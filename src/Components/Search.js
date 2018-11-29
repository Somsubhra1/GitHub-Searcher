import React, {Component} from 'react';

class Search extends Component {

  submit(event) {
    event.preventDefault();
    var value = this.refs.username.value;
    this.props.searchProfile(value);
    this.refs.username.value = "";
  }

  render(){
    return(
      <div className='search-box'>
        <form action="" method="POST" onSubmit={this.submit.bind(this)} className="form-inline">
          <label>
            <input type="search" ref="username" placeholder="Type GitHub Username" className="form-control form-control-lg"/>
            <input type="submit" name="" placeholder="Search" className="btn btn-primary btn-lg"/>
          </label>
        </form>
      </div>
    );
  }
}

export default Search;
