import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contactImg from "../../../static/assets/images/auth/login.jpg";

export default function() {
    return (
        <div className="two-column-page-wrapper">
            <div className="content-col">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone"/>
                        </div>

                        <div className="text">
                            123-456-7890
                        </div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope"/>
                        </div>

                        <div className="text">
                            fakeEmail@example.com
                        </div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marked-alt"/>
                        </div>

                        <div className="text">
                            Utah, United States
                        </div>
                    </div>
                </div>
            </div>
            <div 
                className="image-col"
                style={{
                    backgroundImage: `url(${contactImg})`
                }}
            />
        </div>
    );
}