import React from 'react'
import Project from '../assets/Project.png'
import Notetaker from '../assets/Notetaker.png'
import PasswordGenerator from '../assets/PasswordGenerator.png'

function Portfolio() {
  return (
    <div>
      <div className="row justify-content-center">
                    <a href= "https://whispering-temple-78267.herokuapp.com" target="_blank" className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" >
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="img-fluid" src={Project} target="_blank" alt="cookbook app" />
                        </div>
                    </a>
                     <a href="https://enigmatic-lake-07931.herokuapp.com/" target="_blank" className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="img-fluid" src={Notetaker} target="_blank" alt="Note taking application" />
                        </div>
                    </a>
                    <a href="https://ivetteramos.github.io/JavaScriptPassword-/" target="_blank" className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="img-fluid" src={PasswordGenerator} alt="A link to a calendar app" />
                        </div>
                    </a>
                    {/* <a href="https://whispering-basin-00391.herokuapp.com/" target="_blank" className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div className="portfolio-item mx-auto">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="img-fluid" src={carRepairShop} />
                        </div>
                    </a>
                    <a href="https://bighamcyrus.github.io/SteamAPI/" target="_blank" className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className="portfolio-item mx-auto">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="img-fluid" src={APIPractice} alt="..." />
                        </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1AncCv8ss0kb2c7IbVff87k9XOzNXqVOb/view" target="_blank" className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img className="img-fluid" src={nodeJSScreenshot} alt=" code picture working node.js" />
                        </div>
                    </a> */} 
                </div>
    </div>
  )
}

export default Portfolio
