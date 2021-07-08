import React from 'react';
import ReactDOM from 'react-dom';
import details from './details.js'


// Search Result
function Display(props){
    return (
        <div>
            <div class="card">
            <div class="row no-gutters">
                <div class="col-6 imageCol">
                    <img src={props.image} className="mainimg"></img>
                </div>
                <div class="col-6">
                <div class="card-body">
                    <h4>{props.name}</h4>
                    <p>{props.address}</p>
                    <a href="rental.html" class="btn btn1" role="button">View More Details</a>
                    <a href="#" class="btn btn1 btn2" role="button">Add to Whislist</a>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}




// Navbar
function NavBar(){
    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
                <a class="navbar-brand" href="index.html">Home</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Post my advertisement </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Sign Up</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

function Footer1(){
    return(
        <div>
            <footer>
                <p>Copyright ⓒ 2021</p>
            </footer>
        </div>
    );
}

function createDetail(detail){
    return <Display key={detail.id} name={detail.name} address={detail.address} image={detail.image}></Display>
}

ReactDOM.render(
    details.map(createDetail)
    ,document.getElementById("cardDetails")
);


ReactDOM.render(
    <NavBar></NavBar>
    ,document.getElementById("navBar")
);

ReactDOM.render(
    <Footer1></Footer1>
    ,document.getElementById("footer")
);






