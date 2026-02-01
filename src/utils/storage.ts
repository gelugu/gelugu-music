export const getStaticImageUrl = (imageName: string, folderName: string = "gelugu-music") => {
    return `https://storage.googleapis.com/gelugu-static/${folderName}/${imageName}`;
}
