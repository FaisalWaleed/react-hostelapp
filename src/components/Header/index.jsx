import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-brand">
            {this.props.title}
          </div>
          <div className="collapse navbar-collapse">
            <form className="navbar-form navbar-right">
              <div className="form-group">
                <Link to={'/'} className="add-margin btn btn-info">
                  Dashboard
                </Link>
                <Link to={'/buildings'} className="add-margin btn btn-success" >
                 Buildings
                </Link>
                <Link to={'/buildings/show'} className="add-margin btn btn-primary" >
                  Rooms/Apt
                </Link>

                {localStorage.getItem("access-token") ? (
                    <a onClick={ (props = this.props) => { localStorage.clear(); window.location.href ="/"; } } className="add-margin btn btn-danger" >
                        Logout
                    </a>
                ) : (
                      <Link to={'/login'} className="add-margin btn btn-danger" >
                        Login
                      </Link>
                )}
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  };
}

Header.defaultProps = {
  title: 'Hostelers',
  hint: 'hostel management systems',
};
export default Header;
