import {
  Smile,
  SquareDashedText,
  Zap,
  Palette,
  RefreshCcw,
  type AstroComponent
} from '@lucide/astro';

export interface VideosComeWith {
  title: string,
  description: string,
  icon: AstroComponent
}

export const videosComeWith: VideosComeWith[] = [
  {
    title: "Full Authenticity",
    description: "Being completely myself to build genuine trust and connection with your audience.",
    icon: Smile
  },
  {
    title: "Strategic Research",
    description: "Market research persuasive copy, professional scripting, and high-converting CTAs.",
    icon: SquareDashedText
  },
  {
    title: "Scroll-stopping Edits",
    description: "Visual hooks engineered based on human psychology and attention dynamics.",
    icon: Zap
  },
  {
    title: "Brand Tone Integrity",
    description: "Ensuring every frame feels like a natural extension of your unique brand identity.",
    icon: Palette
  },
  {
    title: "Free Revision",
    description: "One free revision per video to ensure absolute satisfaction and peace of mind.",
    icon: RefreshCcw
  },
]