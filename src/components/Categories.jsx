import React from "react"

function Categories() {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const categories = ['Все', 'Мясная', 'Вегатерианская', 'Острая'];

    const onClickCategory = (index) => {
        setActiveIndex(index);
    }
    return (
        <div className="categories">
            <ul>
                {categories.map((value, i) => (
                    <li 
                        onClick={() => onClickCategory(i)}
                        className={activeIndex === i ? 'active' : ''}
                        key={i}
                    >
                        {value}
                    </li>
                ))}
              </ul>
        </div>
    )
}

export default Categories