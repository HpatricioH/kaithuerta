type ContentItem = {
  id: string;
  icon: "Magnet" | "Frown" | "Lightbulb" | "Star" | "Crosshair";
  title: string;
  description: string;
  points?: string[];
  note?: string;
};

export const buildContentData: ContentItem[] = [
    {
        id: "hook",
        icon: "Magnet",
        title: "Hook",
        description:
            "A powerful hook consists of these elements to stop the scroll in less than 3 seconds.",
        points: [
            "visual hook",
            "text hook",
            "audio + music hook",
            "caption hook",
        ],
    },
    {
        id: "problem",
        icon: "Frown",
        title: "Problem",
        description:
            "Make the viewer feel seen by highlighting a real, everyday pain point that your product solves without overcomplicating it.",
    },
    {
        id: "solution",
        icon: "Lightbulb",
        title: "Solution",
        description:
            "Show your product in action, solving the problem in a way that feels natural and effortless to the viewer.",
        note: "This is where belief starts to build and where your brand becomes the hero.",
    },
    {
        id: "benefits",
        icon: "Star",
        title: "Benefits",
        description:
            "Now we reinforce the why & how, including unique features, emotional payoff, or lifestyle shift.",
        note: "I showcase benefits in a way that feels fun, modern, and relatable.",
    },
    {
        id: "cta",
        icon: "Crosshair",
        title: "CTA",
        description:
            "Close strong, and drive real action. Every video ends with a confident but natural call to action so viewers know exactly what to do next (without feeling sold to).",
    },
]