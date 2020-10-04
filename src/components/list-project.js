import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import karryCapture from './../assets/CaptureLoginKarry.png'
import horaceCapture from './../assets/Horace-capture.jpg'
import github from './../assets/github.svg'
import vue from './../assets/vuejs.svg'
import javascript from './../assets/javascript.svg'


const LinkProject = props => (
    <Link to={props.to} className={props.class}>
        <div className="box-project">
            <div className="shadow">
            </div>
            <div className="project">
                <div className="first-container">
                    <div className="block-title">
                        <div>
                            <h2>{props.title}</h2>
                            <span className="type-project">{props.type}</span>
                        </div>
                        <span className="line-title"></span>
                    </div>


                    <div className="block-techno">
                        <img src={props.techno1} alt="" />
                        <img src={props.techno2} alt="" />
                        <img src={props.techno3} alt="" />
                    </div>
                </div>
                <div className="second-container">
                    <div className="background-project">
                        <img src={props.img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </Link>
);

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
      query {
        site {
            siteMetadata {
              project {
                karry {
                    title,
                    type,
                    year
                },
                horace {
                    title,
                    type,
                    year
                }
              }
            }
        }
      }
    `
    );
    return (
        <div className="list-project">
            <LinkProject class="project1 project-left-right" to="/karry" title="Karry" type="Application" img={karryCapture}
                         techno1={vue} techno2={javascript} techno3={github}/>
            <LinkProject class="project2 project-bottom-top" to="/horace" title="Horace" type="Site Web" img={horaceCapture}
                         techno1={vue} techno2={javascript} techno3={github}/>
            <LinkProject class="project3 project-bottom-top" to="/bodsprod" title="BodsProd" type="Site Web" img={horaceCapture}
                         techno1={vue} techno2={javascript} techno3={github}/>
            {children}
        </div>
    )
}