import React from 'react'
import { connect } from 'react-redux'
import { filterChange, filterClear } from '../reducers/filterReducer'


const Filter = (props) => {
  const handleChange = (event) => {
    // input-kentän arvo muuttujassa event.target.value
    event.preventDefault()
    const filterValue = event.target.value
    props.filterChange(filterValue)
  }
  const style = {
    marginBottom: 10
  }

  const handleClearFilter = (event) => {
    props.filterClear()
    console.log('CLEAR FILTER',props.filter)
    document.getElementById('anecdoteFilter').value = props.filter
  }

  return (
    <div style={style}>
      filter <input id='anecdoteFilter' onChange={handleChange} /> 
      <button onClick={() => handleClearFilter()}>Clear filter</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    filter: state.filter,
  }
}

const mapDispatchToProps = { filterChange, filterClear }

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter)

export default ConnectedFilter