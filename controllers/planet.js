
const { Planet, Star } = require('../models/index.js')



// Show all resources
const index = async (req, res) => {
  // Respond with an array and 2xx status code
  //res.status(200).json([`Planet#index`])
  const planets = await Planet.findAll()
  //res.status(200).json(planets)
  res.render('planets/index.html.twig', {planets})
}

// Show resource
const show = async (req, res) => {
  // Respond with a single object and 2xx code
  //res.status(200).json(`Planet#show(:id)`)
  const planet = await Planet.findByPk(req.params.id, {
    include: Star
  })
  //res.status(200).json(planet)
  res.render('planets/show.html.twig', {planet})
}

//GET PLANETS/NEW - DOESNT LOAD IN EXISITING DATA AND SHOWS AN EMPTY FORM
//GET PLANETS/1/EDIT - LOADS IN THE PLANET WITH ID 1 AND POPULATES THE FORM
const form = async (req, res) => {
  let planet = await new Planet()
  if (typeof req.params.id !== 'undefined') {
    planet = await Planet.findByPk(Number(req.params.id))
  }
  res.render('planets/form.html.twig', {planet})
}

// Create a new resource
const create = async (req, res) => {
  // Issue a redirect with a success 2xx code
  //res.redirect(`/planets`, 201)
  const planet = await Planet.create(req.body)
  //res.status(201).json(planet)
  res.redirect(`/planets/${planet.id}`)
}

// Update an existing resource
const update = async (req, res) => {
  // Respond with a single resource and 2xx code
  //res.status(200).json(`/planets/${req.params.id}`, )
  const planet = await Planet.update(req.body, {
    where: { id: req.params.id }
  })
  //res.status(200).json(planet)
  res.redirect(`/planets/${req.params.id}`)
}

// Remove a single resource
const remove = async (req, res) => {
  // Respond with a 2xx status code and bool
  //res.status(204).json(true)
  const planet = await Planet.destroy({
    where: { id: req.params.id }
  })
  //res.status(204).json({status: true})
  res.redirect(`/planets`)
}

// Export all controller actions
module.exports = { index, show, create, update, remove, form }
