type HeroItem  = {
  id: string;
  icon: "Users" | "Heart" | "Target";
  title: string;
  description: string;
}

export const HeroData: HeroItem[] = [
  {
    id: "content",
    icon: "Heart",
    title: "Authentic Content",
    description: "Real moments. Real people."
  },
  {
    id: "strategic",
    icon: "Target",
    title: "Strategic Approach",
    description: "Content with purpose."
  },
  {
    id: "family",
    icon: "Users",
    title: "Family Focused",
    description: "Content that converts."
  },
]