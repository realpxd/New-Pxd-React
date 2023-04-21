import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Script from 'next/script'
import classNames from 'classnames';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const megaBlock = classNames(styles.megaBlock , styles.mbA);
  return (
    <>
            <Head>
      <title>PROGRAMMERXD</title>
      {/* <!-- STYLESHEETS --> */}
      {/* <link href="index.css" rel="stylesheet" preload="auto" >
      <link href="responsive.css" rel="stylesheet"> */}
      {/* <!-- Smtp ~ contact form --> */}
      <Script src="https://smtpjs.com/v3/smtp.js"></Script>
      {/* <!-- Anime.js --> */}
        {/* <!-- no use rn :--    <Script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></Script>  --> */}
      {/* <!-- Jquery --> */}
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></Script>
      {/* <!-- Data Aos
      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
      <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css"> --> */}
      {/* <!-- icons --> */}
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> */}
      {/* <!-- fonts  --> */}
      {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"> */}
      {/* <!-- X-icon --> */}
      {/* <link rel="icon" href="./assets/img/icon.png" type="image/x-icon"> */}
      {/* <!-- Meta tags --> */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta name="keywords" content="Developer, designer, website, web developer, Landing Page, LandingPage, Naman, Saini, NamanSaini, Naman Saini, ProgrammerXD, programmerxd, programmarxd, Programmer XD, resume, personal, card, cards, portfolio" />
      <meta name="author" content="ProgrammerXD / Naman Saini" />
      <meta name="title" content="Naman Saini" />
      <meta name="deScription" content="About Naman Saini/ProgrammerXD" />
      <meta property="og:image" content="./assets/img/icon.png" />
      <meta property="og:title" content="Naman Saini" />
      <meta property="og:url" content="https://www.programmerxd.in" />
      <meta property="og:type" content="website" />
      <meta property="og:deScription" content="About Naman Saini/ProgrammerXD" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="ProgrammerXD.in" />
      <meta name="twitter:title" content="Naman Saini" />
      <meta name="twitter:deScription" content="About Naman Saini/ProgrammerXD" />
      <meta name="twitter:url" content="https://www.programmerxd.in" />
      <meta name="twitter:image" content="./assets/img/icon.png" />
      <meta id="themeH" name="theme-color" content="#000" />
      <meta name = "revised" content = "ProgrammerXD, 2/8/2022" />
      </Head>
      {/* <!-- Google tag (gtag.js)
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BYRQXJ2PSG"></Script>
      <Script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-BYRQXJ2PSG');
      </Script>--> */}
      {/* <!--Menu navigation bar--> */}
      <div className={styles.wrapperAll}>
  
      <header>
      <div id="nav-placeholder"></div>
      </header>
      {/* <!-- Start of body--> */}
      <main>
      <div className={megaBlock}>
      {/* <!-- Block A ~ GREETINGS --> */}
      <div className={`${styles.container} ${styles.cLeft}`} id="1">
        <div className={`${styles.blocks} ${styles.blockA}`}>
          <div className={styles.data}>
            <h1> Hellow <span className={styles.fi}>Stalker</span><span className={styles.lf}>Stalker</span></h1> 
            <br /> 
            <p className={styles.text}>I am glad that you visited my WebSite . Let's explore more, just click the button below.
            </p>
            <Link href="#2"> <button className={styles.btn}>Know more ⤵</button> </Link>
          </div>
          <div className={`${styles.img} ${styles.imgA}`}>
          </div>
        </div>
          <hr className={styles.hr} align="center" />
      </div>
      {/* <!-- Block B ~ INTRODUCTION --> */}
      <div className={`${styles.container} ${styles.cRight}`} id="2">
        <div className={`${styles.blocks} ${styles.blockB}`}>
          <div className={`${styles.img} ${styles.imgB}`}>
          </div>
          <div className={styles.data}>
            <h1 className={`${styles.iffi} ${styles.h1}`}>About <span className={styles.fi}>me</span><span className={styles.lf}>me</span></h1>
            <p className={styles.text}>Am 18yrs old &amp; I am a {/* <font style="color: pink;">web dev.</font>  */} since 2019, and have some great skills in &lt;/javaScript&gt; &amp; Web-Development. </p>
            <Link href="#8-A"> <button className={styles.btn}>MEET ASSISTANT ⤵</button> </Link>
          </div>
        </div>
        <hr id="8-A" className={`${styles.hr} ${styles.hrL}`} align="center" />	
      </div>

      {/* <!-- Block A ~ GREETINGS --> */}
      <div className={`${styles.container} ${styles.cLeft}`} id="8">
        <div className={`${styles.blocks} ${styles.blockA}`}>
          <div className={styles.data}>
            <h1> Meet my <span className={styles.fi}>Assistant</span><span className={styles.lf}>Assistant</span></h1> 
            <br /> 
            <p className={styles.text}>
              She is an AI art created by DALL-E and she is very kind.
              Her age is a secret bfiut meanwhile she's so smart
            </p>
            <Link href="#3-A"> <button className={styles.btn}>Check my Projects ⤵</button> </Link>
          </div>
          <div className={`${styles.img} ${styles.imgC}`}>
          </div>
        </div>
          <hr id="3-A" className={styles.hr} align="center" />
      </div>

      {/* <!-- Block C ~ PROJECTS --> */}
      <div className={`${styles.container} ${styles.projects}`} id="3">
        <h1 className={`${styles.iffi} ${styles.hdng}`} align="center">My <span className={styles.fi}>Projects</span><span className={styles.lf}>Projects</span></h1>
        <div className={`${styles.blocks} ${styles.blockC}`}>
          <div className={`${styles.data} ${styles.dataProjects}`}>
            <div className={styles.list}>
              <div className={`${styles.gamesSection} ${styles.sectionsClob}`} id="games">
                  <p className={styles.textPro}>Mini Games</p>
                  <Link href="games"> <button className={styles.projectsBtn}> Play Now </button> </Link>
              </div>
              <div className={`${styles.musicSection} ${styles.sectionsClob}`} id="musicz">
                <p className={styles.textPro}>Listen Songs</p>
                <Link href="Musics/index"> <button className={styles.projectsBtn}> Continue </button> </Link>
              </div>
              <div className={`${styles.clcliSection} ${styles.sectionsClob}`} id="clcli">
                <p className={styles.textPro}>Clones & Clients</p>
                <Link href="clcli"> <button className={styles.projectsBtn}> Explore </button> </Link>
              </div>
              {/* <!--
              <button onClick="location.href='https://instagram.programmerxd.in'" className="btn">Realtime Chat-app in JS</button>
              <button onClick="location.href='./Money-Game/index.html'" className="btn">Squid/Money Game</button>
              <button onClick="location.href='./RoadToInfinity/index.html'" className="btn">RTI - Game</button>
              <button onClick="location.href='./TelegramUi/index.html'" className="btn">Telegram UI</button>
              <button onClick="location.href='./Musics/index.html'" className="btn">Music Playlist</button>
              <button onClick="location.href='https://naman77s.github.io/Hn24/'" className="btn">HN24 Web-app</button>
              <button onClick="location.href='https://naman77s.github.io/ufolinux'" className="btn">UFO linux website</button>
              --> */}
              {/* <!--
              <button onClick="location.href='./Inf.html'" className="btn">Mobile Information Grabber</button>
              <button onClick="location.href='./Repeater/index.html'" className="btn">Text Repeater</button>
              <button onClick="location.href='./Calculator.html'" className="btn">The Calculator</button>
              --> */}
            </div>
          </div>
          <br/>
          {/* <!-- <button align="center" onClick="location.href='#5-A'" className="btn btn-hire">Want to hire me?</button> --> */}
      </div>
        <hr className={`${styles.hr} ${styles.hrL} ${styles.hrL2}`} align="center" />
          {/* <!--<div className="project-img"></div>--> */}
      </div>

      {/* <!-- Block D ~ STATISTICS --> */}
      <div className={styles.container} id="4">
        <h1 className={styles.fontSts} align="center">Statistics</h1>
        
          <div className={`${styles.blocks} ${styles.blockD}`}>
          <a className={`${styles.stats} ${styles.aLink}`} href="https://github.com/realpxd"> 
            <img className={styles.img} align="center" src="https://github-readme-stats.vercel.app/api?username=realpxd&show_icons=true&theme=radical" alt="Overall Stats" />
          </a>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <a className={`${styles.statsLang} ${styles.aLink}`} href="https://github.com/realpxd">
            <img className={styles.img} align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=realpxd&layout=compact&theme=radical" alt="Languages Stats" />
          </a>
        </div>
          <br/>
        <hr id="5-A" className={`${styles.hr} ${styles.hrL} ${styles.hrL2}`} align="center" />
      </div>
          <br/>

      {/* <!-- Block E ~ CONTACT ME --> */}
      <div className={styles.container} id="5">
        <h1 className={styles.h1} align="center">Contact Now!</h1>
        <div className={`${styles.blocks} ${styles.blockE}`}>
          <div className={styles.data}>
            <div className={styles.contactForm}>
              <form className={styles.cform} method="post" action="javaScript:sendmail()">
                <div className={styles.row}>
                  <input className={styles.name} id="name" type="text" name="name" placeholder="Full name" required/>
                  <input className={styles.email} id="email" type="email" name="email" placeholder="Email@google.com" required/>
                  <textarea className={styles.message} id="message" name="message" placeholder="Type your Message here.." required></textarea>
                  <button type="submit" className={`${styles.btn} ${styles.btnForm}`} >Send Message</button>
                </div>
              </form>
            </div>
            <br/>
            <Image className={styles.map} src="../assets/img/Bharat.svg" alt="MAP" height="150"  width="150" />
              <br/>
          </div>
        </div>
        </div>
      </div>
      <div id="footer-placeholder"></div>
      {/* console.log('first') */}
      <br/>

      {/* <!-- Last Block ~ SHORT CANVAS GANE-->
        <!-- not in use rn :-- <cavas id="cavas" height="300" width="380"></cavas>  --> */}

      {/* <!-- loading Scripts... --> */}
      </main>
      </div>
    </>
  
// {/* {/* } */}
)}