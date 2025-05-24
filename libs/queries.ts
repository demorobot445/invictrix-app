export const HOMEPAGE_QUERY = `
  query HomePage {
    home(where: {id: "cmb1sc9qj09q107pmn0m8n9qo"}) {
      heroSection {
        id
        heading
        paragraphOne
        paragraphTwo
      }
      sectionTwo {
        id
        heading
        paragraphOne
        paragraphTwo
      }
      sectionThree {
        id
        heading
        paragraph
        video {
          url
        }
      }
      essenceHeading {
        headingFirstPart
        headingSecondPart
      }
      essences {
        hightlightText
        video {
          url
        }
        leftSide {
          id
          romanNumber
          subTagline
          tagline
        }
        rightSide {
          id
          description
          button
        }
      }
    }
  }
`;

export const INTENTIONPAGE_QUERY = `
query IntentionPage {
  intention(where: {id: "cmb20wa5k0gk507o9kmq6rx3l"}) {
    heroSection {
      id
      heading
      subHeading
    }
    sectionTwo {
      id
      heading
      paragraphOne
      paragraphThree
      paragraphTwo
    }
    contactSection {
      id
      heading
      email
      locations
      subHeading
    }
  }
}
`;

export const CIRCLECONTENT_QUERY = `
query CirclePageContents {
  circleContents {
    id
    heading
    paragraphOne
    paragraphTwo
    paragraphThree
    button
  }
}
`;

export const CIRCLECARDS_QUERY = `
query CirclePageCards {
  circleCards {
    id
    romanNumber
    heading
    description
    subHeading
    closeLine
    video {
      url
    }
  }
}
`;

export const PARTNERS_QUERY = `
query Partners {
  partners {
    companyLogo {
      id
      url
    }
  }
}
`;

export const PARTNERCONTENTS_QUERY = `
query PartnerContent {
  partnerContents {
    heading
    description
    id
  }
}
`;
