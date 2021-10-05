const  TaskItem = (props) => {
    const {isChecked, taskName }=props;
    return (
        <li>
            <input checked={isChecked} type="checkbox" />
            <span> taskName</span>
        </li>
    );
};