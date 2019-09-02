
const getHouses = (req,res) => {
    const db = req.app.get('db');
    db.get_houses().then((house) => {
        res.status(200).send(house)
    }).catch((error) => {console.log(error)})
}

const createHouse = (req,res) => {
    const {name,address,city,state,zipcode} = req.body;
    const db = req.app.get('db')
    db.create_home([name,address,city,state,zipcode]).then(() => {
        res.status(200).send('Home has uploaded')
    })

}

const deleteHome = (req,res) => {
    const {id} = req.params;
    const db = req.app.get('db')
    db.delete_home([id]).then(() => {
        res.status(200).send('home has been deleted')
    })
}



module.exports = {
getHouses,
createHouse,
deleteHome
}