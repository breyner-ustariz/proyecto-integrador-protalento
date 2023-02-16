const altacontroller = {}

altacontroller.alta = (req, res)=>{
   res.render('alta', {layout: false})
}

module.exports = altacontroller;