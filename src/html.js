import React, { useEffect } from "react";

import PropTypes from "prop-types";

const useScript = (url, inlineCode) => {
    useEffect(() => {
        const script = document.createElement("script");

        script.src = url;
        script.async = true;
        script.type = "text/javascript";

        const inlineScript = document.createTextNode(inlineCode);
        script.appendChild(inlineScript);

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [url, inlineCode]);
};

export default class HTML extends React.Component {
    render() {
        return (
            <html lang="en" {...this.props.htmlAttributes}>
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <meta name="theme-color" content="#0969E5" />
                    <meta name="p:domain_verify" content="b37a6615119a7bb8e741a2fb68465fd1" />
                    <meta name="google-site-verification" content="GzGvrz60X3dD5dbVjxMyNmfLvdgz9NJu7r1vnX58ilI" />
                    <meta name="commission-factory-verification" content="d25f33d0c9b24b39a166401ca9c1a57f" />
                    {this.props.headComponents}
                </head>
                <body {...this.props.bodyAttributes}>
                    {this.props.preBodyComponents}
                    <div
                        key={"body"}
                        id="___gatsby"
                        dangerouslySetInnerHTML={{ __html: this.props.body }}
                    />
                    {this.props.postBodyComponents}
                    {useScript("//cdn.viglink.com/api/vglnk.js", "var vglnk = {key: '7f1b43e97517e27d282eda74a0081e99'};")}
                </body>
            </html>
        );
    }
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
};
