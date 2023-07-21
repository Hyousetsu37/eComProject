/* eslint-disable react/prop-types */
import {
  DirectoryItemContainer,
  BackgroundImage,
  DirectoryItemBody,
  DirectoryTitle,
  DirectoryText,
} from "./DirectoryItem.styles.jsx";

export function DirectoryItem({ category }) {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></BackgroundImage>
      <DirectoryItemBody>
        <DirectoryTitle>{title}</DirectoryTitle>
        <DirectoryText>Shop Now</DirectoryText>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
}
