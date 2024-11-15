function List() {
    const arr = ['html', 'css', 'React', 'js'];
    return (
        <ul>
            {arr.map((el) => <li key={el}>{el}+---</li>)}
        </ul>
    );
}

export default List;
