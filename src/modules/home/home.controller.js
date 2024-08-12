const renderHome = async (req, res) => {
  res.render("home.ejs",{ session: req.session });
};

export { renderHome };
