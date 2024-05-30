"use server";

import dbConnect from "@/lib/dbConnect";

import ProductsCategory from "@/models/ProductsCategory";

export async function getProductsCategory() {
  try {
    await dbConnect();

    const products = await ProductsCategory.find({});

    return { products };
  } catch (error: any) {
    return { errMsg: error.message };
  }
}
