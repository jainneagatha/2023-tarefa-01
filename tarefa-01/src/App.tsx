import './App.css'
const Todo = (prop:any) => {
  return (
    <div className="todo-item">
        <div className="checker">
          <span><input type="checkbox" /></span>
        </div>
        <span>{prop.titulo }</span>
        <a
          href="javascript:void(0);"
          className="float-right remove-todo-item"
          ><i className="icon-close"></i></a>
      </div>
  )
}
const Link = (prop:any) => {
  return (
    <li
      role="presentation"
      className="nav-item all-task active"
    >
      <a href="#" className="nav-link">{prop.link}</a>
    </li>

  )
}
function App() {

  return (
    <>
     <div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="card card-white">
						<div className="card-body">
							<form action="javascript:void(0);">
								<input
									type="text"
									className="form-control add-task"
									placeholder="New Task..."
								/>
							</form>
							<ul className="nav nav-pills todo-nav">
								<Link link="Anythink"/> 
                <Link link="All"/>
                <Link link="Active"/> 
                <Link link="Completed"/> 
							</ul>
							<div className="todo-list">
                <Todo titulo="Create theme"/>
                <Todo titulo="Work on wordpress"/>								
                <Todo titulo="Organize office main department"/>
                <Todo titulo="Error solve in HTML template"/>
                <Todo titulo="word"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </>
  )
}

export default App
