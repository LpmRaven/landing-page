import React from "react";

import "./title-banner.scss";

export const TitleBanner = (props) => {
    return (
        <div className="g-flex__container g-flex__container--column-always g-flex__container--align-center c-title-banner">
            <div className="g-flex__container g-flex__container--column-always g-flex__contianer--align-center c-title-banner__tab-container">
                <div className="g-flex__item c-title-banner__tab">12</div>
                <div className="g-flex__item c-title-banner__tab-white"></div>
            </div>
            <p className="g-flex__item c-title-banner_title">{props.title}</p>
            <p className="g-flex__item c-title-banner_sub-title">{props.subTitle}</p>
        </div>
    );
};

