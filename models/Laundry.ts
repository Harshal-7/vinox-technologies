import mongoose from "mongoose";

export interface Laundry extends mongoose.Document {
  name: string;
  href: string;
  image_url: string;
  desc: string;
}

const LaundrySchema = new mongoose.Schema<Laundry>({
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

export default mongoose.models.Laundry ||
  mongoose.model<Laundry>("Laundry", LaundrySchema);
