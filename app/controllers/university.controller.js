const db = require("../models");
const Student = db.student;
const University = db.university;

exports.findAll = (req, res) => {
    University.findAll({
        include: [{
            model: Student,
            attributes: ["name","course"]
        }]
    })
    .then(data => {
        res.status(200).json(data);
    })
    .catch(error => {
        res.status(400).json({ message: error.message });
    })
};