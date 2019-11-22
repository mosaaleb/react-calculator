import './styles/reset.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/Calculator';

const attachable = document.getElementById('root');
ReactDOM.render(<Calculator />, attachable);
