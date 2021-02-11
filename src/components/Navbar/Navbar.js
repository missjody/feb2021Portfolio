// Update with Materialize, add links to different pages
import React, { useEffect, useRef } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const Nav = () => {


  let slide = useRef(null);

  useEffect(() => {
    let sidenav = slide;
    M.Sidenav.init(sidenav, {});
  })

  const handleClick = () => {
    let sidenav = slide;
    var instance = M.Sidenav.getInstance(sidenav);
    instance.close();
  }

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          {/* changed to span from a with an href="#" */}
          <a href="#" data-target="slide-out" className="js-trigger sidenav-trigger show-on-med"><i className="material-icons hamburger">menu</i></a>
          <ul className="right hide-on-med-and-down active">
            <li><a href="/home"><h5> home</h5></a></li>
            <li><a href="/projects"><h5>projects</h5></a></li>
            <li><a href="/contact"><h5> reach out</h5></a></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav right" ref={el => slide = el} id="slide-out">
        <li><a href="/home" onClick={handleClick}><h5> home</h5></a></li>
        <li><a href="/projects" onClick={handleClick}><h5>projects</h5></a></li>
        <li><a href="/contact" onClick={handleClick}><h5> reach out</h5></a></li>
      </ul>
    </div>
  );

}

export default Nav;


