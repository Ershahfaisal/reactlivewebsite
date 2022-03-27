import { Link } from "react-router-dom";
import react from 'react'
export default function Navbar(){
    return(
        <div>
{/*              <!-- Nav Bar Start -->
 */}            <div class="nav-bar">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                        <Link to="#" class="navbar-brand">MENU</Link>
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav mr-auto">
                                <Link to="/" class="nav-item nav-link">Home</Link>
                                <Link to="/About" class="nav-item nav-link">About</Link>
                                <Link to="/Service" class="nav-item nav-link">Service</Link>
                                <Link to="/Team" class="nav-item nav-link">Team</Link>
                                <Link to="/Portfolio" class="nav-item nav-link">Project</Link>
                                <div class="nav-item dropdown">
                                    <Link to="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</Link>
                                    <div class="dropdown-menu">
                                        <Link to="/Blog" class="dropdown-item">Blog Page</Link>
                                        <Link to="/Single" class="dropdown-item">Single Page</Link>
                                    </div>
                                </div>
                                <Link to="/Contact" class="nav-item nav-link">Contact</Link>
                            </div>
                            <div class="ml-auto">
                                <Link class="btn" to="https://htmlcodex.com/construction-company-html-template">Download Pro Version</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
{/*             <!-- Nav Bar End -->
 */}
        </div>
    )
}