# 🚀 Lightbox Component

This code creates a page that displays image thumbnails and allows the user to zoom in on the images in a lightbox when the thumbnails are clicked. The user can navigate between the images in the lightbox and close it when desired.

Deploy Vercel - [LightBox Component](https://lightbox-component-nextjs-tailwindcss.vercel.app/) <br>

Photos Unsplash - [Nubelson Fernandes](https://unsplash.com/pt-br/@nublson)

<br>

<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />  <img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">

<img src="/src/assets/printImage1.PNG">

<br>

<img src="/src/assets/printImage2.PNG">

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## `page.tsx`

### `Module and component imports`

- Import several AVIF image files (Image01 to Image06) representing the images to be displayed in the lightbox.
- Import the `ThumbImage` component used to display thumbnails of the images on the main page.
- Import icons (Arrow and Close) used for navigating between images and closing the lightbox.
- Import the `Image` module from Next.js for displaying the images.
  
### `Component declaration`

- Define the `Home` function as a React component. It serves as the main page of the application.

### `State`

- Use the `useState` hook to declare two states:
  - `indexCurrent`: Stores the index of the current image being displayed in the lightbox.
  - `dataImgCurrent`: Stores the data of the current image being displayed. It can be one of the imported images.
 
### `isOpen`

-  Create an `isOpen` variable to check if the lightbox is open. It is true when dataImgCurrent is not null.
  
### `List of images`

- Create an array, `listImages`, containing the imported images.

### `handleClickOpenImage`

-  This function is called when the user clicks on an image thumbnail.
- It receives the index of the image as an argument and updates the `indexCurrent` and `dataImgCurrent` states based on the clicked index.

### `handleCloseLightBox`

- This function is called when the user clicks the close button in the lightbox.
- It resets `dataImgCurrent` to null, effectively closing the lightbox.

### `handleNavigate`

- This function is called when the user clicks the "next" or "previous" arrows in the lightbox.
- It takes a direction (next or previous) as an argument.
- Based on the direction, it calculates the new index of the image to be displayed.
- If the index is less than zero, it is set to the last index in the list of images.
- If the index is greater than or equal to the length of the list of images, it is set to zero.
- Then, it updates the `indexCurrent` and `dataImgCurrent` states with the new index.
  
### `Component rendering`

- The rendering comprises an HTML structure for the main page and the lightbox.
- On the main page, image thumbnails are displayed using the `ThumbImage` component.
- The lightbox is rendered only if `isOpen` is true.
- In the lightbox, images are displayed in an enlarged size, and the user can navigate between them using the "next" and "previous" arrows.
- A button is provided to close the lightbox.

## `thumbImage.tsx`

This file contains the ThumbImage component, which is used to render image thumbnails on the main page.

### `Imports`
- Import the Image module from Next.js.
- Define the ThumbImageProps interface to specify the properties accepted by the component.
 
### `ThumbImage component:`

- This component receives the `srcImage` (the image to be displayed) and onClick (the function to be executed when the user clicks on the thumbnail) as properties.
- The component renders a thumbnail of the image as a button.
- The thumbnail is displayed using the `Image` component from Next.js, with defined dimensions, quality, and hover effects.

In summary, this code creates a page that displays image thumbnails and allows the user to zoom in on the images in a lightbox when the thumbnails are clicked. The user can navigate between the images in the lightbox and close it when desired.
