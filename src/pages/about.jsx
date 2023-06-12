import React from "react";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <main className="about">
        <div className="container">
          <div className="about_content">
            <div className="about_content-img">
              <div className="thumnail">
                <img
                  src="https://res.cloudinary.com/dsuxginpx/image/upload/v1686565775/user/345843315_550568770598250_7621836964698073338_n_f62jdv.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="about_content-box">
              <div className="infor">
                <p className="name">Lê Minh Trí</p>
                <div className="contact">
                  <div className="item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                    </svg>
                    <span>0333844433</span>
                  </div>
                  <div className="item">
                    <Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                      </svg>
                    </Link>
                    <span>leminhtri886@gmail.com</span>
                  </div>
                  <div className="item">
                    <Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                      </svg>
                    </Link>
                    <span>https://www.facebook.com/LMT0953/</span>
                  </div>
                  <div className="item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 384 512"
                    >
                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>
                    <span>
                      30/1 Đường số 11, Khu phố 4, Phường An Phú, Thành Phố Thủ
                      Đức, TP.HCM
                    </span>
                  </div>
                </div>
                <div className="skill">
                  <h2 className="title">Skill</h2>
                  <div className="listskill">
                    <p className="item">html</p>
                    <p className="item">css</p>
                    <p className="item">scss</p>
                    <p className="item">bootstrap</p>
                    <p className="item">javascript</p>
                    <p className="item">reactjs</p>
                    <p className="item">php</p>
                    <p className="item">my sql</p>
                    <p className="item">photoshop</p>
                    <p className="item">figma</p>
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
