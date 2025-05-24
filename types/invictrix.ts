export interface HomeHeroSection {
  id: string;
  heading: string;
  paragraphOne: string;
  paragraphTwo: string;
}

export interface HomeSectionTwo {
  id: string;
  heading: string;
  paragraphOne: string;
  paragraphTwo: string;
}

export interface HomeSectionThree {
  id: string;
  heading: string;
  paragraph: string;
  video: Video;
}

export interface Video {
  url: string;
}

export interface EssenceHeading {
  headingFirstPart: string;
  headingSecondPart: string;
}

export interface EssenceLeftSide {
  id: string;
  romanNumber: string;
  subTagline: string;
  tagline: string;
}
export interface EssenceRightSide {
  id: string;
  description: string;
  button: string;
}

export interface Essence {
  hightlightText: string;
  video: Video;
  leftSide: EssenceLeftSide;
  rightSide: EssenceRightSide;
}

export interface HomePageData {
  heroSection: HomeHeroSection;
  sectionTwo: HomeSectionTwo;
  sectionThree: HomeSectionThree;
  essenceHeading: EssenceHeading;
  essences: Essence[];
}

// types/intention.ts

export interface IntentionHeroSection {
  id: string;
  heading: string;
  subHeading: string;
}

export interface IntentionContactSection {
  id: string;
  heading: string;
  email: string;
  locations: string;
  subHeading: string;
}

export interface IntentionSectionTwo {
  id: string;
  heading: string;
  paragraphOne: string;
  paragraphTwo: string;
  paragraphThree: string;
}

export interface IntentionPageData {
  heroSection: IntentionHeroSection;
  contactSection: IntentionContactSection;
  sectionTwo: IntentionSectionTwo;
}

export interface CircleContent {
  id: string;
  heading: string;
  paragraphOne: string;
  paragraphTwo: string;
  paragraphThree: string;
  button: string;
}

export interface CircleCard {
  id: string;
  romanNumber: string;
  heading: string;
  description: string;
  subHeading: string;
  closeLine: string;
  video: {
    url: string;
  };
}

export interface Partners {
  companyLogo: {
    id: string;
    url: string;
  };
}

export interface PartnerContents {
  id: string;
  heading: string;
  description: string;
}
