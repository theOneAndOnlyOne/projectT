//ToDoForm.jsx
import Plus from "./assets/plus.jsx";

const ToDoForm = ({ newItem, setNewItem, addTodo }) => {
    return (
        <div className="todo">
            <form onSubmit={addTodo} className="new-task">
                    <input
                        type="text"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        className="input"
                        placeholder="toodoo"
                    />
                <button className="button"><Plus /></button>
            </form>
        </div>
    );
};

export default ToDoForm;