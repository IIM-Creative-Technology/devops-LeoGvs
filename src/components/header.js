import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import $ from 'jquery' // important: case sensitive.

const ListLink = props => (
    <Link to={props.to}>{props.children}</Link>
);

var didScroll;// on scroll, let the interval function know the user has scrolled
let oldScroll = 0;

$(window).scroll(function(event){
    oldScroll = $(window).scrollTop();
    didScroll = true;
});// run hasScrolled() and reset didScroll status
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);function hasScrolled() {
    var lastScrollTop = 0;
    var delta = 50;
    var navbarHeight = $("#nav").outerHeight();
    var st = $(window).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta)
    {
        return;
    }
    console.log(oldScroll);
    console.log(st);
    if (st <= oldScroll){  // Scroll Down
        $("#nav").removeClass("nav-down").addClass("nav-up");
    } else {  // Scroll Up
        $("#nav").removeClass("nav-up").addClass("nav-down");
    }
    lastScrollTop = st;
}

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
    );
    return (
            <div id="nav">
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
                {children}
            </div>
    )
}