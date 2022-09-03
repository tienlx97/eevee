import * as React from 'react';
import { ButtonR } from '@eevee/react-button';
import { Delete, Image } from '@components/icons/index';
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

type ImgUploadProps = {
  selectedImageList: string[];
  setSelectedImageList: React.Dispatch<React.SetStateAction<string[]>>;
};

export const ImgUpload = ({ selectedImageList, setSelectedImageList }: ImgUploadProps) => {
  const styles = useStyles();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onUpLoad = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  function copy(str: string) {
    navigator.clipboard.writeText(str);
  }

  const onSelectFile = async (event: React.FormEvent<HTMLInputElement>) => {
    const selectedFiles = (event.target as HTMLInputElement).files;
    if (!selectedFiles) {
      return;
    }

    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = await Promise.all(
      selectedFilesArray.map(async file => {
        const base64 = (await convertBase64(file)) as string;
        return base64;
      }),
    );
    setSelectedImageList(previous => previous.concat(imagesArray));

    // FOR BUG IN CHROME
    (event.target as HTMLInputElement).value = '';
  };

  function deleteHandler(image: string, index: number) {
    // setSelectedImageList(selectedImageList.filter(e => e !== image));

    const arr = [...selectedImageList];
    arr.splice(index, 1);
    setSelectedImageList(arr);

    URL.revokeObjectURL(image);
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

      <div className={styles.images}>
        {selectedImageList &&
          selectedImageList.map((image, index) => {
            return (
              <div key={image} className={styles.image}>
                <img onClick={() => copy(index.toString())} src={image} height="100" width="auto" alt="upload" />
                <ButtonR className={styles.delete} onClick={() => deleteHandler(image, index)} icon={<Delete />} />
              </div>
            );
          })}
      </div>
    </section>
  );
};
