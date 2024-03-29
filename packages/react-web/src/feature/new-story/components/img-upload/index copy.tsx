import * as React from 'react';
import { ButtonR } from '@eevee/react-button';
import { CopyLink, Delete, Image } from '@components/icons/index';
import { useStyles } from './styles';

const convertBase64 = (file: Blob) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };
    fileReader.onerror = error => {
      reject(error);
    };
  });
};

export const ImgUpload = () => {
  const styles = useStyles();
  const [selectedImages, setSelectedImages] = React.useState<string[]>([]);

  const [selectedImageList, setSelectedImageList] = React.useState<
    {
      src: string;
      base64: string;
    }[]
  >([]);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const onUpLoad = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const onSelectFile = async (event: React.FormEvent<HTMLInputElement>) => {
    const selectedFiles = (event.target as HTMLInputElement).files;
    if (!selectedFiles) {
      return;
    }

    const selectedFilesArray = Array.from(selectedFiles);

    // const imagesArray = await Promise.all(
    //   selectedFilesArray.map(async file => {
    //     const base64 = (await convertBase64(file)) as string;
    //     return {
    //       src: URL.createObjectURL(file),
    //       base64,
    //     };
    //   }),
    // );

    // setSelectedImageList(previous => previous.concat(imagesArray));

    const imagesArray = selectedFilesArray.map(file => {
      return URL.createObjectURL(file);
    });
    setSelectedImages(previousImages => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    (event.target as HTMLInputElement).value = '';
  };

  function deleteHandler(image: string) {
    setSelectedImages(selectedImages.filter(e => e !== image));
    URL.revokeObjectURL(image);

    // setSelectedImageList(selectedImageList.filter(e => e.src !== image));
    // URL.revokeObjectURL(image);
  }

  function copyBase64(base64: string) {
    navigator.clipboard.writeText(base64);
  }

  return (
    <section className={styles.section}>
      <div className={styles.label}>
        <ButtonR onClick={onUpLoad} icon={<Image />} />
        <p>
          + Add images (<span style={{ fontSize: '14px' }}>optional</span>)
        </p>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        name="images"
        onChange={onSelectFile}
        accept="image/png , image/jpeg, image/webp"
        multiple
      />
      <input className={styles.input} type="file" multiple />
      {selectedImages &&
        selectedImages.map((image, index) => {
          return (
            <div key={image} className={styles.image}>
              <img src={image} height="100" width="auto" alt="upload" />
              <ButtonR className={styles.copy} onClick={() => copyBase64(image)} icon={<CopyLink />} />
              <ButtonR className={styles.delete} onClick={() => deleteHandler(image)} icon={<Delete />} />
            </div>
          );
        })}
    </section>
  );
};

/**
  {selectedImageList &&
        selectedImageList.map((image, index) => {
          return (
            <div key={image.src} className={styles.image}>
              <img src={image.src} height="100" width="auto" alt="upload" />
              <ButtonR className={styles.copy} onClick={() => copyBase64(image.base64)} icon={<CopyLink />} />
              <ButtonR className={styles.delete} onClick={() => deleteHandler(image.src)} icon={<Delete />} />
            </div>
          );
        })}




 */
