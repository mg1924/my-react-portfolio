import React from "react";

import aboutImg from "../../../static/assets/images/auth/login.jpg"

export default function() {
    return (
        <div className="two-column-page-wrapper">
            <div 
                className="image-col"
                style={{
                    backgroundImage: `url(${aboutImg})`
                }}
            />

            <div className="content-col">
                <h1>Content goes here! There's just gonna be a ton of fake content here for right now becauase I wanna see how the padding looks and whatnot, so please excuse my rambling.</h1>
            </div>
        </div>
    );
}