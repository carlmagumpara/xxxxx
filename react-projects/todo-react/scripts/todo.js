// TODO
class Todo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			todos: [],
			id: '',
			todo: '',
			status: '',
			set: [],
			count: 0,
			update: false,
			checkAll: false,
			name: '',
			login: true
		}
		this.removeTodo = this.removeTodo.bind(this);
		this.todoTextHandler = this.todoTextHandler.bind(this);
		this.changeStatus = this.changeStatus.bind(this);
		this.editTodo = this.editTodo.bind(this);
		this.updateTodo = this.updateTodo.bind(this);
		this.cancelUpdate = this.cancelUpdate.bind(this);
		this.checkAll = this.checkAll.bind(this);
		this.clearList = this.clearList.bind(this);
		this.loginTextHanlder = this.loginTextHanlder.bind(this);
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}
	logout(){
		var a = confirm('Are you sure?');
		if (a) {
			this.setState({
				login: true,
				name: '',
				todos: [],
				count: 0
			});
		}
	}
	login(e){
		e.preventDefault();
		var name = this.state.name;
		if (name) {
			this.setState({
				name: name,
				login: false
			});
		} else {
			alert('Please enter your name first!');
		}
	}
	loginTextHanlder(event){
		this.setState({
			name: event.target.value
		});
	}
	clearList(){
		var a = confirm('Are you sure?');
		if (a) {
			this.setState({
				todos: [],
				checkAll: false
			});
		}
	}
	checkAll(){
		var todos = this.state.todos;
		if (this.state.checkAll) {
			var checked = false;
			for (var i = 0; i < todos.length; i++) {
				todos[i].status = false;
			}
		} else {
			var checked = true;
			for (var i = 0; i < todos.length; i++) {
				todos[i].status = true;
			}
		}
		this.setState({
			checkAll: checked,
			todos: todos
		});
	}
	removeTodo(todo){
		var todos = this.state.todos;
		var index = todos.indexOf(todo)
		todos.splice(index, 1)
		this.setState({
			todos: todos
		});
	}
	saveTodo(e){
		e.preventDefault()
		if (this.state.todo) {
			var count = this.state.count + 1;
			var todo = this.state.todo;
			var todos = this.state.todos;
			var array = {
				id: count,
				todo: todo,
				status: false }
			todos.unshift(array);
			this.setState({
				count: count,
				todos: todos,
				todo: '',
				checkAll: false
			});
		}
	}
	editTodo(todo){
		this.setState({
			id: todo.id,
			todo: todo.todo,
			status: todo.status,
			update: true,
			set: todo
		});
	}
	cancelUpdate(){
		this.setState({
			id: '',
			todo: '',
			status: '',
			update: false,
			set: []
		});
	}
	updateTodo(e){
		e.preventDefault()
		if (this.state.todo) {
			var todos = this.state.todos;
			var index = todos.indexOf(this.state.set)
			todos[index].todo = this.state.todo
			this.setState({
				todos: todos,
				id: '',
				todo: '',
				status: '',
				update: false,
				set: []
			});
		}
	}
	todoTextHandler(event){
		this.setState({
			todo: event.target.value
		});
	}
	changeStatus(todo){
		var todos = this.state.todos;
		var index = todos.indexOf(todo)
		if (todos[index].status) {
			todos[index].status = false
		} else {
			todos[index].status = true
		}
		this.setState({
			todos: todos,
			checkAll: false
		});
	}
	render(){
		var todoList = this.state.todos;
		var updateTodo = this.state.update;
		var login = this.state.login;
		var List = todoList.map((todo) =>
			<div className={todo.status ? 'todo-wrapper grey-blue' : 'todo-wrapper'} key={todo.id.toString()}>
				<div className="inline"><input type="checkbox" onChange={(e) => this.changeStatus(todo)} checked={todo.status ? 1:0}/></div>
				<div className={todo.status ? 'line-through':''}><p>{todo.todo}</p></div>
				<div className="inline actions">
					<button onClick={(e) => this.removeTodo(todo)}>Delete</button>
					<button onClick={(e) => this.editTodo(todo)}>Edit</button>
				</div>
			</div>
		)
		var loginForm = (
			<div className="login-wrapper full-height flex-center">
				<div className="flex-container">
					<form onSubmit={(e) => this.login(e)}>
						<label>
							Your Name
						</label>
						<input type="text" onChange={this.loginTextHanlder} placeholder="Type your name..." value={this.state.name} />
						<input type="submit" value="Login" className="login-button" />
					</form>
				</div>
			</div>
		);
		var checkAll = (
			<div className="inline">
				<input type="checkbox" className="inline" onChange={this.checkAll} checked={this.state.checkAll ? 1:0} />
			</div>
		);
		var mainForm = (
			<div className="form-wrapper">
				<form onSubmit={(e) => this.saveTodo(e)} className="inline">
					{checkAll}
					<input type="text" onChange={this.todoTextHandler} value={this.state.todo} placeholder={'Hi ' + this.state.name + ', What do you need to do?'} />
				</form>
				<button className="inline" onClick={this.clearList}> Clear List </button>
			</div>
		);
		var updateForm = (
			<div className="form-wrapper">
				<form onSubmit={(e) => this.updateTodo(e)} className="inline">
					{checkAll}
					<input type="text" onChange={this.todoTextHandler} value={this.state.todo} placeholder="Update todo..." />
				</form>
				<button className="inline" onClick={this.cancelUpdate}> Cancel </button>
			</div>
		)

		var Form = null;
		
		if (updateTodo) {
			Form = (
				<div>
					{updateForm}
				</div>
			)
		} else {
			Form = (
				<div>
					{mainForm}
				</div>
			);
		}

		var todo = (
			<div>
				{Form}
				<div className="todos">
					{List}
				</div>
			</div>
		);

		var main = null;

		if (login) {
			main = (
				<div>
					{loginForm}
				</div>
			);
		} else {
			main = (
				<div>
					<button className="login-button" onClick={this.logout}> Logout </button>
					{todo}
				</div>
			);
		}

		return (
			<div>
				{main}
			</div>
		)
	}
}
ReactDOM.render(<Todo />, document.getElementById('root'));