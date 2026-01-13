import Contact from "../models/contact.model.js";

export const getContact = async(req, res) => {
    try {
        const contacts = await Contact.find({});

        res.status(200).json(contacts);
    } catch (error) {
        console.log(error.message);
    }
}

export const addContact = async (req, res) => {

    try {
        const { fullName, email, mobile, city} = req.body;

        if (!fullName || !email || !mobile || !city) {
            return res.status(400).json({ message: "All fields required" });
        }

        const contact = await Contact.create({
            fullName, email, mobile, city
        });
        res.status(201).json({
            message: "Contact added sucessfully",
            data: contact
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}