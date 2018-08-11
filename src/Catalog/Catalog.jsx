/* eslint-disable */
import React from 'react';
import Navbar from '../Navbar';
import { Router, Link } from "@reach/router";
import './Catalog.scss';

const Catalog = ({ pages }) => (
  <div className="catalog">
    <Navbar>
      {pages.map(page => (
        <Link to={page.path}>{page.title}</Link>
      ))}
    </Navbar>
    <Router>
      {pages.map(page => {
        const Component = page.content;
        return <Component key={page.title} path={page.path} />;
      })}
    </Router>
  </div>
)

export default Catalog;
