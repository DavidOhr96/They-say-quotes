import { useState, useEffect } from 'react'

export function CategorySelector({ categorys, onCategoryChange }) {
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        onCategoryChange(selectedCategory)
    }, [selectedCategory])

    function handleCategoryChange(event) {
        const category = event.target.value;
        setSelectedCategory(category)
        // if (event.target.checked) {
        //     setSelectedCategory([...selectedCategory, category]);
        // } else {
        //     setSelectedCategory(selectedCategory.filter(l => l !== category));
        // }
    }


    return (
        <div className="category-selector">

            <select id='categorys' name='By category' onChange={handleCategoryChange}>
                {categorys.map(category => {
                 return   <option value={category}>{category}</option>
                })}
            </select>


            {/* {categorys.map(category => (
                <div key={category}>
                    <input
                        type="select"
                        value={category}
                        checked={selectedCategorys.includes(category)}
                        onChange={handleCategoryChange}
                    />
                    {category}
                </div>
            ))} */}
        </div>
    )
}

