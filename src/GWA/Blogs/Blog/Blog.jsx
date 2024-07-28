import React from "react";
import AddIcon from "../../assets/plus.png";
import RelatedPost from "../widgets/RelatedPost";
import Tags from "../widgets/Tags";
import MostReads from "../widgets/MostReads";
import Categories from "../widgets/Categories";

const Blog = () => {
  return (
    <div className="blogs-cnt">
      <div className="bloglist-cover">
        <div className="blog-cnt">
          <div className="blog-post-cnt post-details-cnt">
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            <div className="blog-status-info">
              <p className="blue-text ">Read more in 8 Minutes</p>
              <div className="blog-status">
              <div className="date-info-cnt">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 4H3C1.89543 4 1 4.89543 1 6V17C1 18.1046 1.89543 19 3 19H17C18.1046 19 19 18.1046 19 17V6C19 4.89543 18.1046 4 17 4Z"
                    stroke="#333448"
                    stroke-opacity="0.5"
                  />
                  <path
                    d="M1 8C1 6.114 1 5.172 1.586 4.586C2.172 4 3.114 4 5 4H15C16.886 4 17.828 4 18.414 4.586C19 5.172 19 6.114 19 8H1Z"
                    fill="#333448"
                    fill-opacity="0.5"
                  />
                  <path
                    d="M5 1V4M15 1V4"
                    stroke="#333448"
                    stroke-opacity="0.5"
                    stroke-linecap="round"
                  />
                </svg>
                <p className="blue-text">05 Sep 2022</p>
              </div>
              <div className="date-info-cnt">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5.8C2 4.943 2 4.361 2.038 3.911C2.073 3.473 2.138 3.248 2.218 3.092L0.436 2.184C0.189 2.669 0.0899999 3.186 0.0439999 3.748C-8.9407e-08 4.298 0 4.976 0 5.8H2ZM2 8V5.8H0V8H2ZM0 8V13H2V8H0ZM0 13V15.914H2V13H0ZM0 15.914C0 17.205 1.562 17.852 2.475 16.939L1.061 15.525C1.13792 15.448 1.23594 15.3956 1.34265 15.3744C1.44936 15.3532 1.55998 15.364 1.6605 15.4057C1.76102 15.4473 1.84693 15.5179 1.90737 15.6083C1.9678 15.6988 2.00004 15.8052 2 15.914H0ZM2.475 16.939L5.415 14L4 12.586L1.061 15.525L2.475 16.939ZM12.2 12H5.414V14H12.2V12ZM14.908 11.782C14.752 11.862 14.528 11.927 14.089 11.962C13.639 11.999 13.057 12 12.2 12V14C13.024 14 13.701 14 14.252 13.956C14.814 13.91 15.331 13.811 15.816 13.564L14.908 11.782ZM15.782 10.908C15.5903 11.2843 15.2843 11.5903 14.908 11.782L15.816 13.564C16.5686 13.1805 17.1805 12.5686 17.564 11.816L15.782 10.908ZM16 8.2C16 9.057 16 9.639 15.962 10.089C15.927 10.527 15.862 10.752 15.782 10.908L17.564 11.816C17.811 11.331 17.91 10.814 17.956 10.252C18.001 9.702 18 9.024 18 8.2H16ZM16 5.8V8.2H18V5.8H16ZM15.782 3.092C15.862 3.248 15.927 3.472 15.962 3.911C16 4.361 16 4.943 16 5.8H18C18 4.976 18 4.299 17.956 3.748C17.91 3.186 17.811 2.669 17.564 2.184L15.782 3.092ZM14.908 2.218C15.2843 2.40974 15.5903 2.71569 15.782 3.092L17.564 2.184C17.1805 1.43139 16.5686 0.819488 15.816 0.436L14.908 2.218ZM12.2 2C13.057 2 13.639 2 14.089 2.038C14.527 2.073 14.752 2.138 14.908 2.218L15.816 0.436C15.331 0.189 14.814 0.0900002 14.252 0.0440001C13.702 1.49012e-07 13.024 0 12.2 0V2ZM5.8 2H12.2V0H5.8V2ZM3.092 2.218C3.248 2.138 3.472 2.073 3.911 2.038C4.361 2 4.943 2 5.8 2V0C4.976 0 4.299 1.49012e-07 3.748 0.0440001C3.186 0.0900002 2.669 0.189 2.184 0.436L3.092 2.218ZM2.218 3.092C2.40974 2.71569 2.71569 2.40974 3.092 2.218L2.184 0.436C1.43139 0.819488 0.819488 1.43139 0.436 2.184L2.218 3.092ZM5.414 14V12C4.88361 12.0001 4.37499 12.2109 4 12.586L5.414 14Z"
                    fill="#333448"
                    fill-opacity="0.5"
                  />
                  <path
                    d="M5 5H13M5 9H10"
                    stroke="#333448"
                    stroke-opacity="0.5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="blue-text">58</p>
              </div>
              <div className="date-info-cnt">
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.544 7.045C20.848 7.471 21 7.685 21 8C21 8.316 20.848 8.529 20.544 8.955C19.178 10.871 15.689 15 11 15C6.31 15 2.822 10.87 1.456 8.955C1.152 8.529 1 8.315 1 8C1 7.684 1.152 7.471 1.456 7.045C2.822 5.129 6.311 1 11 1C15.69 1 19.178 5.13 20.544 7.045Z"
                    stroke="#333448"
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8Z"
                    stroke="#333448"
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="blue-text">2.8k</p>
              </div>
              </div>
            </div>
            <img
              src="https://s3-alpha-sig.figma.com/img/a090/4ed3/75794b707ee77d9722968ddc31d203bd?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HaCdcKMKsgQv0ZniCZsvbt-RwhCXFrc8Qqso-TrXkVHSFKEMEsLraw5GGUMEfJsQozkI42YWBwd2b8iGnlO6jcBUNpQmF6lDbT2oSB~yXKdCpWqEB2nZeJtFp6yPYX~WjK5h37-8XdkCvnIS5CVGEsugC~Zbx-pzMnQHwAC730HhwBGVwZlAT1YRLuRmBeOKGT--oYhSVrjhbAHE699GYFHd2a-pCLimIThoI~8y17D3hV5pAPGF1qyydGn3mBCyE0ZOSb5Wj261KsXk9oArb7FzdnXCzgVbkfIJpkkS14yFO64D~iqtpUB1mOf8r92gJr~PMCWhsquWTlM9lIQZhg__"
              alt="blog-img"
              className="blog-image"
            />
            <p className="blog-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="widget-cnt">
        <RelatedPost />
        <Tags />
        <MostReads />
        <Categories />
      </div>
    </div>
  );
};

export default Blog;
