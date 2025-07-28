import { ApiResponse, CourseData } from "@/interface/interface";

export const courseData = (apiResponse: ApiResponse): CourseData => {
  const courseData = apiResponse.data;

  return {
    // ========================
    // 1. BASIC COURSE INFO
    // ========================
    basicInfo: {
      id: courseData.id,
      slug: courseData.slug,
      title: courseData.title,
      description: courseData.description,
      platform: courseData.platform,
      type: courseData.type,
      modality: courseData.modality,
      startAt: courseData.start_at,
      deliveryMethod: courseData.delivery_method,
      isCohortBased: courseData.is_cohort_based_course,
    },

    // ========================
    // 2. MEDIA & IMAGES
    // ========================
    media: {
      previewVideos: courseData.media.filter(
        (item) =>
          item.name === "preview_gallery" && item.resource_type === "video"
      ),
      previewImages: courseData.media.filter(
        (item) =>
          item.name === "preview_gallery" && item.resource_type === "image"
      ),
      thumbnail: courseData.media.find((item) => item.name === "thumbnail")
        ?.resource_value,
      squareImage: courseData.media.find((item) => item.name === "sqr_img")
        ?.resource_value,
      bookPreview: courseData.media.find(
        (item) => item.name === "book_preview"
      ),
    },

    // ========================
    // 3. COURSE STATISTICS & CHECKLIST
    // ========================
    statistics: courseData.checklist.map((item) => ({
      id: item.id,
      text: item.text,
      icon: item.icon,
      color: item.color,
      listPageVisibility: item.list_page_visibility,
    })),

    // ========================
    // 4. CTA BUTTON
    // ========================
    cta: {
      text: courseData.cta_text.name,
      value: courseData.cta_text.value,
    },

    // ========================
    // 5. INSTRUCTOR INFO
    // ========================
    // 5. INSTRUCTOR INFO with section name
    instructor: (() => {
      const instructorSection = courseData.sections.find(
        (section) => section.type === "instructors"
      );
      if (!instructorSection?.values?.[0]) return null;

      return {
        sectionName: instructorSection.name,
        name: instructorSection.values[0].name,
        description: instructorSection.values[0].description,
        short_description: instructorSection.values[0].short_description,
        image: instructorSection.values[0].image,
        slug: instructorSection.values[0].slug,
        has_instructor_page: instructorSection.values[0].has_instructor_page,
      };
    })(),

    // ========================
    // 6. COURSE FEATURES
    // ========================
    features: (() => {
      const featuresSection = courseData.sections.find(
        (section) => section.type === "features"
      );
      if (!featuresSection?.values?.length) return null;
      return {
        sectionName: featuresSection.name, // the section name once here
        values: featuresSection.values.map((feature) => ({
          id: feature.id,
          title: feature.title,
          subtitle: feature.subtitle,
          icon: feature.icon,
        })),
      };
    })(),

    // ========================
    // 7. LEARNING OUTCOMES/POINTERS
    // ========================
    pointers: (() => {
      const pointersSection = courseData.sections.find(
        (section) => section.type === "pointers"
      );

      if (!pointersSection?.values?.length) return null;

      return {
        sectionName: pointersSection.name,
        values: pointersSection.values.map((pointer) => ({
          id: pointer.id,
          text: pointer.text,
          color: pointer.color,
          icon: pointer.icon,
        })),
      };
    })(),

    // ========================
    // 8. COURSE ABOUT/DETAILS
    // ========================
    aboutCourse: (() => {
      const aboutSection = courseData.sections.find(
        (section) => section.type === "about"
      );
      return aboutSection
        ? {
            sectionName: aboutSection.name, // <-- include this!
            values: aboutSection.values.map((about) => ({
              id: about.id,
              title: about.title,
              description: about.description,
              icon: about.icon,
            })),
          }
        : { sectionName: "", values: [] };
    })(),

    // ========================
    // 9. EXCLUSIVE FEATURES
    // ========================
    exclusiveFeatures: (() => {
      const exclusiveSection = courseData.sections.find(
        (section) => section.type === "feature_explanations"
      );

      if (!exclusiveSection) return null;

      return {
        sectionName: exclusiveSection.name,
        values: exclusiveSection.values.map((feature: any) => ({
          id: feature.id,
          title: feature.title,
          checklist: feature.checklist,
          file_type: feature.file_type,
          file_url: feature.file_url,
          video_thumbnail: feature.video_thumbnail,
        })),
      };
    })(),

    // ========================
    // 10. TESTIMONIALS
    // ========================
    testimonials: (() => {
      const testimonialsSection = courseData.sections.find(
        (section) => section.type === "testimonials"
      );

      return testimonialsSection
        ? {
            sectionName: testimonialsSection.name,
            values: testimonialsSection.values.map((testimonial: any) => ({
              id: testimonial.id,
              name: testimonial.name,
              description: testimonial.description,
              testimonial: testimonial.testimonial,
              profile_image: testimonial.profile_image,
              video_url: testimonial.video_url,
              thumb: testimonial.thumb,
              video_type: testimonial.video_type,
            })),
          }
        : null;
    })(),

    // 11. FAQ
    faq: (() => {
      const faqSection = courseData.sections.find(
        (section) => section.type === "faq"
      );

      if (!faqSection || !Array.isArray(faqSection.values)) return null;

      return {
        sectionName: faqSection.name,
        values: faqSection.values.map((faq: any) => ({
          id: faq.id,
          question: faq.question,
          answer: faq.answer,
        })),
      };
    })(),

    // ========================
    // 12. OFFERS
    // ========================
    offers: (() => {
      const offersSection = courseData.sections.find(
        (section) => section.type === "offers"
      );
      return (
        offersSection?.values?.map((offer) => ({
          id: offer.id,
          text: offer.text,
          template: offer.template,
          start_at: offer.start_at,
          end_at: offer.end_at,
          background_color: offer.background_color,
          background_img: offer.background_img,
          checklist_text_color: offer.checklist_text_color,
        })) || []
      );
    })(),

    // ========================
    // 13. GROUP JOIN ENGAGEMENT
    // ========================
    groupEngagement: (() => {
      const groupSection = courseData.sections.find(
        (section) => section.type === "group_join_engagement"
      );
      return (
        groupSection?.values?.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          title_color: item.title_color,
          description_color: item.description_color,
          thumbnail: item.thumbnail,
          top_left_icon_img: item.top_left_icon_img,
          background: item.background,
          cta: item.cta,
        })) || []
      );
    })(),

    // ========================
    // 14. BUNDLE ITEMS (if any)
    // ========================
    bundleItems: (() => {
      const bundleSection = courseData.sections.find(
        (section) => section.type === "bundle_items"
      );
      return bundleSection?.values || [];
    })(),

    // ========================
    // 15. FREE ITEMS
    // ========================
    freeItems: (() => {
      const freeItemsSection = courseData.sections.find(
        (section) => section.type === "free_items"
      );
      return freeItemsSection || null;
    })(),

    // ========================
    // 16. CERTIFICATE INFO
    // ========================
    certificate: (() => {
      const certificateSection = courseData.sections.find(
        (section) => section.type === "certificate"
      );
      return certificateSection?.values || [];
    })(),

    // ========================
    // 17. REQUIREMENTS
    // ========================
    requirements: (() => {
      const requirementsSection = courseData.sections.find(
        (section) => section.type === "requirements"
      );
      return requirementsSection || null;
    })(),

    // ========================
    // 18. PAYMENT INFO
    // ========================
    paymentInfo: (() => {
      const paymentSection = courseData.sections.find(
        (section) => section.type === "how_to_pay"
      );
      return paymentSection || null;
    })(),

    // ========================
    // 19. CONTENT PREVIEW
    // ========================
    contentPreview: (() => {
      const previewSection = courseData.sections.find(
        (section) => section.type === "content_preview"
      );

      return previewSection || null;
    })(),

    // ========================
    // 20. SEO DATA
    // ========================
    seo: courseData.seo || [],

    // ========================
    // 21. SECONDARY CTA
    // ========================
    secondaryCta: courseData.secondary_cta_group || [],

    // ========================
    // 22. OLD INFO (for backward compatibility)
    // ========================
    oldInfo: courseData.old_info || {},
  };
};

// Example usage:
/*
import api from './lib/axios';
import { organizeCourseData } from './course-data-organizer';

const fetchCourseData = async (slug) => {
  try {
    const response = await api.get(`catalog/product/${slug}`);
    const organizedData = organizeCourseData(response.data);
    
    // Now you can easily pass specific sections to components:
    // <CourseHeader data={organizedData.basicInfo} media={organizedData.media} />
    // <InstructorSection instructor={organizedData.instructor} />
    // <CourseFeatures features={organizedData.features} />
    // <TestimonialsSection testimonials={organizedData.testimonials} />
    // <FAQ faqData={organizedData.faq} />
    
    return organizedData;
  } catch (error) {
    console.error('Error fetching course data:', error);
    throw error;
  }
};
*/

export const getSectionData = <T extends keyof CourseData>(
  organizedData: CourseData,
  sectionName: T
): CourseData[T] => {
  return organizedData[sectionName];
};

export const hasSectionData = <T extends keyof CourseData>(
  organizedData: CourseData,
  sectionName: T
): boolean => {
  const data = organizedData[sectionName];

  if (data === null || data === undefined) return false;

  if (Array.isArray(data)) {
    return data.length > 0;
  }

  if (typeof data === "object") {
    return Object.keys(data).length > 0;
  }

  return Boolean(data);
};

export default courseData;
