import mongoose from "mongoose";

export interface Products extends mongoose.Document {
  name: string;
  href: string;
  image_url: string;
  desc: string;
  features: string[];
  application_area: string[];
  fragrance: string[];
}

const ProductsSchema = new mongoose.Schema<Products>({
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

export default mongoose.models.Product ||
  mongoose.model<Products>("Product", ProductsSchema);
