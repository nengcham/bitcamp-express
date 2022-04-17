const db = require('../models/index')
const TodoSchema = db.todo

exports.add = (req, res) => {
  console.log('### 진행 4 : 노드 서버에 진입함' +JSON.stringify(req.body))
  new TodoSchema(req.body).save(()=>{
      res.status(200).json({'result':'ok'}) 
  })
}

exports.todolist = (req, res) => {
  console.log(`todoController Access !!`)
  TodoSchema.find()
  .exec((err, todos) => {
    if (err) return res.status(400).send(err)
    res.status(200).json({success: true, todos}) 
    console.log({success: true, todos})
  })
}