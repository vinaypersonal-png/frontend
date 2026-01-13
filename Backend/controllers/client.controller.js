import Client from "../models/client.model.js";

export const getClient = async(req, res) => {
    try {
        const clients = await Client.find({});

        res.status(200).json(clients);
    } catch (error) {
        console.log(error.message);
    }
}

export const addClient = async (req, res) => {

    try {
        const { image, name, description, designation} = req.body;

        if (!image || !name || !description || !designation) {
            return res.status(400).json({ message: "All fields required" });
        }

        const client = await Client.create({
            image, name, description, designation
        });
        res.status(201).json({
            message: "Project added sucessfully",
            data: client
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}