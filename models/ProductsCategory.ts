import mongoose from "mongoose";

export interface ProductsCategory extends mongoose.Document {
  title: string;
  image_url: string;
  href: string;
}

const ProductsCategorySchema = new mongoose.Schema<ProductsCategory>({
  title: {
    type: String,
    required: [true, "Please provide a title for this product category."],
  },
  image_url: {
    type: String,
    required: [true, "Please provide an image url for this product category."],
  },
  href: {
    type: String,
    required: [true, "Please provide the href for this product category"],
  },
});

export default mongoose.models.ProductsCategory ||
  mongoose.model<ProductsCategory>("ProductsCategory", ProductsCategorySchema);
