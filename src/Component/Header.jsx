import React from "react";
import img1 from "../assets/images/docs_2020q4_48dp.png";
import img2 from "../assets/images/mehul2.jpg";


const Header = () => {
  return (
    <div className="container">
      <div className="flex-container">
        <div className="flex-container3">
          <img src={img1} style={{ height: "40px", width: "40px" }} />
          <div>
            <p className="doc-title">Untitled document</p>
            <div className="tabs">
              <p>File</p>
              <p>Edit</p>
              <p>View</p>
              <p>Insert</p>
              <p>Format</p>
              <p>Tools</p>
              <p>Extension</p>
              <p>Help</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex-container2">
            <div>
              <span class="material-symbols-outlined">chat</span>
            </div>
            <div>
              <span class="material-symbols-outlined">videocam</span>
            </div>
            <div  className="flex-container3 share"> 
              <span class="material-symbols-outlined size">lock</span> 
              <p >Share</p>
            </div>
            <div><img src={img2} className="rounded-image-profile"/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
