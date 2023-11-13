import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const groceryListSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        user: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export const GroceryList = mongoose.model("GroceryList", groceryListSchema);