

let session = require('express-session');
session = {
        contents: []
    }


exports.getAll = (req, res, next)=>{

    console.log('yo');
    res.render('index.ejs', {todos: session.contents});
}

exports.create = (req, res, next)=>{
    
    session.contents.push(req.body.newTodo);
    res.redirect('/todo');
}

exports.delete = (req, res, next)=>{

    session.contents.splice(req.params.i, 1);
    res.redirect('/todo');
}

