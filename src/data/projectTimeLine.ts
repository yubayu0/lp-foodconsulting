import heroImage from "../assets/hero-image.jpeg"


export interface ProjectTimeline {
  step: string;
  title: string;
  type: string;
  media: string;
  desc: string;
}


const projectTimeline : ProjectTimeline[] = [
  {
    step: "01",
    title: "Lorem ipsum dolor sit amet",
    type: "image",
    media: heroImage,
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    step: "02",
    title: "Lorem ipsum dolor sit amet ",
    type: "video",
    media: "https://www.w3schools.com/html/mov_bbb.mp4",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat condimentum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.",
  },
  {
    step: "03",
    title: "Lorem ipsum dolor sit amet",
    type: "image",
    media: heroImage,
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus. ",
  },
  {
    step: "04",
    title: "Lorem ipsum dolor sit amet",
    type: "image",
    media: heroImage,
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.",
  },
  {
    step: "05",
    title: "Lorem ipsum dolor sit amet",
    type: "image",
    media: heroImage,
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.",
  },
  {
    step: "06",
    title: "Lorem ipsum dolor sit amet",
    type: "image",
    media: heroImage,
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.",
  },
];


export default projectTimeline