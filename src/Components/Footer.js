import React from 'react'


function Footer() {
  return (
    <div>
      <footer className="footer text-center bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        
                        <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/ivetteramos"><i className="fab fa-fw fa-github"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="www.linkedin.com/in/jenny-ivette-ramos-b60420234"><i className="fab fa-fw fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
