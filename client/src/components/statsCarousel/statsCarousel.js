import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Button } from '@material-ui/core'
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

function Item(props) {
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