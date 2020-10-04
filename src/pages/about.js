import React from "react"
import styles from "./about.module.css"
import Container from "../components/container"
import Layout from "../components/layout";
import { graphql } from "gatsby"
import horaceCapture from './../assets/Horace-capture.jpg'

export default ({data}) => (

    <div className="app about-page">

        <div className="about-name">
            <h3><b>Léo</b></h3>
            <h3><b>Gourvès</b></h3>
        </div>

        <h1>développeur web</h1>

        <div className="bloc-text">
            <h5> Hello! </h5>
            <p>
                My name is Léo Gourvès, a french web developer based in Paris, France
            </p>
            <p>
                Duis sed vehicula diam. Nunc nec porta tortor. Vivamus dignissim, eros et tristique rhoncus, metus ipsum ullamcorper igula, quis interdum neque enim quis purus. Praesent volutpat a lorem vel viverra. Praesent pharetra varius nunc non blandit. Nulla facilisi. In hac habitasse platea dictumst. Vivamus mollis ultrices elit, et hendrerit nibh vehicula vehicula.
            </p>
        </div>

    </div>

)