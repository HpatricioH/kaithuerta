type Partnership = {
  id: string;
  icon: "MessagesSquare" | "Heart" | "Target";
  title: string;
  description: string;
}

export const PartnershipData: Partnership[] = [
  {
    id: "conversation",
    icon: "MessagesSquare",
    title: "Real Conversation",
    description: "Let's talk about your goals and vision."
  },
  {
    id: "strategy",
    icon: "Heart",
    title: "Strategy First",
    description: "Custom content ideas that fit your brand."
  },
  {
    id: "impact",
    icon: "Target",
    title: "Measurable Impact",
    description: "Content that connects, converts, and drives results."
  },
]