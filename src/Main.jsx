import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { useData } from './contexts/DataContext';
import Login from './components/auth/Login';
import ForgotPassword from './components/auth/ForgotPassword';
import VerfiyEmail from './components/auth/VerifyEmail';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/auth/Dashboard';
import Home from './components/Home';
import UpdateProfile from './components/auth/updateProfile';
import Header from './components/Header';
import Signup from './components/auth/SignUp';
import Footer from './components/Footer';
import ReminderForm from './components/ReminderForm';

const Main = () => {

    const [state] = useData();

    const { loading, currentUser } = useAuth();

    console.log(currentUser);

    return (
        <div className={state?.isLoading || loading ? "main loading" : "main"}>
            <Header />
            <Router>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/signup" component={Signup} />
                <Route path="/verify-email" component={VerfiyEmail}/>
                <Route path="/login" component={Login}/>
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/add" component={ReminderForm} />
                <PrivateRoute path="/dashboard" component={Dashboard}/>
                <PrivateRoute path="/update-profile" component={UpdateProfile}/>
              </Switch>
            </Router>
            <Footer />
        </div>
    );
}

export default Main;
