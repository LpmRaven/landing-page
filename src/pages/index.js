import React from 'react';

import "./index.scss";

const Homepage = ({ children }) => {
    //     const data = useStaticQuery(graphql`
    //     query {
    //         teams: allTeam {
    //             edges {
    //                 node {
    //                     country
    //                     imageKey
    //                     teamId
    //                     name
    //                     slug
    //                     image {
    //                     childImageSharp {
    //                         gatsbyImageData(
    //                             width: 50
    //                             placeholder: BLURRED
    //                             formats: [AUTO, WEBP]
    //                         )
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //         discord: file(sourceInstanceName: {eq: "images"}, name: {eq: "discord"}) {
    //             childImageSharp {
    //                 gatsbyImageData(
    //                     width: 40
    //                     placeholder: BLURRED
    //                     formats: [AUTO, WEBP]
    //                 )
    //             }
    //         }
    //     }
    //   `);

    return (
        <DefaultLayout title="Squad Rank" pageDetails={{ title: "Squad Rank" }}>
            <ContentLayout title={"2022 OCE Squad Tournament"} subTitle={"Welcome"}>
                <div className="c-index">
                    <div className="c-index__layout-container g-flex__container">
                        <div className="g-grid__container g-grid__container--1/3-1/3-1/3 g-grid__container--align-start u-margin-top--2">
                            <div className="g-grid__item g-grid__item--one">
                                <Box>
                                    <div className={"g-flex__container g-flex__container--column-always c-index__welcome"}>
                                        <div className="g-flex__item"><h2>Welcome</h2></div>
                                        <div className="g-flex__item">
                                            <p>We would like to invite our OCE and Asian friends to take part in a brand new non-comp 12 vs 12 tournament.</p><br />
                                            <p>Friends &amp; non-comp teams only.</p><br />
                                            <p>Made for GMT +8 to GMT +13 players. Matches will be 7pm and 9pm (Sydney) on Friday and Saturday nights.</p><br />
                                            <p>Over the next few weeks we will match teams in head to head knockout rounds. Each round will have its own unique scenarios, such as: Bridge Wars, Compound Control and Bullets N' Bales.</p>
                                            <br />

                                            {/* <a href={"https://discord.gg/p5pTrtmjtk"} className="g-flex__item g-flex__container g-flex__container--align-center u-link" activeClassName="active">
                                                <span className="g-flex__item u-padding-right--1">Join the <a href={"https://discord.gg/p5pTrtmjtk"} className="u-link">discord</a> to get involved.</span>
                                                <Image
                                                    className="g-flex__item c-header__title-image"
                                                    image={data.discord}
                                                    alt="discord"
                                                />
                                            </a> */}
                                        </div>
                                    </div>
                                </Box>
                            </div>
                            <div className="g-grid__item g-grid__item--two">
                                <TeamTable teams={data.teams.edges} title={"Teams"} />
                            </div>
                            <div className="g-grid__item g-grid__item--three">
                                <Box className="c-index__dates">
                                    <div className={"g-flex__container g-flex__container--column-always g-flex__container--align-center g-flex__container--justify-center c-index__sign-up"}>
                                        <div className="g-flex__item"><h2>Sign-up ends</h2></div>
                                        <div className="g-flex__item"><p>6th Feb</p></div>
                                    </div>

                                    <div className={"g-flex__container g-flex__container--column-always g-flex__container--align-center g-flex__container--justify-center c-index__starts"}>
                                        <div className="g-flex__item"><h2>Starts</h2></div>
                                        <div className="g-flex__item"><p>12th Feb</p></div>
                                    </div>
                                    <div className={"g-flex__item c-index__discord"}>

                                        <a href={"https://discord.gg/p5pTrtmjtk"} className="g-flex__item g-flex__container g-flex__container--align-center g-flex__container--justify-center u-link">
                                            <span class="u-padding-right--1">Join the discord to get involved.</span>
                                            <Image
                                                className="g-flex__item c-header__title-image"
                                                image={data.discord}
                                                alt="discord"
                                            />
                                        </a>

                                    </div>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentLayout >
        </DefaultLayout >
    );
};

export default Homepage;