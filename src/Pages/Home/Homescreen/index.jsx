import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Footer from "../Footer";

export default function Home() {
    return(
        <>
            <HeroSection/>
            <MySkills/>
            <AboutMe/>
            <MyPortfolio/>
            <Footer/>
        </>
    );
}