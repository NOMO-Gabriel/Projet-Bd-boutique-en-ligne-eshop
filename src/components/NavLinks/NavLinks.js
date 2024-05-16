import React from 'react';
import { Link } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () => {
    return (
        <div>
            <ul class="ul-gender">
                <li><Link>Hommes</Link></li>
                <li><Link>Femmes</Link></li>
                <li><Link>Enfants</Link></li>
                <div class="vertical-divider"></div>
                <li><Link>Pantalons</Link></li>
                <li><Link>Chemises</Link></li>
                <li><Link>Jupes</Link></li>
                <li><Link>Robes</Link></li>
                <li><Link>Lunettes</Link></li>
            </ul>
        </div>
    );
};

export default NavLinks;