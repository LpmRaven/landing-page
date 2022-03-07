import React from "react";
import { TitleBanner } from "../../components/title-banner";

import "./content-layout.scss";

export const ContentLayout = (props) => {

    return (
        <div className="c-content-layout">
            <div className="g-grid__container--content-layout-title">
                <div className="g-grid__item--title-pl"></div>
                <div className="g-grid__item--title-main">
                    <TitleBanner title={props.title} subTitle={props.subTitle} />
                </div>
                <div className="g-grid__item--title-pr"></div>
            </div>
            <div className="g-grid__container--content-layout">
                <>
                    <div className="g-grid__item--content-pl"></div>
                    <div className="g-grid__item--content-main">
                        {props.children}
                    </div>
                    <div className="g-grid__item--content-pr"></div>
                </>
            </div>
        </div>
    );
};

export default ContentLayout;
