import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Stats from "../stats/stats";

function StatsCarousel(props) {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
            {/* <div style={{display:"flex", justifyContent:"space-evenly"}}></div>
            <Stats
            userStats={props}
            /> */}
        </Carousel>
    )
}

function Item() {
    return (
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <Stats />
            <Stats />
            <Stats />
            <Stats />
        </div>
    )
}

export default StatsCarousel;


// function Card() {
// return (
// 	<div style={{ display: "flex", justifyContent: "space-evenly" }}>
// 		<Stats />
// 		<Stats />
// 		<Stats />
// 	</div>
// )
// }