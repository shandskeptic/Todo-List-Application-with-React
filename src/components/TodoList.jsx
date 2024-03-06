import PropTypes from 'prop-types';

const ListTodo = ({ task, hDelete }) => {
	return (
		<>
			<h4 className="mt-4">List of your tasks: </h4>
			{task.length === 0 ? (
				<p>Empty... Write something.</p>
			) : (
				<ul>
					{task.map((item, index) => {
						return (
							<div key={index} className="bg-primary-800 m-2 rounded-md w-[80vw] md:w-[40vw]">
								<li className="flex justify-between items-center">
									<div className="flex items-center gap-2">
										<span className="left-0 flex items-center gap-4 bg-primary-400 p-2 rounded-l-md h-full">{index + 1}</span>
										<p className="text-start">{item}</p>
									</div>
									<button onClick={() => hDelete(index)} className="right-0 flex items-center bg-primary-400 p-2 rounded-none rounded-r-md h-full">
										Delete
									</button>
								</li>
							</div>
						);
					})}
				</ul>
			)}
		</>
	);
};

ListTodo.propTypes = {
	task: PropTypes.element.isRequired,
	hDelete: PropTypes.element.isRequired,
};

export default ListTodo;
