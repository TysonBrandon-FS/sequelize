
const { Planet } = require('../models/index.js')



// Show all resources
const index = async (req, res) => {
  // Respond with an array and 2xx status code
  //res.status(200).json([`Planet#index`])
  const planets = await Planet.findAll()
  res.status(200).json(planets)
}

// Show resource
const show = async (req, res) => {
  // Respond with a single object and 2xx code
  //res.status(200).json(`Planet#show(:id)`)
  const planet = await Planet.findByPk(req.params.id)
  res.status(200).json(planet)
}

// Create a new resource
const create = async (req, res) => {
  // Issue a redirect with a success 2xx code
  //res.redirect(`/planets`, 201)
  const planet = await Planet.create(req.body)
  res.status(201).json(planet)
}

// Update an existing resource
const update = async (req, res) => {
  // Respond with a single resource and 2xx code
  //res.status(200).json(`/planets/${req.params.id}`, )
  const planet = await Planet.update(req.body, {
    where: { id: req.params.id }
  })
  res.status(200).json(planet)
}

// Remove a single resource
const remove = async (req, res) => {
  // Respond with a 2xx status code and bool
  //res.status(204).json(true)
  const planet = await Planet.destroy({
    where: { id: req.params.id }
  })
  res.status(204).json({status: true})
}

// Export all controller actions
module.exports = { index, show, create, update, remove }
