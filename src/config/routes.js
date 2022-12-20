import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import TodosContainer from '../containers/TodosContainer';

export default (
  <Routes>
    <Route exact path='/' element={ <Home /> }/>
    <Route path='/todos' element={ < TodosContainer /> }/>
  </Routes>
);
