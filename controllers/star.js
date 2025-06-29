const { Star, Planet } = require('../models/index.js')

// Show all resources
const index = async (req, res) => {
  // Respond with an array and 2xx status code
  //res.status(200).json([`Star#index`])
  const stars = await Star.findAll()
  //res.status(200).json(stars)
  res.render('stars/index.html.twig', {stars}) 
}

// Show resource
const show = async (req, res) => {
  // Respond with a single object and 2xx code
  //res.status(200).json(`Star#show(:id)`)
  const star = await Star.findByPk(req.params.id, {
    include: Planet
  })
  //res.status(200).json(star)
  res.render('stars/show.html.twig', {star})
}

const form = async (req, res) => {
  let star = await new Star()
  if (typeof req.params.id !== 'undefined') {
    star = await Star.findByPk(Number(req.params.id))
  }
  res.render('stars/form.html.twig', {star})
}

// Create a new resource
const create = async (req, res) => {
  // Issue a redirect with a success 2xx code
  //res.redirect(`/stars`, 201)
  const star = await Star.create(req.body)
  //res.status(201).json(star)
  res.redirect(`/stars/${star.id}`)
}

// Update an existing resource
const update = async (req, res) => {
  // Respond with a single resource and 2xx code
  //res.status(200).json(`/stars/${req.params.id}`, )
  const star = await Star.update(req.body, {
    where: { id: req.params.id }
  })
  //res.status(200).json(star)
  res.redirect(`/stars/${req.params.id}`)
}

// Remove a single resource
const remove = async (req, res) => {
  // Respond with a 2xx status code and bool
  //res.status(204).json(true)
  const star = await Star.destroy({
    where: { id: req.params.id }
  })
  //res.status(204).json({status: true})
  res.redirect(`/stars`)
}

// Export all controller actions
module.exports = { index, show, form, create, update, remove }
