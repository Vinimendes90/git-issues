import React from 'react';

// import { Container } from './styles';
import {Link} from 'react-router-dom'
export default function Repository( {match }) {
  return (
    <Link to='/'>Repository: {decodeURIComponent(match.params.repository)}</Link>
  );
}



