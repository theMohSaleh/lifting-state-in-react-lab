// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    return (
        <ul>
            {
                // check if any ingredient was added
                props.stack.length ?
                    displayStack()
                    :
                    <h3>No Ingredients.</h3>
            }

        </ul>
    )

    // functin to list all ingredients in stack
    function displayStack() {
        return props.stack.map((ingredient, index) => (
            <li key={index} style={{ backgroundColor: ingredient.color }}>
                {ingredient.name}
                <button onClick={() => props.removeFromBurger(index)}>-</button>
            </li>
        ));
    }
};

export default BurgerStack;