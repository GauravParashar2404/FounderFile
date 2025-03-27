import MasonryGrid from "./MasonryGrid";

export default {
  title: "Example/MasonryGrid",
  component: MasonryGrid,
};

const images = [
  "https://picsum.photos/300/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/600/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/400/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/500/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
];

export const Default = () => (
  <MasonryGrid>
    {images.map((src, index) => (
      <img key={index} src={src} alt={`Image ${index}`} className="w-full rounded-lg" />
    ))}
  </MasonryGrid>
);
