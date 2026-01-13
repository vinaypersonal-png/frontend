import Newsletter from "../models/newsletter.model.js";


export const getNewsletter = async(req, res) => {
    try {
        const newsletter = await Newsletter.find({});

        res.status(200).json(newsletter);
    } catch (error) {
        console.log(error.message);
    }
}

export const addNewsletter = async (req, res) => {

    try {
        const { email } = req.body;

        if ( !email ) {
            return res.status(400).json({ message: "All fields required" });
        }

        const newsletter = await Newsletter.create({
            email
        });
        res.status(201).json({
            message: "Added NewsLetter",
            data: newsletter
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}