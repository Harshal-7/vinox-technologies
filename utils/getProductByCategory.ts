"use server";

import dbConnect from "@/lib/dbConnect";
import Autocare from "@/models/Autocare";
import Homecare from "@/models/Homecare";
import Laundry from "@/models/Laundry";

export async function getHomecareProductsByCategory(category: string) {
  try {
    await dbConnect();

    const homecareProducts = await Homecare.find({ category });

    return { homecareProducts };
  } catch (error: any) {
    return { errMsg: error.message };
  }
}

export async function getHomecareProductsByCategoryAndId(
  category: any,
  id: any
) {
  try {
    await dbConnect();

    const homecareProducts = await Homecare.find({ category, href: id });

    return { homecareProducts };
  } catch (error: any) {
    return { errMsg: error.message };
  }
}

export async function getAutocareProducts() {
  try {
    await dbConnect();

    const autocareProducts = await Autocare.find({});

    return { autocareProducts };
  } catch (error: any) {
    return { errMsg: error.message };
  }
}

export async function getAutocareProductsById(id: any) {
  try {
    await dbConnect();

    const autocareProductDetails = await Autocare.find({ href: id });

    return { autocareProductDetails };
  } catch (error: any) {
    return { errMsg: error.message };
  }
}

export async function getLaundryProducts() {
  try {
    await dbConnect();

    const laundryProducts = await Laundry.find({});

    return { laundryProducts };
  } catch (error: any) {
    return { errMsg: error.message };
  }
}

export async function getLaundryProductsById(id: any) {
  try {
    await dbConnect();

    const laundryProductDetails = await Laundry.find({ href: id });

    return { laundryProductDetails };
  } catch (error: any) {
    return { errMsg: error.message };
  }
}
