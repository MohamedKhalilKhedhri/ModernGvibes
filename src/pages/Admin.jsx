import React, { useState } from "react";
import camHolder from "../assets/camHolder.jpg"; // Importing camHolder image
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { storage, db, app } from "../Config/Firebase";
import { getAuth, signOut } from "firebase/auth";

function Admin() {
  const [data, setData] = useState({ video: null, VideoPlaceHolder: null });
  const [image, setImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState({
    image: 0,
    video: 0,
    VideoPlaceHolder: 0,
  });
  const [Description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const [mediaType, setMediaType] = useState("vid");
  const [contentType, setContentType] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [fieldsError, setFieldsError] = useState(false);
  const isValidFile = (file) => file instanceof File;

  const uploadFile = (fileToUpload, key = null) => {
    return new Promise((resolve, reject) => {
      setUploading(true);
      const storageRef = ref(storage, fileToUpload.name);
      const uploadTask = uploadBytesResumable(storageRef, fileToUpload);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress((prev) => ({ ...prev, [key]: progress }));
        },
        (error) => {
          console.error(error);
          setUploading(false);
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            if (mediaType === "vid") {
              setData((prev) => ({ ...prev, [key]: downloadURL }));
            } else if (mediaType === "img") {
              setImage(downloadURL);
            }
            setUploading(false);
            resolve();
          });
        }
      );
    });
  };

  const uploadImage = async () => {
    if (image) {
      await uploadFile(image, "image");
    } else {
      alert("Please provide an image.");
    }
  };

  const uploadVideo = async () => {
    if (data.video && data.VideoPlaceHolder) {
      for (const [key, file] of Object.entries(data)) {
        if (isValidFile(file)) {
          await uploadFile(file, key);
        }
      }
    } else {
      alert("Please provide both video and video placeholder.");
    }
  };

  const [loading, setLoading] = useState(false);
  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      (mediaType === "vid" && (!data.video || !data.VideoPlaceHolder)) ||
      (mediaType === "img" && !image) ||
      !contentType
    ) {
      setFieldsError(true);
      setLoading(false);
      setSubmissionStatus("Please fill all required fields.");
      return;
    }

    if (
      (mediaType === "vid" && uploadProgress.video < 100 && uploadProgress.VideoPlaceHolder < 100) ||
      (mediaType === "img" && uploadProgress.image < 100)
    ) {
      setFieldsError(true);
      setLoading(false);
      setSubmissionStatus("Please upload your media or wait till it is fully uploaded.");
      return;
    }

    try {
      setFieldsError(false);

      await addDoc(collection(db, "home"), {
        resources: mediaType === "vid" ? data : { image },
        Description,
        mediaType,
        contentType,
      });

      setData({ video: null, VideoPlaceHolder: null });
      setImage(null);
      setDescription("");
      setUploadProgress({ image: 0, video: 0, VideoPlaceHolder: 0 });
      setContentType("");
      setMediaType("vid");
      setSubmissionStatus("Data sent successfully!");
      setTimeout(() => setSubmissionStatus(""), 5000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setSubmissionStatus("Error sending data. Please try again.");
      setTimeout(() => setSubmissionStatus(""), 5000);
    } finally {
      setLoading(false);
    }
  };
// sign out
  const auth = getAuth(app)
  const handleLogout = async () => {
    try {
      await signOut(auth); 
      window.location.href = "/ModernGvibes/";  
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col text-neutral-300 text-sm md:text-base">
      <div className="flex gap-5 shadow-lg w-full max-w-[500px] p-5 border-2 rounded-md border-slate-200 mt-24 mx-auto">
        <div className="flex flex-col w-28 items-center gap-3">
          {mediaType === "vid" ? (
            <>
              <div className="w-full flex flex-col gap-2 items-center">
                <label
                  htmlFor="video"
                  className={`${fieldsError && (!data.video || uploadProgress.video < 100) ? "text-red-600" : ""}`}
                >
                  Video:
                 {
                        data.video ? (
                        <video src={isValidFile(data.video) ? URL.createObjectURL(data.video) : data.video} className="w-full aspect-square" alt="Preview" />
                        ) : (
                        <img src={camHolder} alt="Preview" className="w-full aspect-square" />
                        )
          
                 }
                </label>
                <input
                  type="file"
                  id="video"
                  onChange={(e) => {
                    const selectedFile = e.target.files[0];
                    setData({ ...data, video: selectedFile });
                  }}
                  style={{ display: "none" }}
                />
                {uploadProgress.video > 0 && (
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${uploadProgress.video}%` }}>
                      {Math.floor(uploadProgress.video)}%
                    </div>
                  </div>
                )}
              </div>

              <div className="w-full flex flex-col gap-2 items-center">
                <label
                  htmlFor="VideoPlaceHolder"
                  className={`${fieldsError && (!data.VideoPlaceHolder || uploadProgress.VideoPlaceHolder < 100) ? "text-red-600" : ""}`}
                >
                  PH:
                  <img
                    src={data.VideoPlaceHolder ? isValidFile(data.VideoPlaceHolder) ? URL.createObjectURL(data.VideoPlaceHolder) : data.VideoPlaceHolder : camHolder}
                    alt="video placeholder preview"
                    className="w-full aspect-square"
                  />
                </label>
                <input
                  type="file"
                  id="VideoPlaceHolder"
                  accept="image/jpeg, image/png, image/webp"
                  onChange={(e) => {
                    const selectedFile = e.target.files[0];
                    setData({ ...data, VideoPlaceHolder: selectedFile });
                  }}
                  style={{ display: "none" }}
                />
                {uploadProgress.VideoPlaceHolder > 0 && (
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${uploadProgress.VideoPlaceHolder}%` }}>
                      {Math.floor(uploadProgress.VideoPlaceHolder)}%
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="w-full flex flex-col gap-2 items-center">
              <label htmlFor="image" className={`${fieldsError && !image ? "text-red-600" : ""}`}>
                Image:
                <img src={image ? isValidFile(image) ? URL.createObjectURL(image) : image : camHolder} alt="image preview" className="w-24 h-24 object-cover" />
              </label>
              <input
                type="file"
                id="image"
                accept="image/jpeg, image/png, image/webp"
                onChange={(e) => {
                  const selectedFile = e.target.files[0];
                  setImage(selectedFile);
                }}
                style={{ display: "none" }}
              />
              {uploadProgress.image > 0 && (
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: `${uploadProgress.image}%` }}>
                    {Math.floor(uploadProgress.image)}%
                  </div>
                </div>
              )}
            </div>
          )}

          <button
            className="py-2 px-4 bg-black text-white rounded-md active:scale-95 transition-all"
            disabled={uploading}
            onClick={mediaType === "vid" ? uploadVideo : uploadImage}
          >
            {uploading ? "Loading..." : "Upload"}
          </button>
        </div>

        <div className="flex-1">
          <form onSubmit={handleAdd}>
            <div className="flex gap-3">
              <div className="flex flex-col gap-3 flex-1">
                <label>Media type</label>
                <select
                  value={mediaType}
                  onChange={(e) => setMediaType(e.target.value)}
                  className="text-neutral-900 border border-slate-300 p-3"
                >
                  <option value="vid">Video</option>
                  <option value="img">Image</option>
                </select>
              </div>
              <div className="flex flex-col gap-3 flex-1">
                <label className={`${fieldsError && !contentType ? "text-red-600" : ""}`}>Content type</label>
                <div>
                  <select
                    value={contentType}
                    onChange={(e) => setContentType(e.target.value)}
                    className={`text-neutral-900 w-full border ${fieldsError && !contentType ? "border-red-600 text-red-600" : "border-slate-300 "} p-3`}
                  >
                    <option value="">None</option>
                    <option value="couples">Couples</option>
                    <option value="products">Products</option>
                    <option value="fashion">Fashion</option>
                    <option value="commercials">Commercials</option>
                  </select>
                  {fieldsError && !contentType && (<p className="text-red-600">This field is required!</p>)}
                </div>
              </div>
            </div>
            <div className="mt-3 flex flex-col gap-3">
              <label className={``}>Description</label>
              <textarea
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
                className="text-neutral-900 border border-slate-300 rounded-md text-sm shadow-sm p-3 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>
            <button
              type="submit"
              className="mt-3 bg-blue-500 rounded-md text-white py-2 px-5 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 cursor-pointer"
              disabled={loading}
            >
              {loading ? "Loading..." : "Send"}
            </button>
            {submissionStatus && (
              <p className={`mt-2 ${submissionStatus.includes("success") ? "text-green-500" : "text-red-600"}`}>
                {submissionStatus}
              </p>
            )}
          </form>
        </div>
      </div>
      <p className="text-center text-stone-500">
        Please fill the Media Type first <span className="inline-block text-sm">(default: video)</span>
      </p>
      <button type="button" className="py-3 px-10 bg-white text-main" onClick={handleLogout}>LogOut</button>
    </div>
  );
}

export default Admin;
