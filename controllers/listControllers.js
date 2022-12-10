const {List} = require('../models/listMondel');

module.exports = {
    createNewItem: async(req, res) => {
        try{
            await List.create(req.body);
            res.json('List Item Created');
        }catch (err){
            console.log(err);
            res.json('Sorry, Something went wrong');
        }
    },

    readItem: async(req, res) => {
        const itemId = req.query.id;
        let item;
        try{
            if (itemId){
                 item = await List.findById(itemId);
            }else{
                item = await List.find();
            }
            res.json(item);
        }catch (err){
            res.json('Sorry, Something went wrong');
        }
    },

    updateItem: async(req, res) => {
        console.log("Creating", req.body);
        const itemId = req.query.id;
        try{
            await List.findByIdAndUpdate(itemId, {...req.body, isCompleted: false});
            res.json('List Item Updated');
        }catch (err){
            console.log(err);
            res.json('Sorry, Something went wrong');
        }
    },

    updateItemCompletion: async(req, res) => {
        console.log("Creating", req.body);
        const itemId = req.query.id;
        try{
            await List.findByIdAndUpdate(itemId, {isCompleted: true});
            res.json('List Item Updated');
        }catch (err){
            console.log(err);
            res.json('Sorry, Something went wrong');
        }
    },


    deleteItem: async(req, res) => {
        const itemId = req.query.id;
        try{
            await List.findByIdAndDelete(itemId);
            res.json('List Item Deleted');
        }catch (err){
            res.json('Sorry, Something went wrong');
        }
    },
}