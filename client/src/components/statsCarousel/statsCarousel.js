import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Stats from "../stats/stats";

function StatsCarousel(props) {
    return (
        <Carousel autoPlay={false}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Stats
                    name={"Longest Book"}
                    stat={props.userStats.longestBook}
                />
                <Stats
                    name={"Shortest Book"}
                    stat={props.userStats.shortestBook}
                />
                <Stats
                    name={"Average Length"}
                    stat={props.userStats.avgLength}
                />
                {/* <Stats
                    name={"Genres Read"}
                    stat={props.userStats.booksRead}
                /> */}
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Stats
                    name={"Pages Read"}
                    stat={props.userStats.pagesRead}
                />
                <Stats
                    name={"Average Rating"}
                    stat={props.userStats.avgRating}

                />
                <Stats
                    name={"Books Read"}
                    stat={props.userStats.booksRead}
                />
            </div>
        </Carousel >
    );
}



export default StatsCarousel;


