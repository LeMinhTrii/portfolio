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
                      src="https://res.cloudinary.com/dsuxginpx/image/upload/v1686751433/static/z4432575084028_fe8edcee513f9862659ddacebc36e0f0_ykw5jr.jpg"
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
                  <a href="https://sunset-theta.vercel.app/">
                    <img
                      src="https://res.cloudinary.com/dsuxginpx/image/upload/v1686751433/static/z4432574215249_719fa409984ec7043234681530c61311_oqga7r.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="content">
                  <p className="name">Sunset</p>
                  <a href="https://sunset-theta.vercel.app/">
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
                  <a href="https://wooder-zeta.vercel.app/">
                    <img
                      src="https://res.cloudinary.com/dsuxginpx/image/upload/v1686751433/static/z4432573865847_1e338f62f8ebb907f2a3dcd322effd5f_gdenr4.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="content">
                  <p className="name">Wooder</p>
                  <a href="https://wooder-zeta.vercel.app/">
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
