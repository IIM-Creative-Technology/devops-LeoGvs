import React from "react"
import Header from "../components/header"
import ListProject from "../components/list-project"
import Footer from "../components/footer"


export default () => (
    <div id="app">
        <div id="home" className="section">
            <h1>LÉO</h1>
            <h2 className="name">GOURVÈS</h2>
            <div className="block-text">
                <h2>Portfolio</h2>
                <h2 className="spé">Développeur front-end</h2>
            </div>
        </div>
        <Header headerText="LéoGVS" />
        <ListProject/>
        <Footer/>
    </div>
)
