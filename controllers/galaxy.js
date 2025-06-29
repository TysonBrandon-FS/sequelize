const { Galaxy } = require('../models/index.js')

// Show all resources
const index = async (req, res) => {
  // Respond with an array and 2xx status code
  //res.status(200).json([`Galaxy#index`])
  //const galaxy = await Galaxy.findAll()
  //res.status(200).json(galaxy)
  res.render('index.html.twig', {
    name: 'Brandon',
    people: [
      {name: 'Brandon Miller', age: 30},
      {name: 'John Doe', age: 25},
      {name: 'Jane Smith', age: 20},
      {name: 'Jim Beam', age: 35},
      {name: 'Jill Johnson', age: 32}
    ],
    active: true
  })
}

// Show resource
const show = async (req, res) => {
  // Respond with a single object and 2xx code
  //res.status(200).json(`Galaxy#show(:id)`)
  const galaxy = await Galaxy.findByPk(req.params.id)
  res.status(200).json(galaxy)
}

// Create a new resource
const create = async (req, res) => {
  // Issue a redirect with a success 2xx code
  //res.redirect(`/galaxies`, 201)
  const galaxy = await Galaxy.create(req.body)
  res.status(201).json(galaxy)
}

// Update an existing resource
const update = async (req, res) => {
  // Respond with a single resource and 2xx code
  //res.status(200).json(`/galaxies/${req.params.id}`, )
  const galaxy = await Galaxy.update(req.body, {
    where: { id: req.params.id }
  })
  res.status(200).json(galaxy)
}

// Remove a single resource
const remove = async (req, res) => {
  // Respond with a 2xx status code and bool
  //res.status(204).json(true)
  const galaxy = await Galaxy.destroy({
    where: { id: req.params.id }
  })
  res.status(204).json({status: true})
}

// Export all controller actions
module.exports = { index, show, create, update, remove }
