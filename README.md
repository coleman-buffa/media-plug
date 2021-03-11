# Media Plug

![License](https://img.shields.io/badge/license-MIT-181717?style=for-the-badge) 

## Table of Contents
||||
|:-:|:-:|:-:|
|[Table Contents](#table-of-contents)|[Deployed Link](#deployed-link)|[Technologies Used](#technologies-used)
|[Description](#description)|[Work Involved](#work-involved)|[Code Snippet](#code-snippet)
|[License](#license)|[Authors](#authors)|[Acknowledgments](#acknowledgments)

---

## Deployed Link
[Deployed Link](https://media-plug.herokuapp.com/)

## Site Gif
![Site](./readme/demo.gif)

## Technologies Used
|||||
|:-:|:-:|:-:|:-:|
|React		|Auth0			|Material-UI	|Google Books API
|HTML/CSS	|Javascript	|Animate.css	|Github
|Heroku		|Node				|Nodemon			|Concurrently
|MySQL		|Sequelize	|Express			|Axios

---

## Description
A MERN-stack application that allows users to connect based off of books and reading challenges. Users can login, create an account, add books to their shelf, create challenges to focus on, as well as view what other users in the community are reading and challenging themselves with

## Work Involved
For this application, we used React, Material-UI, and Animate.css  to develop and style the frontend then we used mySQL, Sequelize, express for the backend. We used Google Books API to populate the search books feature and Auth0 for login functionality.

---

## Code Snippet
Because our site requires login, we do not want unauthorized users to be able to access specific pages. To protect these routes, we utilized the `ProtectedRoute` component of Auth0 by importing it in App.js and wrapping the desired routes in the `ProtectedRoute` component.

```javascript
import ProtectedRoute from "./components/protectedroute/protectedroute";
...
<Route exact path="/login" component={Login} />
<ProtectedRoute path="/profile" component={Profile} />
<ProtectedRoute path="/explore" component={Explore} />
<ProtectedRoute path="/challenges" component={Challenges} />
<ProtectedRoute path="/search" component={Search} />
```

Because the Google Books API doesn't always have consistent data, and our database required specific pieces of information we had to make sure that we passed along the data to our post request in a suitable package. For instance if the description is not present in the API call, we then pass along a string of "Description not found" to make sure that there is atleast something in the database and it doesn't break when we try to call on an field that doesn't have any data. We did this for all the data fields that we passed to the call.

```javascript
API.saveBook({
	...
	book_desc: tempArr[0].volumeInfo.description ? tempArr[0].volumeInfo.description : "Description not found",
	...
})
```
---

## License
This project is covered under MIT.

## Authors

**Jessny Joseph** 

[Github](https://github.com/jessnyj) | [LinkedIn](https://www.linkedin.com/in/jessny-joseph-361515201)

**Muhammad Khalid**

[Github](https://github.com/akhalid88) | [LinkedIn](https://www.linkedin.com/in/abdullahkhalid/)

**Coleman Buffa** 

[Github](https://github.com/coleman-buffa) | [LinkedIn](https://www.linkedin.com/in/coleman-buffa/)

## Acknowledgments
Many thanks to the mentors and friends who are a continuous source of project inspiration and learning opportunities. 
