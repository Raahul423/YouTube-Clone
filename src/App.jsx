import { faFreeCodeCamp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBell, faCirclePlay, faClock, faHouse, faLightbulb, faNewspaper, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faAngleDown, faAngleRight, faBolt, faCartShopping, faClapperboard, faClockRotateLeft, faEllipsisVertical, faGamepad, faLayerGroup, faMagnifyingGlass, faMicrophone, faMusic, faNotesMedical, faPodcast, faSliders, faTowerBroadcast, faTrophy, faVestPatches, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Images } from './assets/files'

const App = () => {
  return (
    <div>
       <section className='App'>
      <section className="section-bar">
        <div className="menu">
          <img src={Images.menu} alt='Error'></img>
          <FontAwesomeIcon icon={faYoutube} className='text-danger' />
          <h1>YouTube<sup>IN</sup></h1>
        </div>
        <div className='search'>
          <div className='search-2'>
            <input type='text' placeholder='Search' />
          </div>
          <div className="searchicon">
            <FontAwesomeIcon icon={faMagnifyingGlass} className='mag' />
          </div>
          <div><FontAwesomeIcon icon={faMicrophone} className='mic' /></div>
        </div>
        <div className='obj-1'>
          <FontAwesomeIcon icon={faVideo} />
          <FontAwesomeIcon icon={faBell} className='bell'/>
          <img src='https://yt3.ggpht.com/yti/ANjgQV_Xta7eAXOn97tLrNPbRf20R3ZiJPNFgiKXXdoIxKveh5M=s88-c-k-c0x00ffffff-no-rj' alt='Error' />

        </div>
      </section>

      <div className='write-section'>


      {/* just a testing change */}

        {/* home section */}

        <div className='home'>
          <FontAwesomeIcon icon={faHouse} className='icon-home' />
          <h1>Home</h1>
        </div>
        <div className='value'>

          {/* testing change */}
          <FontAwesomeIcon icon={faBolt} className='icon-home' />
          <h1>Shorts</h1>
        </div>
        <div className='value'>
          <FontAwesomeIcon icon={faLayerGroup} className='icon-home' />
          <h1>Suscriptions</h1>
        </div>
        <hr />

        {/* You section  */}

        <div className='value'>
          <h3>YOU</h3>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div className='value'>
          <FontAwesomeIcon icon={faNotesMedical} />
          <h1>Your Channel</h1>
        </div>
        <div className='value'>
          <FontAwesomeIcon icon={faClockRotateLeft} className='icon-home' />
          <h1>History</h1>
        </div>
        <div className='value'>
          <FontAwesomeIcon icon={faSliders} className='icon-home' />
          <h1>Playlists</h1>
        </div>
        <div className='value'>
          <FontAwesomeIcon icon={faCirclePlay} className='icon-home' />
          <h1>Your videos</h1>
        </div>
        <div className='value'>
          <FontAwesomeIcon icon={faClock} className='icon-home' />
          <h1>Watch later</h1>
        </div>
        <div className='value'>
          <FontAwesomeIcon icon={faThumbsUp} className='icon-home' />
          <h1>Liked videos</h1>
        </div><hr />

        {/* Suscriptions Section */}

        <div className='value'>
          <h2>Subscriptions</h2>
        </div>

        <div className='value-2'>
          <div className='subvalue-2'>
          <img src='https://yt3.googleusercontent.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s160-c-k-c0x00ffffff-no-rj' alt='Error' />
          <h1>Mr Beast</h1>
          </div>
          <div>
          <FontAwesomeIcon icon={faTowerBroadcast} style={{ color: "red"}} />
          </div>
          
        </div>

        <div className='value-2'>
          <div className='subvalue-2'>
          <img src='https://yt3.googleusercontent.com/Qak2Unp_tDxiEMmSwOj8oSUZLMytk7fcWSZA5UL2eWaxBOgUCnyvEQorbcwnVQderfZQLrko=s160-c-k-c0x00ffffff-no-rj' alt='Error' />
          <h1>Coding Ninja</h1>
          </div>
          <div>
          <FontAwesomeIcon icon={faTowerBroadcast} style={{ color: "red"}} />
          </div>
          
        </div>

        <div className='value-2'>
          <div className='subvalue-2'>
          <img src='https://yt3.googleusercontent.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s160-c-k-c0x00ffffff-no-rj' alt='Error' />
          <h1>T-Series</h1>
          </div>

          <div>
          <FontAwesomeIcon icon={faTowerBroadcast} style={{ color: "red"}} />
          </div>
          
        </div>

        <div className='value-2'>
          <div className='subvalue-2'>
          <img src='https://yt3.ggpht.com/00yIYVKjmFvR7sFZXmP5aMq1u0P7ZcLfnDW27A7zRD1hTqcWLwYn0-o_5rGkK2eKfCf43ueE7Q=s176-c-k-c0x00ffffff-no-rj-mo' alt='Error' />
          <h1>Apna College</h1>
          </div>
          
          <div>
          <FontAwesomeIcon icon={faTowerBroadcast} style={{ color: "red"}} />
          </div>
          
        </div>

        <div className='value-2'>
          <div className='subvalue-2'>
          <img src='https://yt3.googleusercontent.com/OtB--dcR_oNUZUaUsuyk2ShT5nFYjEcj9Yxx50-Nner03vXKt4IWXtP--JrnSGQbwRSHYuVb38g=s160-c-k-c0x00ffffff-no-rj' alt='Error' />
          <h1>Edureka!</h1>
          </div>
          <div>
          <FontAwesomeIcon icon={faTowerBroadcast} style={{ color: "red"}} />
          </div>
          
        </div>

        <div className='value-2'>
          <div className='subvalue-2'>
          <img src='https://yt3.ggpht.com/MjTwbzf6VGj6tS22UscXux2-l8m_Png8AUwaDpCJW8wqRAPow2OLYz-sF6hM6VMVvWahSDr9oQ=s176-c-k-c0x00ffffff-no-rj-mo' alt='Error' />
          <h1>iPanda</h1>
          </div>
         
        </div>

        <div className='value-2'>
          <div className='subvalue-2'>
          <img src='https://yt3.googleusercontent.com/J_nSQm3JaXmq_7oxk3KkA-QTUleozG6w34ulYW4lYJ3QOCiVPNxOXQYxLd92rm_m3qf8GYOxT6c=s160-c-k-c0x00ffffff-no-rj' alt='Error' />
          <h1>Coding2GO</h1>
          </div>
          
        </div>

        <div className='value'>
          <FontAwesomeIcon icon={faAngleDown} />
          <h1>Show more</h1>
        </div><hr />

        {/* Explore section */}

        <div className='value'>
          <h2>Explore</h2>
        </div>

        <div className='value'>
          <FontAwesomeIcon icon={faFreeCodeCamp} className='icon-home' />
          <h1>Trending</h1>
        </div>

        <div className='value'>
          <FontAwesomeIcon icon={faCartShopping} className='icon-home' />
          <h1>Shopping</h1>
        </div>

        <div className='value'>
          <FontAwesomeIcon icon={faMusic} className='icon-home' />
          <h1>Music</h1>
        </div>

        <div className='value'>
          <FontAwesomeIcon icon={faClapperboard} className='icon-home' />
          <h1>Movies</h1>
        </div>

        <div className='value'>
          <FontAwesomeIcon icon={faTowerBroadcast} className='icon-home' />
          <h1>Live</h1>
        </div>

        <div className='value'>
          <FontAwesomeIcon icon={faGamepad} className='icon-home' />
          <h1>Gaming</h1>
        </div>

        <div className='value'>
          <FontAwesomeIcon icon={faNewspaper} className='icon-home' />
          <h1>News</h1>
        </div>

        <div className='value'>
          <FontAwesomeIcon icon={faTrophy} className='icon-home' />
          <h1>Sports</h1>
        </div>

        <div className='value'>
          <FontAwesomeIcon icon={faLightbulb} className='icon-home' />
          <h1>Courses</h1>
        </div>

        <div className='value'>
          <FontAwesomeIcon icon={faVestPatches} className='icon-home' />
          <h1>Fastion & Beauty</h1>
        </div>

        <div className='value'>
          <FontAwesomeIcon icon={faPodcast} className='icon-home' />
          <h1>Podcasts</h1>
        </div><hr />

        <div className='value'>
          <h2>More from YouTube</h2>
        </div>

        <div className='value'>
          <img src={Images.icon1} className='icon1 ic-1'></img>
          <h1>YouTube Premium</h1>
        </div>

        <div className='value'>
          <img src={Images.icon2} className='icon1 ic-2'></img>
          <h1>YouTube Studio</h1>
        </div>

        <div className='value'>
          <img src={Images.icon3} className='icon1 ic-3'></img>
          <h1>YouTube Music</h1>
        </div>

        <div className='value value'>
          <img src={Images.icon4} className='icon1 ic-3'></img>
          <h1>YouTube Kids</h1>
        </div><hr/>

        <div className='value3 value'>
          <img src={Images.icon5} className='icon1 ic-3'></img>
          <h1>Settings</h1>
        </div>

        <div className='value3 value'>
          <img src={Images.icon6} className='icon1 ic-3'></img>
          <h1>Report history</h1>
        </div>

        <div className='value3 value'>
          <img src={Images.icon7} className='icon1 ic-3'></img>
          <h1>Help</h1>
        </div>

        <div className='value3 value'>
          <img src={Images.icon8} className='icon1 ic-3'></img>
          <h1>Send Feedback</h1>
        </div><hr/>

        <div className='value-last'>
          <p id='para1'>About Press Copyright Contact Us Creators Advertise Developers</p>

          <p id='para2'>
            Terms Privacy Policy & Safety How YouTube Works Test New Features
          </p>

          <footer>
          © 2024 Google LLC
          </footer>
        </div>



        
      </div>


      {/* contant-section */}


      <div className='contant-section'>
        <div className='contant-2' >


          <nav className='items 1'>
            All
          </nav>
          <nav className='items 2'>
            Music
          </nav>
          <nav className='items 3'>
            Gaming
          </nav>
          <nav className='items 4'>
            Yo Yo Honey
          </nav>
          <nav className='items 5'>
            T-Series
          </nav>
          <nav className='items 6'>
            Apna College
          </nav>
          <nav className='items 7'>
            react Js
          </nav>
          <nav className='items 8'>
            Java Script
          </nav>
          <nav className='items 9'>
            Bootstrap
          </nav>
          <nav className='items 10'>
            Mr Beast
          </nav>
          <nav className='items 11'>
            Coding2Go
          </nav>
          <nav className='items 12'>
            Code With Harry
          </nav>
          <nav className='items 13'>
            Live
          </nav>
          <nav className='items 13'>
            Chai or Code
          </nav>
          <nav className='items 13'>
            Doremon
          </nav>
          <nav className='items 13'>
            Sony Tv
          </nav>
          <nav className='items 13'>
            Cartoon
          </nav>
          <nav className='items 13'>
            Carry minati
          </nav>
          <nav className='items 13'>
            Ishow speed
          </nav>
          <nav className='items 13'>
            Virat kholi
          </nav>
          <nav className='items 13'>
            React routing
          </nav>
          <nav className='items 13'>
            Dubbing
          </nav>
          <nav className='items 13'>
            Watched
          </nav>
          <nav className='items 13'>
            Cricket
          </nav>

        </div>

        {/* hero section */}

        <div className='Hero-section'>
          <div className='vedios vid-1'>
            <div className='thumbnail'>
              <a href="https://www.youtube.com/watch?v=VlPiVmYuoqw&t=24772s" target="_blank" rel="noopener noreferrer">
                <img src={Images.thumbnail1} alt="error" />
              </a>
            </div>

            <div className='tutorial'>
              <img src='https://yt3.ggpht.com/00yIYVKjmFvR7sFZXmP5aMq1u0P7ZcLfnDW27A7zRD1hTqcWLwYn0-o_5rGkK2eKfCf43ueE7Q=s176-c-k-c0x00ffffff-no-rj-mo' />
              <p>JavaScript Tutorial (2024) for <br />Beginners to Pro with notes,...</p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            <div className='last-part'>
              Apna College<br />
              3M views.
              8 months ago
            </div>
          </div>

          <div className='vedios vid-2'>
            <div className='thumbnail'>
              <img src={Images.thumbnail2} alt='error' style={{ transform: 'none' }}></img>
            </div>

            <div className='tutorial'>
              <img src='https://yt3.ggpht.com/cqXkXvdneHNe2JEmoR5WMt3ZZJOtGSODVCitn4y263Cj7ZSt2s81jbgHkzvHh-49Pohfz7WA=s68-c-k-c0x00ffffff-no-rj' />
              <p>
                Sanam Teri Kasam (Slowed +<br /> Reverb) Mix++</p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            <div className='last-part'>
              Arijit Singh, Javed Ali, KK, and more
            </div>

          </div>



          <div className='vedios vid-3'>
            <div className='thumbnail'>
              <img src='https://i.ytimg.com/vi/69z-d2JwmoI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFQ_wLnjGMGCfuoKXT2PQyliECcg' alt='error'></img>
            </div>


            <div className='tutorial'>

              <img src='https://yt3.ggpht.com/AbU7vTLboxWMlQFsEDZjbXQlizI-RulsLejQnfSb60juUL_qmb-r-edrgWVPbOD78topx6r-9JQ=s68-c-k-c0x00ffffff-no-rj' />
              <p>3 Idiots Full Movie <br /> Aamir Khan, Kareena Kapoor</p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            <div className='last-part'>
              Haste Raho<br />
              1.3M views .
              5 months ago
            </div>

          </div>


          <div className='vedios vid-4'>
            <div className='thumbnail'>
              <img src='https://i.ytimg.com/vi/KBIq11mNB0I/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYEyAtKH8wDw==&rs=AOn4CLCHL5Thx-PBeSwc4NuHwt0OLH1F8A' alt='error'></img>
            </div>

            <div className='tutorial'>
              <img src='https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s68-c-k-c0x00ffffff-no-rj' />
              <p>Full Video: Malang (Title Track)<br /> Aditya Roy Kapur</p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            <div className='last-part'>
              T-Series<br />

              267M views .
              4 years ago
            </div>

          </div>

          <div className='vedios vid-5'>
            <div className='thumbnail'>
              <img src='https://i.ytimg.com/vi/kBQ2ilj3VO4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZg3PVPDTdbcB9ooI7WunvITnhfg' alt='error'></img>
            </div>

            <div className='tutorial'>
              <img src='https://yt3.ggpht.com/4O-AtCOBswjdVjJvJTp3q9HMO177-HG8RT0WKUxnsF4V_JTOAlj9RknBE3xrD_n7yrcI8fTTw_I=s68-c-k-c0x00ffffff-no-rj' />
              <p>Genius 2018 Full Movie (4K) <br />Utkarsh Sharma, Nawazuddki..</p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            <div className='last-part'>
              Genius<br />
              33M views .
              5 months ago
            </div>

          </div>


          <div className='vedios vid-6'>
            <div className='thumbnail'>
              <img src='https://i.ytimg.com/vi/erLbbextvlY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeXwbxFGxhcxcPaXygFCGEMMV1nA' alt='error'></img>
            </div>

            <div className='tutorial'>
              <img src='https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s88-c-k-c0x00ffffff-no-rj' />
              <p>7 Days Stranded On An Island
              </p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            <div className='last-part'>
              Mrbeast<br />
              226,668,802 views . 5 months ago
            </div>

          </div>



          <div className='vedios vid-7'>
            <div className='thumbnail'>
              <img src='https://i.ytimg.com/vi/CcFIrllSy2o/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMe6Ad2AWPM1rmoeanMv7Fug72cA' alt='error'></img>
            </div>

            <div className='tutorial'>
              <img src='https://yt3.ggpht.com/ytc/AIdro_kMl44oPi4fNs0L0DhQxsXWFhMWym0bfH3tagBnNeBkNyc=s68-c-k-c0x00ffffff-no-rj' />
              <p>Complete MERN Stack Developer <br />Roadmap for Beginners (2024)

              </p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            <div className='last-part'>
              Rohit Negi<br />
              14K views .
              9 days ago
            </div>

          </div>


          <div className='vedios vid-8'>
            <div className='thumbnail'>
              <img src='https://i.ytimg.com/vi/ORyi6tTMNqE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBL_TEEBgBTgi6dQXCfeIg_tGotA' alt='error'></img>
            </div>


            <div className='tutorial'>
              <img src='https://yt3.ggpht.com/7q9t5rjeujEZYqY1xMLn0mvT4Zc6MaZBYgtseDL2_Zh42AOhMze8ep7BUKdR5FnxytMy3csj=s68-c-k-c0x00ffffff-no-rj' />
              <p>MERN Stack Full Course 2023 | <br />Complete MERN Stack...

              </p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            <div className='last-part'>
              Simplilearn<br />
              226K views
              1 year ago
            </div>

          </div>
{/* Shorts Part */}


          <div className='Shorts'>

            <div className='short-vedio'>
              <div className='vedio1 01'>
                <div className='shortts'>
                  <a href='https://www.youtube.com/shorts/NDIUKQKqeM0'>
                  <img src='https://i.ytimg.com/vi/kpzBK2w2xxU/oardefault.jpg?sqp=-oaymwEdCNAFENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBZXFbR0PYCgN8vTASHkKniN6tR5w' className='short-img' /></a>
                  </div>

                <div className='short-write'>
                  <p> Karan x Arjun  🔥  Ft..<br />Shrikrishna -..
                  </p>

                  <FontAwesomeIcon icon={faEllipsisVertical} style={{ marginLeft: "4.7 em" }} />
                </div>

                <div className='shorts-veiw' style={{ color: "grey" }}>
                  1.2M views
                </div>
              </div>

              <div className='vedio1 02 '>
                <div className='shortts'>
                  <a href='https://www.youtube.com/shorts/-1IiW-bIJkY'>
                  <img src='https://i.ytimg.com/vi/CWOegurpVwE/oardefault.jpg?sqp=-oaymwEdCN8DENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCHeTU8CBHqJZ5zQ6nhT85PJNkHYg' className='short-img' /></a></div>

                <div className='short-write'>
                  <p> Mr.professor in Money<br />Heist...
                  </p>

                  <FontAwesomeIcon icon={faEllipsisVertical} style={{ marginLeft: "4.7 em" }} />
                </div>

                <div className='shorts-veiw' style={{ color: "grey" }}>
                  2.1M views
                </div>
              </div>

              <div className='vedio1 03'>
                <div className='shortts'>
                  <a href='https://www.youtube.com/shorts/oQ3wbDc5a_M'><img src='https://i.ytimg.com/vi/-5_W899xOt4/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDdPNlJMISvv2tOIShEIf3uuGqD3A' className='short-img' /></a></div>

                <div className='short-write'>
                  <p> New Movie Release in <br />
                    October....
                  </p>

                  <FontAwesomeIcon icon={faEllipsisVertical} style={{ marginLeft: "4.7 em" }} />
                </div>

                <div className='shorts-veiw' style={{ color: "grey" }}>
                  1.2k views
                </div>
              </div>

              <div className='vedio1 04'>
                <div className='shortts'><a href='https://www.youtube.com/shorts/f0cXJ6mJxGc'><img src='https://i.ytimg.com/vi/f0cXJ6mJxGc/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAF31smKo-nGbaFWergASVFpyR6Sw' className='short-img' /></a></div>

                <div className='short-write'>
                  <p>MrBeast New Content <br />Challenge.....
                  </p>

                  <FontAwesomeIcon icon={faEllipsisVertical} style={{ marginLeft: "4.7 em" }} />
                </div>

                <div className='shorts-veiw' style={{ color: "grey" }}>
                  10M views
                </div>
              </div>

              <div className='vedio1 05'>
                <div className='shortts'><a href='https://www.youtube.com/shorts/Qkt4tVwBciE'><img src='https://i.ytimg.com/vi/qLqZQHDo5HU/hq720.jpg?sqp=-oaymwEdCJwEENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCaf8R4RpwCG-JisXam7jCgZmDmSg' className='short-img' /></a></div>

                <div className='short-write'>
                  <p> SuryaPutra Karan Get <br />angry in hastin.....
                  </p>

                  <FontAwesomeIcon icon={faEllipsisVertical} style={{ marginLeft: "4.7 em" }} />
                </div>

                <div className='shorts-veiw' style={{ color: "grey" }}>
                  2.6M views
                </div>
              </div>

              <div className='vedio1 06'>
                <div className='shortts'>
                  <a href='https://www.youtube.com/shorts/lPXSGO9E-Fk'>
                  <img src='https://i.ytimg.com/vi/K5I1vwLShN0/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBHXeIaoiVWKuHgYyoAr0zRXfO0TA' className='short-img' />
                  </a>
                  </div>

                <div className='short-write'>
                  <p> Sukuna Kill GojoSatoru <br /> in shibiya..
                  </p>

                  <FontAwesomeIcon icon={faEllipsisVertical} style={{ marginLeft: "4.7 em" }} />
                </div>

                <div className='shorts-veiw' style={{ color: "grey" }}>
                  5.8M views
                </div>
              </div>
            </div>



            <div className='short-last'>
              <div className='show-more'>
                <p>Show More</p>
              </div>
            </div>
          </div>


          <div className='vedios vid-9'>
            <div className='thumbnail'>
              <img src='https://i.ytimg.com/vi/SxTYjptEzZs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpoZYpcE_0k7F0_v1SgAeRRiXkJQ' alt='error'></img>
            </div>


            <div className='tutorial'>
              <img src='https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s68-c-k-c0x00ffffff-no-rj' />
              <p>Atif Aslam: Pehli Dafa Song <br />(Video) Ileana D’Cruz | Latest..

              </p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            <div className='last-part'>
              T-Series<br />
              350M views.
              7 years ago
            </div>

          </div>
          <div className='vedios vid-10'>
            <div className='thumbnail'>
              <img src='https://i.ytimg.com/vi/tkppbkh8BpA/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALOBYoCDAgAEAEYciA4KDcwDw==&rs=AOn4CLBfk-XB0l3cktFt9FJLu2rwvsHJRA' alt='error'></img>
            </div>


            <div className='tutorial'>
              <img src='https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s68-c-k-c0x00ffffff-no-rj' />
              <p>सनम रे शीर्षक गीत पूरा वीडियो <br /> पुलकित सम्राट, यामी गौतम, उर्वशी...

              </p>

              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            <div className='last-part'>
              T-Series<br />
              678M views.
              8 years ago
            </div>

          </div>

          <div className='vedios vid-11'>
            <div className='thumbnail'>
              <img src='https://i.ytimg.com/vi/TYkK76pgLfg/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYZSBTKE4wDw==&rs=AOn4CLCs1E7s4G4rQk1vdpvvFMZ_AUlZBg' alt='error'></img>
            </div>


            <div className='tutorial'>
              <img src='https://yt3.ggpht.com/cqXkXvdneHNe2JEmoR5WMt3ZZJOtGSODVCitn4y263Cj7ZSt2s81jbgHkzvHh-49Pohfz7WA=s68-c-k-c0x00ffffff-no-rj' />
              <p>
                Sanam Teri Kasam (Slowed +<br /> Reverb) Mix++</p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            <div className='last-part'>
              Arijit Singh, Javed Ali, KK, and more
            </div>

          </div>
          <div className='vedios vid-12'>
            <div className='thumbnail'>
              <img src='https://i.ytimg.com/vi/jSA0MyXq4wo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9yFusFAO0oq5pEvCcih0dw11mzA' alt='error'></img>
            </div>


            <div className='tutorial'>
              <img src='https://yt3.ggpht.com/SDxvTNtlKAAAYodCDl84Qf1gd_sWKfpAlLBMNs4LPnZZSvfpGUd1kk96AidJDHnQxebqgp9o=s68-c-k-c0x00ffffff-no-rj' />
              <p>JavaScript Tutorial (2024) for <br />Beginners to Pro with notes,...</p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            <div className='last-part'>
              Apna College<br />
              3M views.
              8 months ago
            </div>

          </div>
          <div className='vedios vid-13'>
            <div className='thumbnail'>
              <img src='https://i.ytimg.com/vi/dcYGn8ObOaY/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gSAAugCigIMCAAQARg5IGAocjAP&rs=AOn4CLA45kYSIMVOeMYy349WmwuFJOmiFA' alt='error'></img>
            </div>


            <div className='tutorial'>
              <img src='https://yt3.ggpht.com/wADtEbOHIv6yRZhrcCJYPEv5uZmxwEq6fvAjmOg3r4ADWpX6RDcXqiF09Z-lD0JGielGKYyyNg0=s68-c-k-c0x00ffffff-no-rj' />
              <p>JavaScript Tutorial (2024) for <br />Beginners to Pro with notes,...</p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            <div className='last-part'>
              Apna College<br />
              3M views.
              8 months ago
            </div>

          </div>
          <div className='vedios vid-14'>
            <div className='thumbnail'>
              <img src='https://i.ytimg.com/vi/wejaREXePtg/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBpgiAAtAFigIMCAAQARhyIFYoMjAP&rs=AOn4CLAaOX-8UQB5fY0YM0psqVY91-OqTA' alt='error'></img>
            </div>


            <div className='tutorial'>
              <img src='https://yt3.ggpht.com/z3ymAXKJGsO02dfyWrHP6QUApDqKT_8lFwfTPNMGyHO1eyHynVrMXTb0w-KxCqjSYTkwWFE7=s68-c-k-c0x00ffffff-no-rj' />
              <p>JavaScript Tutorial (2024) for <br />Beginners to Pro with notes,...</p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            <div className='last-part'>
              Apna College<br />
              3M views.
              8 months ago
            </div>

          </div>
          <div className='vedios vid-15'>
            <div className='thumbnail'>
              <img src='https://i.ytimg.com/vi/AlOcSGHTkmw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLNlELgSZ9_JrZMd4EzTJT-tiqdA' alt='error'></img>
            </div>


            <div className='tutorial'>
              <img src='https://yt3.ggpht.com/ytc/AIdro_m0-jNAtus69Z-2SCdFkqcIU6LXsEJ08jxvWj93uwSZoAc=s68-c-k-c0x00ffffff-no-rj' />
              <p>JavaScript Tutorial (2024) for <br />Beginners to Pro with notes,...</p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            <div className='last-part'>
              Apna College<br />
              3M views.
              8 months ago
            </div>

          </div>
          <div className='vedios vid-16'>
            <div className='thumbnail'>
              <img src='https://i.ytimg.com/vi/UxW-R3nrieY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAPcNZCwOcZ-sXORLZ529gw8QDzg' alt='error'></img>
            </div>


            <div className='tutorial'>
              <img src='https://yt3.ggpht.com/00yIYVKjmFvR7sFZXmP5aMq1u0P7ZcLfnDW27A7zRD1hTqcWLwYn0-o_5rGkK2eKfCf43ueE7Q=s176-c-k-c0x00ffffff-no-rj-mo' />
              <p>JavaScript Tutorial (2024) for <br />Beginners to Pro with notes,...</p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            <div className='last-part'>
              Apna College<br />
              3M views.
              8 months ago
            </div>

          </div>
          <div className='vedios vid-17'>
            <div className='thumbnail'>
              <img src='https://i.ytimg.com/vi/XwCU3tp6D-I/hq720_live.jpg?sqp=CNTvq7cG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArGRtyhPdowUulLA4yqwqumIUOww' alt='error'></img>
            </div>


            <div className='tutorial'>
              <img src='https://yt3.ggpht.com/00yIYVKjmFvR7sFZXmP5aMq1u0P7ZcLfnDW27A7zRD1hTqcWLwYn0-o_5rGkK2eKfCf43ueE7Q=s176-c-k-c0x00ffffff-no-rj-mo' />
              <p>JavaScript Tutorial (2024) for <br />Beginners to Pro with notes,...</p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            <div className='last-part'>
              Apna College<br />
              3M views.
              8 months ago
            </div>

          </div>
          <div className='vedios vid-18'>
            <div className='thumbnail'>
              <img src='https://i.ytimg.com/vi/UKAW0LUOsmo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDo7hwKpYrDOuWInG-OyVpahYwpQ' alt='error'></img>
            </div>


            <div className='tutorial'>
              <img src='https://yt3.ggpht.com/00yIYVKjmFvR7sFZXmP5aMq1u0P7ZcLfnDW27A7zRD1hTqcWLwYn0-o_5rGkK2eKfCf43ueE7Q=s176-c-k-c0x00ffffff-no-rj-mo' />
              <p>JavaScript Tutorial (2024) for <br />Beginners to Pro with notes,...</p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            <div className='last-part'>
              Apna College<br />
              3M views.
              8 months ago
            </div>

          </div>
          <div className='vedios vid-19'>
            <div className='thumbnail'>
              <img src='https://i.ytimg.com/vi/NisfIUglozc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCehB8kNQ_FuY84_-MsDWxNZkQD3A' alt='error'></img>
            </div>


            <div className='tutorial'>
              <img src='https://yt3.ggpht.com/00yIYVKjmFvR7sFZXmP5aMq1u0P7ZcLfnDW27A7zRD1hTqcWLwYn0-o_5rGkK2eKfCf43ueE7Q=s176-c-k-c0x00ffffff-no-rj-mo' />
              <p>JavaScript Tutorial (2024) for <br />Beginners to Pro with notes,...</p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            <div className='last-part'>
              Apna College<br />
              3M views.
              8 months ago
            </div>

          </div>
          <div className='vedios vid-20'>
            <div className='thumbnail'>
              <img src='https://i.ytimg.com/vi/gxcx9ZT33Cw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDU0RoorQ78_rWfSYOoy5zxtjZcvQ' alt='error'></img>
            </div>


            <div className='tutorial'>
              <img src='https://yt3.ggpht.com/00yIYVKjmFvR7sFZXmP5aMq1u0P7ZcLfnDW27A7zRD1hTqcWLwYn0-o_5rGkK2eKfCf43ueE7Q=s176-c-k-c0x00ffffff-no-rj-mo' />
              <p>JavaScript Tutorial (2024) for <br />Beginners to Pro with notes,...</p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>

            <div className='last-part'>
              Apna College<br />
              3M views.
              8 months ago
            </div>

          </div>
         
        </div>


      </div>
    </section>
 
    </div>
  )
}

export default App
