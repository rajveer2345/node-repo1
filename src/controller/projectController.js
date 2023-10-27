const project = require('../schema/projectSchema');


exports.add = async(req, res) => {
    try {

        // console.log(req.body);
        // const salt = await bcrypt.genSalt(10);
        // req.body.password = await bcrypt.hash(req.body.password, salt)
        const userData = new project(req.body);
        await userData.save();
        res.json({ message: "project added successfully", data: userData });
    } catch (err) {
        res.status(500).json(err)
    }
};
exports.getAll = async(req, res) => {


    try {

        let userData = await project.find().sort({createdAt:-1})

        res.json(userData);
    } catch (error) {
        console.log(error);
        if (!error.status) {
            error.status = 500;
        }

        res.status(error.status).json({ message: error.message });
    }

}

exports.getById = async(req, res) => {
    try {
        const data = await project.findById(req.params.id)
        res.json({ data: data })
    } catch (err) {
        res.status(500).json(err)
    }
}
exports.edit = async(req, res) => {
    try {


        const userData = await project.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.json({ message: "success", data: userData });
    } catch (err) {
        res.status(500).json(err)
    }
}
exports.delete = async(req, res) => {

    const userData = await project.findByIdAndDelete(req.params.id);
    try {
        if (!userData) {
            res.status(400).json({ message: "form not found." });
        }
        res.status(200).json({ message: 'success' });
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.getByUserId = async(req, res) => {
    try {
        const data = await project.findOne({ userId: req.params.id })
        res.json({ data: data })
    } catch (err) {
        res.status(500).json(err)
    }
}

//////aarti

exports.getByTitle = async(req, res) => {
    try {
        let title = new RegExp(req.params.title,'i')
        const data = await project.find({title:title})
        return res.json({ data: data })
    } catch (err) {
        res.status(500).json(err)
    }
}
