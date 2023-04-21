import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import styles3 from '@/styles/games.css'
import Link from 'next/link';
import Script from 'next/script'
import classNames from 'classnames';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	
  return (
    <>
<Head>
<title>Games Section</title>
{/* <!-- STYLESHEETS -->
<link href="index.css" rel="stylesheet" preload="auto" >
<link href="responsive.css" rel="stylesheet"> */}
{/* <!-- Smtp ~ contact form --> */}
<Script src="https://smtpjs.com/v3/smtp.js"></Script>
{/* <!-- Anime.js -->
	<!-- no use rn :--    <Script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></Script>  -->
<!-- Jquery --> */}
<Script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></Script>
{/* <!-- Data Aos
<Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
<link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css"> --> */}
{/* <!-- icons --> */}
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> */}
{/* <!-- fonts  --> */}
{/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"> */}
{/* <!-- X-icon --> */}
{/* <link rel="icon" href="./assets/img/DALL-E/icon.png" type="image/x-icon"> */}
{/* <!-- Meta tags --> */}
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<meta name="keywords" content="Games, Games page , games by programmerxd, mini games,Developer, designer, website, web developer, Landing Page, LandingPage, Naman, Saini, NamanSaini, Naman Saini, ProgrammerXD, programmerxd, programmarxd, Programmer XD, resume, personal, card, cards, portfolio" />
<meta name="author" content="ProgrammerXD / Naman Saini" />
<meta name="title" content="Mimi Games by PROGRAMMERXD" />
<meta name="deScription" content="Here you can play and enjoy with some mini games created with love by ProgrammerXD." />
<meta property="og:image" content="./assets/img/DALL-E/game-banner.png" />
<meta property="og:title" content="Naman Saini" />
<meta property="og:url" content="https://www.programmerxd.in/games.html" />
<meta property="og:type" content="website" />
<meta property="og:deScription" content="Here you can play and enjoy with some mini games created with love by ProgrammerXD." />
<meta property="og:locale" content="en_US" />
<meta property="og:site_name" content="ProgrammerXD.in/games.html" />
<meta name="twitter:title" content="Naman Saini" />
<meta name="twitter:deScription" content="Here you can play and enjoy with some mini games created with love by ProgrammerXD." />
<meta name="twitter:url" content="https://www.programmerxd.in/games.html" />
<meta name="twitter:image" content="./assets/img/DALL-E/game-banner.png" />
<meta id="themeH" name="theme-color" content="#000" />
<meta name = "revised" content = "ProgrammerXD, 3/8/2022" />
</Head>
<main>
<header>
<div id="nav-placeholder"></div>
</header>
<div className={`${styles.container} ${styles.gcimg} ${styles.headImg}`}>
	<p className={styles.text}>Games Section</p>
</div>
<div className={`${styles.containerLinks} ${styles.glink}`}>
	<Link href="Money-Game" > <button className={styles.projectsBtn}>Squid/Money Game</button> </Link>
	<Link href="Rocket-Doge" > <button className={styles.projectsBtn}>Rocket Doge</button> </Link>
	<Link href="RoadToInfinity" > <button className={styles.projectsBtn}>Road To Infinity</button> </Link>
	<Link href="" > <button className={styles.projectsBtn}>----</button> </Link>
</div>
<div id="footer-placeholder"></div>
{/* <Script src="index.js"></Script> */}
<style jsx>{`
.headImg{
	background-image:url("../assets/img/DALL-E/game-m.webp");
    background-position:center; 
	background-repeat:no-repeat;
	background-size:cover;
}`}
</style>
</main>
    </>
)}