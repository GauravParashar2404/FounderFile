import MasonryGrid from "./MasonryGrid";

export default {
  title: "Example/MasonryGrid",
  component: MasonryGrid,
};

const images = [
  "https://loremflickr.com/320/140",
  "https://loremflickr.com/320/240",
  "https://loremflickr.com/320/140",
  "https://loremflickr.com/320/240",
  "https://loremflickr.com/120/240",
  "https://loremflickr.com/320/240",
  "https://loremflickr.com/320/340",
  "https://loremflickr.com/320/240",
  "https://loremflickr.com/620/240",
  "https://loremflickr.com/320/240",
  "https://loremflickr.com/320/240",
  "https://loremflickr.com/220/240",
  "https://loremflickr.com/320/240",
  "https://loremflickr.com/320/240",
  "https://loremflickr.com/320/240",
  "https://loremflickr.com/320/240",
  "https://loremflickr.com/320/240",
  "https://loremflickr.com/620/240",
  "https://loremflickr.com/320/240",
  "https://loremflickr.com/320/240",
  "https://loremflickr.com/320/240",
  "https://loremflickr.com/320/240",
  "https://loremflickr.com/320/240",
];

export const Default = () => (
  <MasonryGrid>
    {images.map((src, index) => (
      <img key={index} src={src} alt={`Image ${index}`} className="w-full rounded-lg" />
    ))}
  </MasonryGrid>
);

