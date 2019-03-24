import React, { Fragment, } from 'react';
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Departments from "./components/Departments";
import DepartmentForm from "./components/DepartmentForm";
import DepartmentView from "./components/DepartmentView";
import { Route, Switch, } from "react-router-dom";
import ProductForm from "./components/ProductForm";
import Products from "./components/Products";
import { Container, } from 'semantic-ui-react';
import ReviewForm from './components/ReviewForm';

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/departments' component={Departments} />
        <Route exact path='/departments/new' component={DepartmentForm} />
        <Route exact path='/departments/:id' component={DepartmentView} />
        <Route exact path='/departments/:id/edit' component={DepartmentForm} />
        <Route exact path="/departments/:department_id/products/new" component={ProductForm} />
        <Route exact path="/departments/:department_id/products/:id" component={Products} />
        <Route exact path="/departments/:department_id/products/:id/edit" component={ProductForm} />
        <Route exact path="/items/:item_id/review/:id/edit" component={ReviewForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
)

export default App;


