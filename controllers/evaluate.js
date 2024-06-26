import { Evaluate } from "../models/Evaluate.js"
import readXlsxFile from "read-excel-file/node"
import pdf from 'pdf-creator-node'
import Handlebars from 'handlebars'
import fs from 'fs'
import { Student } from "../models/Student.js"
import { User } from "../models/User.js"

 Handlebars.registerHelper("inc", function (value, options) {
   return parseInt(value) + 1;
 });

var template = fs.readFileSync('./template/awardsheet.html', 'utf-8')
export const submitResult = (req, res) => {
    
    //Get Values From Form
    const { value, file, subjectName, subjectCode, semester, parameters } = req.body
    //Split The Base64
    let base64Image = file.split(';base64,').pop();
    Evaluate
        .findOne({ _id: value, uploaded: false })
        .then((eva) => {
            //Find If It Exits
            if(!eva)
                return res.status(400).json({
                    error: true,
                    errorMessage: "Can't find the batch OR Result already uploaded!"
                })
                //Convert Base64 to original file
                fs.writeFile(`temp/${value}.xlsx`, base64Image, { encoding: 'base64' }, (err) => {
                    //If No Error
                    if(!err) {
                        Evaluate.updateOne({ 
                            _id: value 
                        }, { 
                            $set: { 
                                parameters: parameters
                            }
                        }).then((update) => {
                            if(!update) 
                                return res.status(400).json({
                                    error: true,
                                    message: 'Error At database'
                                })

                            //Read the xlsx file
                            readXlsxFile(fs.createReadStream(`./temp/${value}.xlsx`)).then((rows) => {
                                //removes the first row
                                rows.shift()
                                //mapping the rows
                                rows.map((row, index) => {
                                    //find if the student exits
                                    Student.findOne({ sapId: row[1] })
                                        .then((student) => {
                                            if(!student) {
                                                let finalmark = (row[4] * parameters.internalAssessmentPercentage / 100) + (row[5] * parameters.endsemPercentage / 100) + (row[3] * parameters.midsemPercentage / 100)
                                                let grade = ''
                                                parameters.grade.map((item) => {
                                                    if(item.max >= finalmark && item.min >= finalmark) {
                                                        grade = item.grade
                                                    }
                                                })
                                                let news =  {
                                                    name: row[2],
                                                    sapId: row[1],
                                                    rollNumber: row[0],
                                                    grades: [
                                                        {
                                                            subjectName: subjectName,
                                                            subjectCode: subjectCode,
                                                            semester: semester,
                                                            internalMarks: row[4],
                                                            endSemMarks: row[5],
                                                            midSemMarks: row[3],
                                                            evaluation: value,
                                                            finalMarks: Math.floor(finalMarks),
                                                            grade: grade
                                                        }
                                                    ]
                                                }
                                                let newStu = new Student(news)
                                                newStu.save()
                                                //once it reaches the end send the response
                                                if(index == rows.length - 1) {
                                                    Evaluate
                                                        .updateOne({ _id: value }, { $set: { uploaded: true } })
                                                        .exec()
                                                        .then((done) => {
                                                            res.json({
                                                                success: true,
                                                                message: "Result Uploaded!"
                                                            })
                                                        })
                                                        .catch((error) => {
                                                            res.status(400).json({
                                                                error: true,
                                                                errorMessage: error
                                                            })
                                                        })
                                                    
                                                }
                
                                            }else {
                                                //if exits just push the subject grades
                                                let grades = {
                                                    subjectName: subjectName,
                                                    subjectCode: subjectCode,
                                                    semester: semester,
                                                    internalMarks: row[4],
                                                    endSemMarks: row[5],
                                                    midSemMarks: row[3],
                                                    evaluation: value
                                                }
                                                Student
                                                    .updateOne({ sapId: student.sapId }, { $push: { grades: grades }})
                                                    .exec()
                                                //once it reaches the end send the response
                                                if(index == rows.length - 1) {
                                                    Evaluate
                                                        .updateOne({ _id: value }, { $set: { uploaded: true } })
                                                        .exec()
                                                        .then((done) => {
                                                            res.json({
                                                                success: true,
                                                                message: "Result Uploaded!"
                                                            })
                                                        })
                                                        .catch((error) => {
                                                            res.status(400).json({
                                                                error: true,
                                                                errorMessage: error
                                                            })
                                                        })
                                                        
                                                }
                                            }
                                        })
                                        .catch((error) => {
                                            return res.status(400).json({
                                                error: true,
                                                message: "error"
                                            })
                                            return error
                                        })
                                })
                            
                            })
                        })
                        .catch((error) => {
                            res.status(400).json({
                                error: true,
                                message: "Error Occured At Database!"
                            })

                        })

                    }
                })
        }) 
        .catch((error) => {
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
   
  
}

export const getAll = (req, res) => {
    const { _id } = req.auth
    if(req.query.all) {
        Evaluate
            .find({ downloaded: false })
            .populate({
                path: 'evaluator',
                select: 'firstName lastName email reportingManager',
                populate: {
                    path: 'reportingManager',
                    select: 'firstName lastName email'
                }
            })
            .then((data) => {
                res.json(data)
            })
            .catch((err) => {
                res.status(400).json({
                    error: true,
                    errorMessage: err
                })
            })
    }else {
        Evaluate
            .find({ evaluator: _id })
            .then((data) => {
                res.json(data)
            })
            .catch((err) => {
                res.status(400).json({
                    error: true,
                    errorMessage: err
                })
            })
    }
}

export const getOne = (req, res) => {
    const { evaluationId } = req.params
    Evaluate
        .findOne({ evaluationId, uploaded: false })
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.status(400).json({ 
                error: true,
                errorMessage: err
            })
        })

}

export const getResult = (req, res) => {
    const { evaluationId } = req.body
    Student.find({ 
        grades: { 
            $elemMatch: {
                evaluation: evaluationId
            }
        }
    })
    .then((result) => {
        res.json(result)
    })
    .catch((error) => {
        res.status(400).json({
            error: true,
            errorMessage: error
        })
    })
}

// export const generateResult = (req, res) => {
//     const { sapId } = req.body
//     const options = {
//         format: "A4",
//         orientation: "portrait",
//         border: "10mm"
//     }
//     Student
//         .findOne({ sapId: sapId })
//         .then((student) => {
//             let grades = student.grades.map(item=> item.toObject())
//             let finalGrades = []
//             grades.map((item) => {
//                 let finalGrade = 0
//                 if(item.semester === 'I' || item.semester === 'II') {
//                     finalGrade = (item.internalMarks * 0.5) + (item.endSemMarks * 0.3) + (item.midSemMarks * 0.2)

//                 }else {
//                     finalGrade = (item.internalMarks * 0.3) + (item.endSemMarks * 0.5) + (item.midSemMarks * 0.2)

//                 }
//                 finalGrades.push({ subjectName: item.subjectName, subjectCode: item.subjectCode, finalGrade: finalGrade })
//             })
//             const document = {
//                 html: template,
//                 data: {
//                   name: student.name,
//                   sapId: student.sapId,
//                   rollNumber: student.rollNumber,
//                   grades: finalGrades
//                 },
//                 path: `./temp/pdf/${student.sapId}.pdf`,
//                 type: "",
//             }
//             pdf
//                 .create(document, options)
//                 .then((file) => {
//                     if(file) {
//                         res.download(file.filename, `${student.sapId}.pdf`, (err) => {
//                             if (err) {
//                               res.status(500).send({
//                                 message: "Could not download the file. " + err,
//                               })
//                             }
//                           })
                       
//                     }else {
//                         res.status(400).json({
//                             error: true
//                         })
//                     }
//                 })
//                 .catch((error) => {
//                     res.status(400).json({
//                         error: true,
//                         errorMessage: "Can't generate PDF"
//                     })
//                 })
//         })
//         .catch((error) => {
//             res.status(400).json({
//                 error: true,
//                 errorMessage: error
//             })
//         })
// }

export const generateAwardsheet = (req, res) => {
    const { evaluationId } = req.body
    const options = {
        format: "A4",
        orientation: "landscape",
        border: "10mm"
    }
    Student
        .find({ 
            grades: {
                $elemMatch: {
                    evaluation: evaluationId
                }
            }
        })
        .then((student) => {
            Evaluate.findOne({
                _id: student[0].grades[0].evaluationId
            })
            .lean()
            .then((data) => {
                let grades = student.map(item=> item.toObject())   
                const document = {
                    html: template,
                    data: {
                        student: grades,
                        evaluation: data
                    },
                    path: `./temp/pdf/${evaluationId}.pdf`,
                    type: "",
                }
                pdf
                    .create(document, options)
                    .then((file) => {
                        if(file) {
                            Evaluate
                                .updateOne({ 
                                    _id: evaluationId 
                                }, {
                                    $set: {
                                        downloaded: true
                                    }
                                })
                                .then((update) => {
                                    if(update) {
                                        res.download(file.filename, `${evaluationId}.pdf`, (err) => {
                                            if (err) {
                                                res.status(500).send({
                                                    message: "Could not download the file. " + err,
                                                })
                                            }
                                        })
                                    }else {
                                        res.status(400).json({
                                            error: true,
                                            errorMessage: 'Unknown'
                                        })
                                    }
                                })
                                .catch((error) => {
                                    res.status(400).json({
                                        error: true,
                                        errorMessage: error
                                    })
                                })
                        
                        }else {
                            res.status(400).json({
                                error: true
                            })
                        }
                    })
                    .catch((error) => {
                        res.status(400).json({
                            error: true,
                            errorMessage: "Can't generate PDF"
                        })
                    })
            })
            .catch((error) => {
                res.status(400).json({
                    error: true,
                    errorMessage: error
                })
            })
        })
        .catch((error) => {
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}

export const sendMails = (req, res) => {
    const { users } = req.body
    User.find({ })
    mails.map((mail) => {
        const mailOptions = {
            from: 'socis@test.com',
            to: `${mail.facultyMail}, ${mail.clusterMail}`,
            subject: '',
            text: 'That was easy!'
        }
    })
}