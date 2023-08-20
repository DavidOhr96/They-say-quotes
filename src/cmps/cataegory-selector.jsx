import { useState, useEffect } from 'react'

export function CategorySelector({ categorys, onCategoryChange }) {
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        onCategoryChange(selectedCategory)
    }, [selectedCategory])

    function handleCategoryChange(event) {
        const category = event.target.value;
        setSelectedCategory(category)
    }


    return (
        <div className="category-selector">
<label htmlFor="CategorySelector">category: </label>
            <select id='categorys' name='By category' onChange={handleCategoryChange}>
                <option value={''}> All</option>
                {categorys.map(category => {
                 return   <option value={category}>{category}</option>
                })}
            </select>
        </div>
    )
}

