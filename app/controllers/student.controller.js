const db = require('../models')
const Student = db.student;
const Setting = db.setting;
const University = db.university;

exports.findAll = (req, res) => {
    try {
    Student.findAll({
        attributes: ["id","name","degree"],
        include: [{
            model: Setting,
            attributes: ["theme"]
        },
        {
            model: University,
            attributes: ["name"]
        }
        ]
    })
    .then(student => {
        //res.json(student);
        res.send(student);
        //res.status(200).json(student);
    })
    .catch( error => {
        console.log(error.message)
    });
    }catch(e){
        console.log(e);
    }
}

exports.create = (req, res) => {
    try {
        if(!req.body.name || !req.body.course){
            res.status(400).json({message:"can't empty!"});
            return;
        }
        const studentObj = {
        name: req.body.name,
        course: req.body.course,
        universityId: req.body.universityId
    }
    University.create(studentObj)
    .then(data => {
        //Insert to setting
        Setting.create({
            theme: req.body.theme,
            studentId: data.id
        });
        res.status(200).json({message: "Student created"});
    })
    .catch(error => {
        res.status(400).json({message: "error occured!"});
    });   
    }catch(error){
        res.sendStatus(500);
    }
};

exports.findOne =(req, res) => {
    try {
        const id = req.params.id;
        Student.findByPk(id, {
            include: [
                {
                    model: University,
                    attributes: ["name"]
                }
            ]
        })
        .then(data => {
            res.status(200).json(data);
        })
        .catch(error => {
            res.status(400).json({ message: error.message })
        });
    }catch(error){
        //console.log(error.message);
        res.status(500).json({ message: error.message })
    }
}

exports.update = (req, res) => {
    try {
    const id = req.params.id
        
    const studentObj = {
        name: req.body.name,
        course: req.body.course
    }
    Student.update(studentObj, {
        where: { id:id },
    })
    .then((data) => {
        if(data == 1){
        res.status(200).json({ message: "Update Successfully" });
        }
    })
    .catch(error => {
        res.status(400).json({ message: error.message });
    });
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}
exports.delete = (req, res) => {
    try {
        Student.destroy({ where: {id: req.params.id}})
        .then(data => {
            if(data == 1){
                res.status(200).json({ message: "Delete Successfully" });
            }
        })
        .catch(error => {
            res.status(400).json({ message: error.message })
        })
    }catch(error){
        res.status(500).json({ message: error.message })
    }
};