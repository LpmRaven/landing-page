import React from "react";

import { Footer } from "../../containers/footer";
import { Header } from "../../containers/header";
import { HelmetHelper } from "../../helpers/helmet-helper";


import "./default-layout.scss";

export const DefaultLayout = (props) => {
    return (
        <div className={props.className}>
            <div className="c-default-background">
                <div className="c-default-background-layout">
                    <div className="c-default-background-layout__left"></div>
                    <div className="c-default-background-layout__main"></div>
                    <div className="c-default-background-layout__right"></div>
                </div>
            </div>
            <HelmetHelper {...props.pageDetails} />
            <Header title={props.title} />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
