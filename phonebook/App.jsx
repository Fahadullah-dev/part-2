import { useState } from 'react'

const Filter = ({ filter, handleFilterChange }) => (
  <div>
    filter shown with: <input value={filter} onChange={handleFilterChange} />
  </div>
)

const PersonForm = ({ newName, handleNameChange, newNumber, handleNumberChange, addPerson }) => (
  <form onSubmit={addPerson}>
    <div>
      name: <input value={newName} onChange={handleNameChange} />
    </div>
    <div>
      number: <input value={newNumber} onChange={handleNumberChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);

const Persons = ({ personsToShow }) => (
  <div>
    {personsToShow.map(person =>
      <div key={person.id}>{person.name} {person.number}</div>
    )}
  </div>
);


const Person = ({ person }) => (
  <li>{person.name} {person.number}</li>
)


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  

  const handleNameChange = (event) => {
    setNewName(event.target.value);
    console.log(event.target.value);
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  }

  const personsToShow = newFilter === ''
    ? persons
    : persons.filter( person =>
      person.name.toLowerCase().includes(newFilter.toLowerCase())
    )

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
    console.log(event.target.value);
  }

  const handleButton = (event) => {
    event.preventDefault();
    {
      var add = true;
      persons.map((person) => 
        {if(person.name == newName){
          alert(`${newName} is already added to phonebook`);
          add = false;
        }}
      )
      if(add){
        setPersons(persons.concat({name: newName, number: newNumber, id: persons.length+1}));
      }
      setNewName('');
      setNewNumber('');
    }
}

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={newFilter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm 
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addPerson={handleButton}
      />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App