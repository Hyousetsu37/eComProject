/* eslint-disable react/prop-types */
import { DirectoryItem } from "../DirectoryItem/Directorytem";
import { DirectoryContainer } from "./Directory.styles.jsx";

export function Directory({ categories }) {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </DirectoryContainer>
  );
}
