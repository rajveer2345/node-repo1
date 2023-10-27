const type = require('../schema/typeSchema');

exports.edit = async(req, res) => {
    try {
        const typeData = await type.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.json({ message: 'updated successfully', data: typeData });
    } catch (err) {
        res.status(500).json(err)
    }
}


exports.getAll = async(req, res) => {
    try {

        let userData = await type.find().sort({createdAt:-1})

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
        const data = await type.findById(req.params.id)
        res.json({ data: data })
    } catch (err) {
        res.status(500).json(err)
    }
}
exports.delete = async(req, res) => {

    const typeData = await type.findByIdAndDelete(req.params.id);
    try {
        if (!typeData) {
            res.status(400).json({ message: "form not found." });
        }
        res.status(200).json({ message: 'success' });
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.add = async(req, res) => {
    try {

        // console.log(req.body);
        // const salt = await bcrypt.genSalt(10);
        // req.body.password = await bcrypt.hash(req.body.password, salt)
        const userData = new type(req.body);
        await userData.save();
        res.json({ message: "type added successfully", data: userData });
    } catch (err) {
        res.status(500).json(err)
    }
};