'use client'
import Education from "./components/Main/Education/Education";
import IntroSection from "./components/Main/Land/IntroSection";
import SideNavig from "./components/Main/SideNavig";
import SkillsSection from "./components/Main/Skills/SkillsSection";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mt-24 mx-auto px-12 py-4">
        <IntroSection></IntroSection>
        <Education></Education>
        <SkillsSection></SkillsSection>
      </div>
    <SideNavig></SideNavig>
    </main>
  );
}
