import Project from "../models/project.model.js";

export const getProject = async(req, res) => {
    try {
        const projects = await Project.find({});

        res.status(200).json(projects);
    } catch (error) {
        console.log(error.message);
    }
}

export const addProjects = async (req, res) => {

    try {
        const { image, name, description} = req.body;

        if (!image || !name || !description) {
            return res.status(400).json({ message: "All fields required" });
        }

        const project = await Project.create({
            image, name, description
        });
        res.status(201).json({
            message: "Project added sucessfully",
            data: project
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}