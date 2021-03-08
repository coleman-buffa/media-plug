import React from 'react';
import "./userbooks.css";

function UserBooks() {
    return (
<div className="container">
    <div className="row">
        <div className="col-xs-4 col-md-2"><img src="http://placehold.it/150x190" className="img-responsive book"/></div>
        <div className="shelf"></div>
        {/* <div className="col-xs-4 col-md-2"><img src="http://placehold.it/150x190" className="img-responsive book"/></div>
        <div className="col-xs-12 shelf"></div>
        <div className="col-xs-4 col-md-2"><img src="http://placehold.it/150x190" className="img-responsive book"/></div>
        <div className="col-xs-12 shelf hidden-md hidden-lg"></div>
        <div className="col-xs-4 col-md-2"><img src="http://placehold.it/150x190" className="img-responsive book"/></div>
        <div className="col-xs-12 shelf"></div> */}
    </div>
</div>
    );
}

export default UserBooks;

{/* <div className="shelf"></div> */}
