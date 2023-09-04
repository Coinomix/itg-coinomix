import React from "react";
import "./CardLatestNews.scss";
import { CardTags } from "../CardTags";
import favoriteIcon from "../../assets/images/favorite.svg";
import commentIcon from "../../assets/images/comment.svg";
import regroupIcon from "../../assets/images/regroup.svg";
import { Link } from "gatsby";

export const CardLatestNews = () => {
  return (
    <div className="card-latest-news">
      <div className="card-latest-news__content">
        <div className="card-latest-news__header">
          <div className="card-latest-news__author">
              <a href="#/" className="card-latest-news__author-link">by Chris Moore</a>
              <p className="card-latest-news__author-date">January 2, 2023</p>
              <p className="card-latest-news__author-date">9:00 AM GMT</p>
          </div>

          <div className="card-latest-news__tags">
            <a href="#bitcoin" className="card-latest-news__tagname"># Bitcoin</a>
            <a href="#beginners" className="card-latest-news__tagname"># Beginners</a>
          </div>
        </div>
        <div className="card-latest-news__body">
          <div className="card-latest-news__body-image">
            <Link to="/article">
              <img className="card-latest-news__image" src="https://s3-alpha-sig.figma.com/img/a71c/a942/b16b70fba3afc68be6a58b43276dbb2c?Expires=1694995200&Signature=UuRhjKVwZaAg4hKMWzGgDm3s1UrhAxLgamh32THZ8z3ld2VYq~MH9ZV9HOsu5Y~eHms175dr0qQfRRpKJE5CqNXKIQqkZ1Gnqs5OUwOF1KTpBtiQgg-k558TOLrCBTvpFuhlw8AVVZXgExuazd4qrsIlH1ZQz3d6N40HS-Tg-lM2bv0sagSCqyItX5Eusc3ZkrXKGw9Ff4siK9JFtJRr35WjXyxgMgPRis4H7TgvwvRnihooFmMW8a9lBO14aYZFDrLLdttEGCqloXvZOKqOigEuUR~iUmMJ70t6iz1pQVyY~eIojZSQtQBlfRTIzvQfIFMuO~3mkymarIOsMxY3xg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </Link>
          </div>
            <div className="card-latest-news__body-title">
              <h3>
                <Link to="/article" className="card-latest-news__title">
                  Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023
                </Link>
              </h3>
              <Link to="/article" className="card-latest-news__link" title="View more">View more</Link>
            </div>
        </div>
        <div className="card-latest-news__footer">
          <div className="card-latest-news__social">
            <div className="card-latest-news__social-content">
              {/* <img src={favoriteIcon} className="card-latest-news__icon"/> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z" stroke="#9D9D9D" stroke-width="2"/>
              </svg>
              27.7K Likes
            </div>
            <div className="card-latest-news__social-content">
              {/* <img src={commentIcon} className="card-latest-news__icon"/> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4.32698 6.63803L5.21799 7.09202L4.32698 6.63803ZM4.7682 20.2318L4.06109 19.5247H4.06109L4.7682 20.2318ZM18.362 16.673L18.816 17.564L18.816 17.564L18.362 16.673ZM19.673 15.362L20.564 15.816L20.564 15.816L19.673 15.362ZM19.673 6.63803L20.564 6.18404L20.564 6.18404L19.673 6.63803ZM18.362 5.32698L18.816 4.43597L18.816 4.43597L18.362 5.32698ZM5.63803 5.32698L6.09202 6.21799L5.63803 5.32698ZM7.70711 17.2929L7 16.5858L7.70711 17.2929ZM5 9.8C5 8.94342 5.00078 8.36113 5.03755 7.91104C5.07337 7.47262 5.1383 7.24842 5.21799 7.09202L3.43597 6.18404C3.18868 6.66937 3.09012 7.18608 3.04419 7.74817C2.99922 8.2986 3 8.97642 3 9.8H5ZM5 12V9.8H3V12H5ZM3 12V17H5V12H3ZM3 17V19.9136H5V17H3ZM3 19.9136C3 21.2054 4.56185 21.8524 5.4753 20.9389L4.06109 19.5247C4.40757 19.1782 5 19.4236 5 19.9136H3ZM5.4753 20.9389L8.41421 18L7 16.5858L4.06109 19.5247L5.4753 20.9389ZM15.2 16H8.41421V18H15.2V16ZM17.908 15.782C17.7516 15.8617 17.5274 15.9266 17.089 15.9624C16.6389 15.9992 16.0566 16 15.2 16V18C16.0236 18 16.7014 18.0008 17.2518 17.9558C17.8139 17.9099 18.3306 17.8113 18.816 17.564L17.908 15.782ZM18.782 14.908C18.5903 15.2843 18.2843 15.5903 17.908 15.782L18.816 17.564C19.5686 17.1805 20.1805 16.5686 20.564 15.816L18.782 14.908ZM19 12.2C19 13.0566 18.9992 13.6389 18.9624 14.089C18.9266 14.5274 18.8617 14.7516 18.782 14.908L20.564 15.816C20.8113 15.3306 20.9099 14.8139 20.9558 14.2518C21.0008 13.7014 21 13.0236 21 12.2H19ZM19 9.8V12.2H21V9.8H19ZM18.782 7.09202C18.8617 7.24842 18.9266 7.47262 18.9624 7.91104C18.9992 8.36113 19 8.94342 19 9.8H21C21 8.97642 21.0008 8.2986 20.9558 7.74817C20.9099 7.18608 20.8113 6.66937 20.564 6.18404L18.782 7.09202ZM17.908 6.21799C18.2843 6.40973 18.5903 6.71569 18.782 7.09202L20.564 6.18404C20.1805 5.43139 19.5686 4.81947 18.816 4.43597L17.908 6.21799ZM15.2 6C16.0566 6 16.6389 6.00078 17.089 6.03755C17.5274 6.07337 17.7516 6.1383 17.908 6.21799L18.816 4.43597C18.3306 4.18868 17.8139 4.09012 17.2518 4.04419C16.7014 3.99922 16.0236 4 15.2 4V6ZM8.8 6H15.2V4H8.8V6ZM6.09202 6.21799C6.24842 6.1383 6.47262 6.07337 6.91104 6.03755C7.36113 6.00078 7.94342 6 8.8 6V4C7.97642 4 7.2986 3.99922 6.74817 4.04419C6.18608 4.09012 5.66937 4.18868 5.18404 4.43597L6.09202 6.21799ZM5.21799 7.09202C5.40973 6.71569 5.71569 6.40973 6.09202 6.21799L5.18404 4.43597C4.43139 4.81947 3.81947 5.43139 3.43597 6.18404L5.21799 7.09202ZM8.41421 18V16C7.88378 16 7.37507 16.2107 7 16.5858L8.41421 18Z" fill="#9D9D9D"/>
                <path d="M8 9L16 9" stroke="#9D9D9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 13L13 13" stroke="#9D9D9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              148 Comments
            </div>
            <div className="card-latest-news__social-content">
              {/* <img src={regroupIcon} className="card-latest-news__icon"/> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_1513_3054)">
                  <path d="M16.6757 2.99995C16.6757 4.34619 15.5845 5.43755 14.2382 5.43755C12.892 5.43755 11.8008 4.34619 11.8008 2.99995C11.8008 1.65385 12.892 0.5625 14.2382 0.5625C15.5845 0.5625 16.6757 1.65385 16.6757 2.99995Z" fill="#9D9D9D"/>
                  <path d="M14.2382 6.00005C12.5837 6.00005 11.2383 4.6545 11.2383 2.99995C11.2383 1.34555 12.5837 0 14.2382 0C15.8928 0 17.2382 1.34555 17.2382 2.99995C17.2382 4.6545 15.8928 6.00005 14.2382 6.00005ZM14.2382 1.125C13.204 1.125 12.3633 1.96655 12.3633 2.99995C12.3633 4.03349 13.204 4.87505 14.2382 4.87505C15.2725 4.87505 16.1132 4.03349 16.1132 2.99995C16.1132 1.96655 15.2725 1.125 14.2382 1.125Z" fill="#9D9D9D"/>
                  <path d="M16.6757 15.0001C16.6757 16.3462 15.5845 17.4375 14.2382 17.4375C12.892 17.4375 11.8008 16.3462 11.8008 15.0001C11.8008 13.6539 12.892 12.5625 14.2382 12.5625C15.5845 12.5625 16.6757 13.6539 16.6757 15.0001Z" fill="#9D9D9D"/>
                  <path d="M14.2382 18C12.5837 18 11.2383 16.6545 11.2383 15.0001C11.2383 13.3456 12.5837 12 14.2382 12C15.8928 12 17.2382 13.3456 17.2382 15.0001C17.2382 16.6545 15.8928 18 14.2382 18ZM14.2382 13.125C13.204 13.125 12.3633 13.9666 12.3633 15.0001C12.3633 16.0335 13.204 16.875 14.2382 16.875C15.2725 16.875 16.1132 16.0335 16.1132 15.0001C16.1132 13.9666 15.2725 13.125 14.2382 13.125Z" fill="#9D9D9D"/>
                  <path d="M6.17583 8.99995C6.17583 10.3462 5.08447 11.4374 3.73824 11.4374C2.39214 11.4374 1.30078 10.3462 1.30078 8.99995C1.30078 7.65372 2.39214 6.5625 3.73824 6.5625C5.08447 6.5625 6.17583 7.65372 6.17583 8.99995Z" fill="#9D9D9D"/>
                  <path d="M3.73824 11.9999C2.08383 11.9999 0.738281 10.6545 0.738281 8.99995C0.738281 7.34541 2.08383 6 3.73824 6C5.39278 6 6.73833 7.34541 6.73833 8.99995C6.73833 10.6545 5.39278 11.9999 3.73824 11.9999ZM3.73824 7.125C2.70401 7.125 1.86328 7.96642 1.86328 8.99995C1.86328 10.0335 2.70401 10.8749 3.73824 10.8749C4.7726 10.8749 5.61333 10.0335 5.61333 8.99995C5.61333 7.96642 4.7726 7.125 3.73824 7.125Z" fill="#9D9D9D"/>
                  <path d="M5.50905 8.64033C5.24799 8.64033 4.99448 8.50451 4.85646 8.26157C4.6517 7.90232 4.77777 7.44405 5.13702 7.23847L12.0962 3.27103C12.4554 3.06477 12.9137 3.19083 13.1193 3.55146C13.324 3.91071 13.198 4.36898 12.8387 4.57456L5.87943 8.542C5.76242 8.60874 5.63498 8.64033 5.50905 8.64033Z" fill="#9D9D9D"/>
                  <path d="M12.4677 14.8277C12.3416 14.8277 12.2142 14.7961 12.0972 14.7294L5.1379 10.7619C4.77864 10.5572 4.65271 10.0989 4.85747 9.73881C5.06141 9.37887 5.52036 9.25212 5.88044 9.45839L12.8397 13.4258C13.199 13.6306 13.3249 14.0889 13.1202 14.4489C12.9815 14.6919 12.7279 14.8277 12.4677 14.8277Z" fill="#9D9D9D"/>
                </g>
              </svg>
              134 Share
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}