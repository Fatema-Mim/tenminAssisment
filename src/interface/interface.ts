export interface MediaItem {
  name: string;
  resource_type: "video" | "image";
  resource_value: string;
  thumbnail_url?: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  icon: string;
  color: string;
  list_page_visibility: boolean;
}

export interface CTAButton {
  name: string;
  value: string;
}

export interface Instructor {
  sectionName: string;
  name: string;
  description: string;
  short_description: string;
  image: string;
  slug: string;
  has_instructor_page: boolean;
}

export interface CourseFeature {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface CourseFeaturesSection {
  sectionName: string;
  values: CourseFeature[];
}


export interface Pointers {
  id: string;
  text: string;
  color: string;
  icon: string;
}

export interface PointersSection {
  sectionName: string;
  values: Pointers[];
}

export interface AboutSection {
  id: string;
  title: string;
  description: string;
  icon: string;
}
export interface AboutCourseSection {
  sectionName: string;
  values: AboutSection[];
}

export interface ExclusiveFeature {
  id: string;
  title: string;
  checklist: string[];
  file_type: string;
  file_url: string;
  video_thumbnail: string;
}

export interface ExclusiveFeatureSection {
  sectionName: string;
  values: ExclusiveFeature[];
}

export interface Testimonial {
  id: string;
  name: string;
  description: string;
  testimonial: string;
  profile_image: string;
  video_url: string;
  thumb: string;
  video_type: string;
}

export interface TestimonialSection {
  sectionName: string; 
  values: Testimonial[];
}


export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
export interface FAQSection {
  sectionName: string;
  values: FAQ[];
}

export interface Offer {
  id: string;
  text: string;
  template: string;
  start_at: string;
  end_at: string;
  background_color: string;
  background_img: string;
  checklist_text_color: string;
}

export interface GroupEngagement {
  id: string;
  title: string;
  description: string;
  title_color: string;
  description_color: string;
  thumbnail: string;
  top_left_icon_img: string;
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    clicked_url: string;
    color: string;
    text: string;
  };
}

export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: any[];
}

export interface OldInfo {
  cat_id: number;
  course_id: number;
  platform: string;
  skills_cat_id: number;
  slug: string;
}

// Raw API Response Types
export interface ApiCourseData {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: OldInfo;
  start_at: string;
  media: MediaItem[];
  checklist: ChecklistItem[];
  seo: any[];
  cta_text: CTAButton;
  sections: Section[];
  is_cohort_based_course: boolean;
  secondary_cta_group: any[];
  delivery_method: string;
}

export interface ApiResponse {
  code: number;
  data: ApiCourseData;
  error: any[];
  message: string;
  payload: any[];
  status_code: number;
}

// Organized Data Types
export interface BasicInfo {
  id: number;
  slug: string;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  startAt: string;
  deliveryMethod: string;
  isCohortBased: boolean;
}

export interface Media {
  previewVideos: MediaItem[];
  previewImages: MediaItem[];
  thumbnail?: string;
  squareImage?: string;
  bookPreview?: MediaItem;
}

export interface Statistics {
  id: string;
  text: string;
  icon: string;
  color: string;
  listPageVisibility: boolean;
}

export interface CTA {
  text: string;
  value: string;
}

export interface CourseData {
  basicInfo: BasicInfo;
  media: Media;
  statistics: Statistics[];
  cta: CTA;
  instructor: Instructor | null;
  features: CourseFeaturesSection | null;
  pointers: PointersSection | null;
  aboutCourse: AboutCourseSection | null;
  exclusiveFeatures: ExclusiveFeatureSection | null;
  testimonials: TestimonialSection | null;
  faq: FAQSection | null;
  offers: Offer[];
  groupEngagement: GroupEngagement[];
  bundleItems: any[];
  freeItems: Section | null;
  certificate: any[];
  requirements: Section | null;
  paymentInfo: Section | null;
  contentPreview: Section | null;
  seo: any[];
  secondaryCta: any[];
  oldInfo: OldInfo;
}


export interface UseCourseDataResult {
  courseData: CourseData | null;
  loading: boolean;
  error: Error | null;
}
