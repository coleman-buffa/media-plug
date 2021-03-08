import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Stats from "../stats/stats";

function StatsCarousel() {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        }
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item() {
    return (
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <Stats></Stats>
            <Stats></Stats>
            <Stats></Stats>
            <Stats>
            </Stats>
        </div>
    )
}

export default StatsCarousel;

// return (
// 	<Carousel>
// 		{
// 			userStats.map(stat => (
// 				<Card
// 					key={stat.id}
// 					id={stat.id}
// 					booksRead={stat.booksRead}
// 					avgLength={stat.avgLength}
// 					avgRating={stat.avgRating}
// 					shortestBook={stat.shortestBook.name}
// 					longestBook={stat.longestBook.name}
// 					genresRead={stat.genresRead}

// 				/>
// 			))}
// 	</Carousel>
// )
// }

// function Card() {
// return (
// 	<div style={{ display: "flex", justifyContent: "space-evenly" }}>
// 		<Stats />
// 		<Stats />
// 		<Stats />
// 	</div>
// )
// }