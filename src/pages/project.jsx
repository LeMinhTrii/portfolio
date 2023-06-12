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
                  <img
                    src="https://res.cloudinary.com/dsuxginpx/image/upload/v1686212918/user/azrg1j4xhwhwnvvufwpb.jpg"
                    alt=""
                  />
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
                  <img
                    src="https://res.cloudinary.com/dsuxginpx/image/upload/v1686212918/user/azrg1j4xhwhwnvvufwpb.jpg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <p className="name">Sunset</p>
                  <a href="https://coffeeapp-nine.vercel.app/">
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
                  <img
                    src="https://res.cloudinary.com/dsuxginpx/image/upload/v1686212918/user/azrg1j4xhwhwnvvufwpb.jpg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <p className="name">Wooder</p>
                  <a href="https://coffeeapp-nine.vercel.app/">
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
