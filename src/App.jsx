// src/App.jsx
import React from 'react';
import ChatTerminal from './Terminal.jsx';
import './styles.css';
import { Analytics } from '@vercel/analytics/react';


export default function App() {
  return  (<><ChatTerminal /><Analytics /></>); 
}