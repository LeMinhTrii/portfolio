import React from "react";

export default function Project() {
  return (
    <>
      <main className="project">
        <div className="container">
          <div className="project_content">
            <div className="project_content-box">
              <div className="item">
                <div className="thumnail">
                  <a href="https://coffeeapp-nine.vercel.app/">
                    <img
                      src="https://res.cloudinary.com/dsuxginpx/image/upload/v1686575829/static/z4426624827065_deec170aa1939b9c32ea4c670d3fa278_spihqd.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="content">
                  <p className="name">Coffee App</p>
                  <a href="https://coffeeapp-nine.vercel.app/">
                    Link Project:
                    <span>https://coffeeapp-nine.vercel.app/</span>
                  </a>
                  <div className="technology">
                    <h1 className="title">
                      Front-end: ReactJS, Styled-components, Ant Design
                    </h1>
                    <h1 className="title">Back-end: Nodejs, ExpressJS</h1>
                    <h1 className="title">Dabatase: Clever Cloud, Mysql</h1>
                    <h1 className="title">Photo: Cloudinary</h1>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="thumnail">
                  <a href="https://sunset-steel.vercel.app/">
                    <img
                      src="https://res.cloudinary.com/dsuxginpx/image/upload/v1686575828/static/z4426626168969_01fc3adb729587fcd506132f5e1e7a15_j8cyhu.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="content">
                  <p className="name">Sunset</p>
                  <a href="https://sunset-steel.vercel.app/">
                    Link Project:
                    <span>https://coffeeapp-nine.vercel.app/</span>
                  </a>
                  <div className="technology">
                    <h1 className="title">Front-end: Html, Scss, Javascript</h1>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="thumnail">
                  <a href="https://wooder-eight.vercel.app/">
                    <img
                      src="https://res.cloudinary.com/dsuxginpx/image/upload/v1686575828/static/z4426627255409_c624dc29a32f6717e7bd75de7a32c1e2_gnyofe.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="content">
                  <p className="name">Wooder</p>
                  <a href="https://wooder-eight.vercel.app/">
                    Link Project:
                    <span>https://coffeeapp-nine.vercel.app/</span>
                  </a>
                  <div className="technology">
                    <h1 className="title">Front-end: Html, Scss, Javascript</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
