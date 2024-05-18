// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/products">Produits</a></li>
            <li><a href="/categories">Catégories</a></li>
            <li><a href="/promotions">Promotions</a></li>
            <li><a href="/myaccount">Mon Compte</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Informations sur l'entreprise</h3>
          <ul>
            <li><a href="/about">À propos de nous</a></li>
            <li><a href="/history">Notre histoire</a></li>
            <li><a href="/values">Nos valeurs</a></li>
            <li><a href="/contact">Contactez-nous</a></li>
            <li>Adresse physique: [Votre adresse]</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Informations utiles</h3>
          <ul>
            <li><a href="/privacy">Politique de confidentialité</a></li>
            <li><a href="/terms">Conditions d'utilisation</a></li>
            <li><a href="/shipping">Livraison et retours</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/sizeguide">Guide des tailles</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Suivez-nous</h3>
          <ul className="social-icons">
            <li><a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://pinterest.com"><i className="fab fa-pinterest"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="bottom-footer">
        <p>&copy; {new Date().getFullYear()} Votre Entreprise. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
