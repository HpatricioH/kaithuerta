type AboutMeData = {
  id: string;
  icon: "Video" | "Heart" | "Target";
  title: string;
  description: string;
}

export const AboutMeData: AboutMeData[] = [
  {
    id: "creator",
    icon: "Video",
    title: "UGC Creator",
    description: "Authentic videos that build trust and inspire real action."
  },
  {
    id: "family",
    icon: "Heart",
    title: "Family Focused",
    description: "Real moments, real lives, real connection with your audience."
  },
  {
    id: "results",
    icon: "Target",
    title: "Results Driven",
    description: "Content designed to engage, convert, and drive results."
  },
]