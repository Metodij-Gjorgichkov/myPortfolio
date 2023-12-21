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
          content="frontend development, web development, responsive layouts, interactive interfaces, clean code, user-friendly experiences"
        />
        <meta name="author" content="Metodij Gjorgichkov" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Gjorgichkov - Frontend Developer" />
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
