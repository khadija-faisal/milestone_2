import HomePage from "./home/page";
import AboutPage from "./about/page";
import ProjectPage from "./project/page";
import ContactPage from "./contact/page";
export default function Home() {
  return (
    <main>
      <HomePage />
      <AboutPage />
      <ProjectPage />
      <ContactPage />
    </main>
  );
}
