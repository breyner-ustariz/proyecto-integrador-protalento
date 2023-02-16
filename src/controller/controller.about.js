const aboutcontroller = {};

aboutcontroller.about = (req, res) => {
   res.render("about", { layout: false });
};

module.exports = aboutcontroller;