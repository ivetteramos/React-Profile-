// import React from 'react'

// function Header() {
//   return (
//     <div>
//       This is my profile 
//     </div>
//   )
// }

// export default Header
import React from 'react'
const Header = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top">Jenny Ramos</a>
                
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About Me</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#Footer">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
export default Header
