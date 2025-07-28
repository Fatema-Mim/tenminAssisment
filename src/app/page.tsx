"use client";
import Image from "next/image";
import CourseInstruction from "./components/CourseInstruction";
import Banner from "./components/Banner";
import Instructors from "./components/Instructors";
import Features from "./components/Features";
import Engagement from "./components/Engagement";
import Pointers from "./components/Pointers";
import ContentPreview from "./components/ContentPreview";
import AboutCourse from "./components/AboutCourse";
import CourseFeature from "./components/CourseFeature";
import FreeItems from "./components/FreeItems";
import Testimonials from "./components/Testimonials";
import CourseDetails from "./components/CourseDetails";
import { use, useEffect, useState } from "react";
import { CourseData } from "@/interface/interface";
import { getData } from "@/lib/api";
import courseData from "@/services/courseData";
import Faq from "./components/Faq";
import Requirements from "./components/Requirements";
import Payment from "./components/Payment";
import AnyQuestion from "./components/AnyQuestion";
import MoreCourse from "./components/MoreCourse";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  const [data, setData] = useState<CourseData | null>(null);

  const [language, setLanguage] = useState<"en" | "bn">("en");

  const toggleLanguage = () => {
    const newLang = language === "en" ? "bn" : "en";
    setLanguage(newLang);
  };

  useEffect(() => {
    getData(`/products/ielts-course`, { params: { lang: language } }).then(
      (response) => {
        const organizedData = courseData(response);
        setData(organizedData);
      }
    );
  }, [language]);

  return (
    <>
      <Navbar toggleLanguage={toggleLanguage} language={language} />
      <div>
        <Banner
          basicInfo={data?.basicInfo}
          cta={data?.cta}
          media={[
            ...(data?.media?.previewImages || []),
            ...(data?.media?.previewVideos || []),
          ]}
          statistics={data?.statistics}
        />
        <main className="container w-full mx-auto px-0 md:px-9 flex flex-col md:flex-row justify-between items-start gap-4 py-4">
          <section className="order-2 md:order-1 flex-1 md:max-w-[calc(100%-348px)] lg:max-w-[calc(100%-448px)]">
            <CourseInstruction />
            <Instructors instructor={data?.instructor} />
            <Features features={data?.features} />
            <Engagement engagement={data?.groupEngagement || []} />
            <Pointers
              pointers={data?.pointers ?? { sectionName: "", values: [] }}
            />
            <ContentPreview contentPreview={data?.contentPreview || null} />
            <AboutCourse about={data?.aboutCourse ?? null} />
            <CourseFeature exclusive={data?.exclusiveFeatures} />
            <FreeItems freeItems={data?.freeItems || null} />
            <Testimonials testimonials={data?.testimonials ?? null} />
            <Requirements requirements={data?.requirements || null} />
            <Payment payment={data?.paymentInfo || null} />
            <Faq faq={data?.faq} />
            <AnyQuestion />
          </section>

          <CourseDetails statistics={data?.statistics} cta={data?.cta} />
        </main>
        <MoreCourse />
      </div>

      <Footer />
    </>
  );
}
