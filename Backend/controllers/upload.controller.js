import cloudinary from "../config/cloudinary.config.js";

export const uploadImage = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No image selected" });
    }

    const result = await cloudinary.uploader.upload(file.path, {
      folder: "fliper-task"
    });

    res.status(200).json({
      imageUrl: result.secure_url
    });

  } catch (error) {
    res.status(500).json({ message: "Image upload failed" });
  }
};
