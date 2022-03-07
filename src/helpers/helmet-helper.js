import React from "react";

import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

import { getLink } from './get-link';
import { getMeta } from './get-meta';
import { getScript } from './get-script';
import { getTitle } from './get-title';

export const HelmetHelper = (props) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                siteUrl
            }
        }
    }
  `);

    return <Helmet
        title={getTitle(props.title)}
        meta={getMeta(props.meta)}
        script={getScript(props.script)}
        link={getLink(
            {
                siteUrl: data.site.siteMetadata.siteUrl,
                urlPath: props.urlPath
            }
        )}
    />
}