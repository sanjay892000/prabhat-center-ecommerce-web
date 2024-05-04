import React from 'react'
import { Link } from "react-router-dom";
import './footer.css'

function Footer() {
  return (
    <div>
            <footer>
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <span>PRABHAT</span>
                            <span className="logo_name">CENTER</span>
                        </div>
                        <div className="media-icons">
                            <Link to="https://www.facebook.com/profile.php?id=100010363560624&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="https://twitter.com/sanjayk21415502"><i className="fab fa-twitter"></i></Link>
                            <Link to="https://www.instagram.com/sanjay_singh.15/"><i className="fab fa-instagram"></i></Link>
                            <Link to="https://www.linkedin.com/in/sanjay-kumar-singh-844a62222/"><i className="fab fa-linkedin-in"></i></Link>
                            <Link to="https://www.youtube.com/channel/UCifxJcmCzfNGOOkxvd0tR0g"><i className="fab fa-youtube"></i></Link>
                        </div>
                    </div>
                    <div className="link-boxes">
                        <ul className="box">
                            <li className="link_name">Company</li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/mens">Mens</Link></li>
                            <li><Link to="/womens">Womens</Link></li>
                            <li><Link to="/kids">Kids</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Get to Know Us</li>
                            <li><Link to="/c/61554bfe801949ad7b9be4ff">About Us</Link></li>
                            <li><Link to="/c/61554bfe801949ad7b9be4ff">Careers</Link></li>
                            <li><Link to="/c/61554bfe801949ad7b9be4ff">Press Releases</Link></li>
                            <li><Link to="/c/61554bfe801949ad7b9be4ff">Prabhat Center Science</Link></li>
                        </ul>
                        <ul className="box top-category">
                            <li className="link_name">Make Money with Us</li>
                            <li><Link to="/c/61554bfe801949ad7b9be4ff">Sell on Prabhat Center</Link></li>
                            <li><Link to="/c/61554c2753bcf306407cb1bd">Protect & build your brand</Link></li>
                            <li><Link to="/c/61554c43d2a6b15f764aff36">Prabhat Global Selling</Link></li>
                            <li><Link to="c/61554c63dfd6a37d71449b5c">Advertise Your Product</Link></li>
                        </ul>
                        <ul className="box input-box">
                            <div className="aboutli">
                                <li className="link_name">Let Us Help You</li>
                                <li><Link to="c/61554c63dfd6a37d71449b5c">Your Account</Link></li>
                                <li><Link to="c/61554c63dfd6a37d71449b5c">Returns Center</Link></li>
                                <li><Link to="c/61554c63dfd6a37d71449b5c">100% Purchase Protection</Link></li>
                                <li><Link to="c/61554c63dfd6a37d71449b5c">Help</Link></li>
                            </div>
                            <li style={{ color: "#F7FFFF", width: "100" }}><Link to="https://sanjay892000.github.io/my-portfolio-web/">Created by Sanjay Kumar Singh</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">Copyright © 2024 <Link to="/">Prabhat Center</Link>All rights reserved</span>
                        <span className="policy_terms">
                            <Link to="/">Privacy policy</Link>
                            <Link to="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>

        </div>
  )
}

export default Footer
