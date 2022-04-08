import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'


function Footer() {
  return (
    <div name="info" className="footer">
        <div className="container">
            <div className="top">
                <h3>DOG DAY CARE.</h3>
                <div className="social">
                <FaFacebook className="icon" />
              <FaInstagram className="icon" />
              <FaYoutube className="icon" />
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <ul>
                        <li>Om oss</li>
                        <li>Partnerskap</li>
                        <li>Nya händelse</li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                    <li>Kontakt</li>
                    <li>Villkor</li>
                    <li>Politik</li>
                    <li>Integritet</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer