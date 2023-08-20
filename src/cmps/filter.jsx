import { useState, useEffect } from 'react'
import { CategorySelector } from './cataegory-selector'

export function Filter({ filterBy, onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)
    const {quote}=filterByToEdit
    const categorys = [
        'age',
        'alone',
        'amazing',
        'anger',
        'architecture',
        'art',
        'attitude',
        'beauty',
        'best',
        'birthday',
        'business',
        'car',
        'change',
        'communications',
        'computers',
        'cool',
        'courage',
        'dad',
        'dating',
        'death',
        'design',
        'dreams',
        'education',
        'environmental',
        'equality',
        'experience',
        'failure',
        'faith',
        'family',
        'famous',
        'fear',
        'fitness',
        'food',
        'forgiveness',
        'freedom',
        'friendship',
        'funny',
        'future',
        'god',
        'good',
        'government',
        'graduation',
        'great',
        'happiness',
        'health',
        'history',
        'home',
        'hope',
        'humor',
        'imagination',
        'inspirational',
        'intelligence',
        'jealousy',
        'knowledge',
        'leadership',
        'learning',
        'legal',
        'life',
        'love',
        'marriage',
        'medical',
        'men',
        'mom',
        'money',
        'morning',
        'movies',
        'success']

    function handleChange({ target }) {
        console.log(filterBy,'fromfilter')
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
    }

    function onCategoryChange(selectedCategory) {
        setFilterByToEdit((prevFilter) => ({
            ...prevFilter,
            categorys: selectedCategory,
        }))
        onSetFilter(filterByToEdit)
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)

    }
    return (
        <section className="filter">
            <form onSubmit={onSubmitFilter}>
                <div>
                <label htmlFor="quote">Quote: </label>
                <input value={quote} onChange={handleChange} name="quote" id="quote" type="text" placeholder="By quote" />
                </div>
                <div>
                {/* <label htmlFor="CategorySelector">category: </label> */}
                <CategorySelector categorys={categorys} onCategoryChange={onCategoryChange}  />
                </div>
                <button onClick={()=>onSetFilter(filterBy)}>filter</button>
            </form>
        </section>

    )
}