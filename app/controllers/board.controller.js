exports.write = (req, res)=>{
    const {passengerId, name, teamId, subject} = req.body
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`넘어온 passengerId 값 : ${passengerId}`)
    console.log(`넘어온 name 값 : ${name}`)
    console.log(`넘어온 teamId 값 : ${teamId}`)
    console.log(`넘어온 subject 값 : ${subject}`)
    res.status(200).json({'result': 'OK'})
}