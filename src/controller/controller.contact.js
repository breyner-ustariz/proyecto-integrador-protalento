const contaccontroller = {};

contaccontroller.contact = (req, res) => {
   res.render("contact", { layout: false });
};

module.exports = contaccontroller;