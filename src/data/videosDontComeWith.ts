export interface VideosDontComeWith {
  title: string,
  description: string,
  icon: 'MicOff' | 'LocateOff' | 'CctvOff' | 'TimerOff' | 'Copy' | 'Megaphone';
}

export const videosDontComeWith: VideosDontComeWith[] = [
  {
    title: "Stiff Voiceovers",
    description: "No inauthentic delivery or robotic AI voicesovers that kill engagement.",
    icon: "MicOff"
  },
  {
    title: "No strategy",
    description: 'No "pretty videos" that lack marketing logic or conversation goals.',
    icon: "LocateOff"
  },
  {
    title: "Low Quality",
    description: "Eliminating shaky or low-quality footage that cheapens brand perception.",
    icon: "CctvOff"
  },
  {
    title: "Poor Pacing",
    description: "Moving away from lazy edits that fail to hold viewer attention.",
    icon: "TimerOff"
  },
  {
    title: "Copy-Paste Concepts",
    description: "Every project gets intention and creativity, never generic templates.",
    icon: "Copy"
  },
  {
    title: "Pushy Sales",
    description: "No overly salesy ad styles that turn off today's sophisticated consumers.",
    icon: "Megaphone"
  },
]