import React from "react"
import { graphql } from "gatsby"
import horaceCapture from './../assets/Horace-capture.jpg'

export default ({data}) => (
    <div className="app project-page project-horace">

        <div className="project-presentation">
            <div className="left-side">
                <div className="parralelograme"></div>
            </div>
            <div className="right-side">
                <h1>{data.site.siteMetadata.project.horace.title}</h1>
                <div>
                    <h3>{data.site.siteMetadata.project.horace.type}</h3>
                    <h3>{data.site.siteMetadata.project.horace.year}</h3>
                </div>
                <div className="text-concept">
                    <h5>Le concept: </h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec magna id metus fringilla
                        gravida. Ut tincidunt urna ante, nec sagittis ante commodo vitae. Nulla sit amet ullamcorper
                        ipsum, sed aliquet ante.
                        <br/><br/>
                        Duis sed vehicula diam. Nunc nec porta tortor. Vivamus dignissim, eros et tristique rhoncus,
                        metus ipsum ullamcorper igula, quis interdum neque enim quis purus. Praesent volutpat a
                        lorem vel viverra. Praesent pharetra varius nunc non blandit. Nulla facilisi. In hac
                        habitasse platea dictumst. Vivamus mollis ultrices elit, et hendrerit nibh vehicula
                        vehicula.
                    </p>
                </div>
            </div>
        </div>

        <div className="citation">
            " <b><i>Lorem ipsum dolor</i></b> sit amet, consectetur adipiscing elit. Aliquam nec magna <b><i>id
            metus</i></b> fringilla gravida. "
        </div>

        <div className="project-explanation">
            <div className="container-explanation">
                <div className="div-text">
                    <h5>Le site: </h5>
                    <p>
                        Duis sed vehicula diam. Nunc nec porta tortor. Vivamus dignissim, eros et tristique rhoncus,
                        metus ipsum ullamcorper igula, quis interdum neque enim quis purus. Praesent volutpat a lorem
                        vel viverra. Praesent pharetra varius nunc non blandit. Nulla facilisi. In hac habitasse platea
                        dictumst. Vivamus mollis ultrices elit, et hendrerit nibh vehicula vehicula.
                    </p>
                </div>
                <div className="div-img">
                    <img src={horaceCapture} alt=""/>
                </div>
            </div>
        </div>

    </div>
)

export const query = graphql`
  query {
  site {
    siteMetadata {
      project {
        horace {
            title,
            type,
            year
        }
      }
    }      
  }
  }
`;