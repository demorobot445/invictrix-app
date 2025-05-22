type Data = {
  mediaUrl: string;
  romanNumber: string;
  tag: React.JSX.Element;
  tagDescription: string;
  description: string;
};

export const data: Data[] = [
  {
    mediaUrl: "/the-essence-video/0.mp4",
    romanNumber: "I",
    description:
      "At Invictrix, we believe all legacies begin with truth— the kind that endures, elevates, and becomes everything.",
    tag: (
      <>
        Timelessness.
        <br />
        Endurance.
      </>
    ),
    tagDescription: "The essence of what stays",
  },
  {
    mediaUrl: "/the-essence-video/1.mp4",
    romanNumber: "II",
    description:
      "At Invictrix, we believe all legacies are shaped through connection— the kind that transcends distance, evokes memory, and becomes everything.",
    tag: (
      <>
        Timelessness.
        <br />
        Endurance.
      </>
    ),
    tagDescription: "The essence of what stays",
  },
  {
    mediaUrl: "/the-essence-video/2.mp4",
    romanNumber: "III",
    description:
      "At Invictrix, trust is our compass-earned through discretion and upheld through integrity. We don't just offer access; we offer assurance. Trust transforms entry into a protected path toward legacy.",
    tag: (
      <>
        Safe passage.
        <br />
        Protection.
      </>
    ),
    tagDescription: "Partnership for what matters",
  },
  {
    mediaUrl: "/the-essence-video/3.mp4",
    romanNumber: "IV",
    description:
      "At Invictrix, ambition is not about status— it's about resonance. We listen intently, interpret with care, and respond with elegant precision shaping experiences that mirror your deepest aspirations",
    tag: (
      <>
        Precision.
        <br />
        Deep Listening.
      </>
    ),
    tagDescription: "Purpose driven exclusivity",
  },
];
