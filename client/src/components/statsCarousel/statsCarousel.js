import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Stats from "../stats/stats";

function StatsCarousel(props) {

    function longestBook(props) {
        return (
            <div>
                <div>{props.userStats.longestBook[0]}</div>
                <div>Number of pages: {props.userStats.longestBook[1]}</div>
            </div>
        );
    }

    function shortestBook(props) {
        return (
            <div>
                <div>{props.userStats.shortestBook[0]}</div>
                <div>Number of pages: {props.userStats.shortestBook[1]}</div>
            </div>
        );
    }
    return (
        <Carousel autoPlay={false}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>

                <Stats
                    name={"Average Length"}
                    stat={props.userStats.avgLength}
                />
                <Stats
                    name={"Average Rating"}
                    stat={props.userStats.avgRating}
                />
                <Stats
                    name={"Books Read"}
                    stat={props.userStats.booksRead}
                />
                <Stats
                    name={"Genres Read"}
                    stat={props.userStats.booksRead}
                />
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Stats
                    name={"Longest Book"}
                    stat={longestBook(props)}
                />
                <Stats 
                name={"Pages Read"}
                stat={props.userStats.pagesRead}
                />
                <Stats 
                name={"Shortest Book"}
                stat={shortestBook(props)}
                />
            </div>
        </Carousel>
    );
}



export default StatsCarousel;


