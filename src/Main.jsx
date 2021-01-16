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
import NotFound from './components/NotFound';
import AddReminder from './components/AddReminder';
import Reminders from './components/Reminders';

const Main = () => {

    const [state] = useData();

    const { loading } = useAuth();

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
                <Route path="/add-reminder" component={AddReminder} />
                <Route path="/my-reminders" component={Reminders} />
                <PrivateRoute path="/dashboard" component={Dashboard}/>
                <PrivateRoute path="/update-profile" component={UpdateProfile}/>
                <Route path="*" component={NotFound} />
              </Switch>
            </Router>
            <Footer />
        </div>
    );
}

export default Main;
