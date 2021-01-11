import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/auth/SignUp';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/auth/Login';
import ForgotPassword from './components/auth/ForgotPassword';
import VerfiyEmail from './components/auth/VerifyEmail';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/auth/Dashboard';
import Home from './components/Home';
import UpdateProfile from './components/auth/updateProfile';

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/signup" component={Signup} />
            <Route path="/verify-email" component={VerfiyEmail}/>
            <Route path="/login" component={Login}/>
            <Route path="/forgot-password" component={ForgotPassword} />
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <PrivateRoute path="/update-profile" component={UpdateProfile}/>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
