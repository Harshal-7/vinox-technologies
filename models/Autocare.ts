import mongoose from "mongoose";

export interface Autocare extends mongoose.Document {
  name: string;
  href: string;
  image_url: string;
  desc: string;
}

const AutocareSchema = new mongoose.Schema<Autocare>({
  name: {
    type: String,
    required: [true, "Please provide a name for this product."],
  },
  href: {
    type: String,
    required: [true, "Please provide the href for this product"],
  },
  image_url: {
    type: String,
    required: [true, "Please provide an image url for this product."],
  },
  desc: {
    type: String,
  },
});

export default mongoose.models.Autocare ||
  mongoose.model<Autocare>("Autocare", AutocareSchema);

// { "name": "Lemon Hand Wash", "href": "lemon-hand-wash","category": "handwash","image_url": "homecare/handwash/yet9eijlj48zlopenu8p","desc":"" }
// { "name": "Ever Fresh Hand Wash", "href": "ever-fresh-hand-wash","category": "handwash","image_url": "homecare/handwash/gv5df3lmjeh8rvqgc7bo","desc":"" }
// { "name": "Sweet Berry Hand Wash", "href": "sweet-berry-hand-wash","category": "handwash","image_url": "homecare/handwash/ttsweybmqjgomolaoxnp","desc":"" }
// { "name": "Tulsi Hand Wash", "href": "tulsi-hand-wash","category": "handwash","image_url": "homecare/handwash/d7ekngrrgh4jbxekvusx","desc":"" }
// { "name": "Sandal Hand Wash", "href": "sandal-hand-wash","category": "handwash","image_url": "homecare/handwash/p1ffsntrs61z3jd6o3ez","desc":"" }
