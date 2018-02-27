import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Buildings from './components/Buildings';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => (
  <div>
    <Router>
      <Layout>
        <Route path="/" component={Dashboard} exact />
        <Route path="/buildings" component={Buildings} exact />
        <Route path="/buildings/show" component={Dashboard} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Layout>
    </Router>
  </div>
);

export default App;
