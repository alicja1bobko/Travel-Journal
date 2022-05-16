import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Travel() {
    return (
    
            <div className="travel">
            < img src="https://source.unsplash.com/WLxQvbMyfas" alt="fiji" className='travel--image' />
            <div className="travel--text">
            <span>
            <span className="travel--location"><FontAwesomeIcon icon={faLocationDot} className="travel--pin" />Japan</span>
                <a href="https://www.google.com/maps/d/u/0/embed?mid=1W9AtcwnYAqP1yVHr5YjhwmQa0eM&ie=UTF8&hl=en&msa=0&ll=35.36525600000006%2C138.737411&spn=0.09799%2C0.145912&z=12&output=embed" className="google--maps">View on Google Maps</a>
                </span>
                <h2>Mount Fuji</h2>
                <span className="travel--date">12 Jan, 2021- 24 Jan, 2021</span>
                <section className="travel--desc">
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </section>
                </div>
            </div> 
    )
}