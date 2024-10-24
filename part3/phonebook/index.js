const express = require('express')
const app = express()

let persons = [
	{ 
		"id": 1,
		"name": "Arto Hellas", 
		"number": "040-123456"
	},
	{ 
		"id": 2,
		"name": "Ada Lovelace", 
		"number": "39-44-5323523"
	},
	{ 
		"id": 3,
		"name": "Dan Abramov", 
		"number": "12-43-234345"
	},
	{ 
		"id": 4,
		"name": "Mary Poppendieck", 
		"number": "39-23-6423122"
	}
]

app.use(express.json())

app.get('/api/persons', (req, res) => {
	res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
	const id = Number(req.params.id)
	const person = persons.find(p => p.id === id)

	console.log(id, person)

	if (person)
	{
		res.json(person)
	}
	else
	{
		res.status(404).end()
	}
})

app.get('/info', (req, res) => {
	console.log(req)
	res_text = `
		<p>Phonebook has info for ${persons.length} people</p>
		<p>${new Date()}</p>
	`
	res.send(res_text)
})

const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})