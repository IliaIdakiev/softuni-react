import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Main from './Main/Main';
import Aside from '../Aside/Aside';
import Posts from '../publications/Posts/Posts';
import Logout from '../Logout/Logout';
import Detail from '../publications/Detail/Detail';
import CreatePost from '../publications/CreatePost/CreatePost';
import Footer from '../Footer/Footer';
import Loader from './Loader/Loader';
// import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import userService from '../services/user-service';

const Profile = React.lazy(() => import('../Profile/Profile'));

function render(title, Cmp, otherProps) {
  return function (props) {
    return <Main title={title} ><Cmp {...props} {...otherProps} /></Main>
  };
}

function parseCookeis() {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    acc[cookieName] = cookieValue;
    return acc;
  }, {})
}

class App extends React.Component {

  constructor(props) {
    super(props);
    const cookies = parseCookeis();
    const isLogged = !!cookies['x-auth-token'];
    this.state = { isLogged };
  }

  logout = (history) => {
    userService.logout().then(() => {
      this.setState({ isLogged: false });
      history.push('/');
      return null;
    });
  }

  login = (history, data) => {
    userService.login(data).then(() => {
      this.setState({ isLogged: true });
      history.push('/');
    });
  }

  render() {
    const { isLogged } = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          <Loader local={true} isLoading={false} />
          <Navigation isLogged={isLogged} />
          <div className="Container">
            <Aside isLogged={isLogged} />
            <Switch>
              <Route path="/" exact><Redirect to="/posts" /></Route>
              <Route path="/posts" render={render('Posts', Posts, { isLogged })} />
              <Route path="/post/:id" render={render('Posts', Detail, { isLogged })} />
              <Route path="/logout" render={render('Logout', Logout, { isLogged, logout: this.logout })} />
              <Route path="/create-posts">
                <Main title="Create Post"><CreatePost /></Main>
              </Route>
              <Route path="/profile">
                <Main title="Profile">
                  <React.Suspense fallback={<Loader isLoading={true} />}>
                    <Profile></Profile>
                  </React.Suspense>
                </Main>
              </Route>
              <Route path="/login" render={render('Login', Login, { isLogged, login: this.login })} />
              <Route path="/register" render={render('Register', Register, { isLogged })} />
              <Route path="*">
                <Main title="Not Found"><NotFound /></Main>
              </Route>
            </Switch>
          </div>
          <Footer isLogged={isLogged} />
        </div>
      </BrowserRouter >
    );
  }
}
export default App;
