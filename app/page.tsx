import GlideUp from "@/features/GlideUp";
import Advertisement from "@/widgets/Advertisement";
import AiSection from "@/widgets/AiSection";
import CourseAuthor from "@/widgets/CourseAuthor";
import CourseMap from "@/widgets/CourseMap";
import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";
import ImportantToUnderstand from "@/widgets/ImportantToUnderstand";
import OurCourse from "@/widgets/OurCourse";
import Vacancies from "@/widgets/Vacancies";
import WhyUs from "@/widgets/WhyUs";

export default function Home() {
  return (
    <div className="root">
      <Header />
      <main>
        <WhyUs />
        <AiSection />
        <ImportantToUnderstand />
        <OurCourse />
        <CourseMap />
        <CourseAuthor />
        <Advertisement />
        <Vacancies />
      </main>
      <Footer />
    </div>
  );
}
