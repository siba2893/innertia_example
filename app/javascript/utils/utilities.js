// import imageCompression from "browser-image-compression";

export const genUUID = () => {
  return (
    Math.random()
      .toString(36)
      .substring(2) + new Date().getTime().toString(36)
  );
};

export const isEmpty = item => {
  if (item === undefined || item === null) return true;
  if (typeof item === "string" && item === "") return true;
  if (typeof item === "object" && Object.keys(item).length === 0) return true;
  if (Array.isArray(item) && item.length === 0) return true;
};

// export const handleImageUpload = async imageFile => {
//   console.log(imageFile);
//   // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
//   // console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);
//
//   const options = {
//     maxSizeMB: 1,
//     maxWidthOrHeight: 1920,
//     useWebWorker: true
//   };
//
//   try {
//     const compressedFile = await imageCompression(imageFile, options);
//     // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
//     // console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
//     // console.log('compressedFile', compressedFile); // smaller than maxSizeMB
//
//     return compressedFile;
//   } catch (error) {
//     console.log(error, imageFile);
//   }
// };

const buildFormData = async (formData, data, parentKey) => {
  if (
    data &&
    typeof data === "object" &&
    !(data instanceof Date) &&
    !(data instanceof File) &&
    !(data instanceof Blob) &&
    !(data instanceof Array)
  ) {
    for (const key of Object.keys(data)) {
      await buildFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key
      );
    }
  } else if (data instanceof Array) {
    data.forEach((element, index) => {
      const tempFormKey = `${parentKey}[${index}]`;
      buildFormData(formData, element, tempFormKey);
    });
  } else if (data && (data instanceof File || data instanceof Blob) && data.type !== "audio/mpeg") {
    let compressedFile = await handleImageUpload(data);
    formData.append(parentKey, compressedFile);
  } else {
    const value = data == null ? "" : data;
    formData.append(parentKey, value);
  }
};

export const jsonToFormData = async (data, rootKey) => {
  try {
    const formData = new FormData();
    let tempData = {};

    if (rootKey) {
      tempData[rootKey] = { ...data };
    } else {
      tempData = { ...data };
    }

    await buildFormData(formData, tempData);

    return formData;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const displayFormData = formData => {
  for (const pair of formData.entries()) {
    console.log(pair);
  }
};

export const b64toBlob = async (
  options = { base64Complete: null, base64: null, type: "image/png" }
) => {
  let result = null;
  if (options.base64Complete) {
    result = await fetch(options.base64Complete).then(res => res.blob());
  } else {
    result = await fetch(`data:${options.type};base64,${options.base64}`)
      .then(res => res.blob());
  }
  return result;
};
