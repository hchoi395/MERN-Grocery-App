import express from "express";
import { GroceryList } from "../models/groceryListModel.js";

const router = express.Router();

router.post("/", async (request, response) => {
    try {
        if (!request.body.name || !request.body.items) {
            return response.status(400).send({ message: "missing required fields: name, items" });
        }

        const newGroceryList = {
            name: request.body.name,
            items: request.body.items,
        };

        const groceryList = await GroceryList.create(newGroceryList);
        return response.status(200).send(groceryList);

    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

router.get("/", async (request, response) => {
    try {
        const groceryLists = await GroceryList.find({});
        return response.status(200).json({
            count: groceryLists.length,
            data: groceryLists
        });

    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

router.get("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const groceryList = await GroceryList.findById(id);
        return response.status(200).json(groceryList);

    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

router.put("/:id", async (request, response) => {
    try {
        if (!request.body.name || !request.body.items) {
            return response.status(400).send({ message: "missing required fields: name, items "});
        }

        const { id } = request.params;
        const result = await GroceryList.findByIdAndUpdate(id, {
            name: request.body.name,
            items: request.body.items,
        });

        if (!result) {
            return response.status(404).send({ message: error.message });
        }

        return response.status(200).send({ message: "successfully updated grocery list "});

    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

router.delete("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const result = await GroceryList.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).send({ message: error.message });
        }

        return response.status(200).send({ message: "successfully deleted grocery list" });

    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

export default router;