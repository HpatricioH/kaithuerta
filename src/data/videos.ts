import ergobaby360 from "../assets/videos/84ead5d58dcfc1894b2cd08c1bbbb731.mp4";
import montessoriKnives from "../assets/videos/6c4d2eae843bc7c47481bf379bc83d86.mp4";
import montessoriClimber from "../assets/videos/18d6573485546c6d66861bfdb61f775e.mp4";
import mixtiles from "../assets/videos/eeeac920da87242eb4f1866bb45e7073.mp4";

export interface Videos {
  src: string,
  title: string,
  description: string,
}

export const videosContent: Videos[] = [
  { src: ergobaby360, title: "Ergobaby 360", description: "Parenting/Family Organic" },
  { src: montessoriKnives, title: "Montessori Knives", description: "Parenting/Family Organic" },
  { src: montessoriClimber, title: "Montessori Climber", description: "Baby Products Organic" },
  { src: mixtiles, title: "Mixtiles", description: "Home Decor Organic" },
]