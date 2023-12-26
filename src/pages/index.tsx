import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Skills from "@/components/Skills";
import { NextPage } from "next";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Wrapper from "@/components/Wrapper";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Passionate frontend developer with expertise in creating captivating and user-friendly web experiences. I specialize in translating designs into clean and responsive code, ensuring seamless and interactive interfaces. Explore my portfolio to witness my commitment to crafting visually appealing websites with a focus on user experience. Let's bring your digital ideas to life together."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Responsive Design, User Interface, User Experience, Front-end Frameworks, Web Design, Progressive Web Apps, Mobile First, Cross-Browser Compatibility, Browser Developer Tools, DOM Manipulation, CSS Preprocessors, Web Accessibility, Single Page Applications, API Integration, Version Control, Build Tools, Responsive Typography, Grid Systems, Media Queries, Performance Optimization, Code Splitting, Front-end Architecture, Component-based Development, Progressive Enhancement, Design Patterns, Browser Rendering Engine, Web Standards, SEO-friendly Markup, Animation, ARIA Roles, Front-end Testing, Code Linting, Cross-Origin Resource Sharing, AJAX, Browser Compatibility Testing, Websockets, Front-end Security, Clean Code, Interactive Interfaces"
        />
        <meta name="author" content="Metodij Gjorgichkov" />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Metodij Gjorgichkov - Frontend Developer"
        />
        <meta
          property="og:description"
          content="Passionate frontend developer with expertise in creating captivating and user-friendly web experiences. I specialize in translating designs into clean and responsive code, ensuring seamless and interactive interfaces. Explore my portfolio to witness my commitment to crafting visually appealing websites with a focus on user experience. Let's bring your digital ideas to life together."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/metodijgj99/mgj.png?updatedAt=1703169735732"
        />
        <meta property="og:url" content="https://mgjorgichkov.com" />
        <meta property="og:type" content="website" />

        <title>Metodij Gjorgichkov</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Wrapper>
        <Header />
        <Banner />
        <Projects />
        <Skills />
        <Contact />
      </Wrapper>
    </>
  );
};
export default Home;
