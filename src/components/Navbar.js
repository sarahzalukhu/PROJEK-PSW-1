// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Beranda</Link></li>
        <li><Link to="/materi">Materi</Link></li>
        <li><Link to="/latihan">Latihan</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
