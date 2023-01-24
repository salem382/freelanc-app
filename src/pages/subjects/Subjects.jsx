import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import SubjectHero from '../../components/subjectsComponent/subjectHero/subjectHero';
import Subjectsearch from '../../components/subjectsComponent/subjectSearch/subjectsearch';
import StudyMaterial from '../../components/subjectsComponent/studyMaterial/studyMaterial';
import Footer from '../../components/footer/Footer';
import Wrapper from '../../components/wrapper/Wrapper';
import React from 'react';
import Contact from '../../components/contact/Contact';

const Subjects = () => {
 
  return (
    <>
      <Sidebar />
      <Navbar />
      <Wrapper>
        <SubjectHero />
        <Subjectsearch />
        <StudyMaterial />
        <Contact />
        <Footer />
      </Wrapper>
    </>
  );
};

export default React.memo(Subjects);
