/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Travel(props) {
    const { title, location, googleMapsUrl, startDate, endDate, description, imageURL, line } = props;
    return (
        <div>
            <div className="travel">
            < img src={imageURL} alt={title} className='travel--image' />
            <div className="travel--text">
            <span>
            <span className="travel--location"><FontAwesomeIcon icon={faLocationDot} className="travel--pin" />{location}</span>
                <a href={googleMapsUrl} className="google--maps" target="_blank">View on Google Maps</a>
                </span>
                <h2>{title}</h2>
                <span className="travel--date">{startDate}, {endDate }</span>
                <section className="travel--desc">
                    {description}
                </section>
            </div>
            </div> 
            {!line && <hr className="line"></hr>}
            </div>
    )
}