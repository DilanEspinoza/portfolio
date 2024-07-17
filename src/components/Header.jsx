export const Header = () => {
	return (
		<>
			<header className='w-full h-16 p-4  '>
				<nav className='flex justify-between items-center w-5/6 mx-auto text-lg '>
					<a href=''>
						<p className='text-3xl font-bold text-black'>Dilan Espinoza</p>
					</a>
					<ul className='flex gap-4 '>
						<li>
							<a
								className='p-1.5 hover:text-white hover:rounded-md hover:bg-gradient-to-r from-segundo-color-1 to-segundo-color-2'
								href='/'>
								Inicio
							</a>
						</li>
						<li>
							<a
								className='p-1.5 hover:text-white hover:rounded-md hover:bg-gradient-to-r from-segundo-color-1 to-segundo-color-2'
								href='/about'>
								Acerca
							</a>
						</li>
						<li>
							<a
								className='p-1.5 hover:text-white hover:rounded-md hover:bg-gradient-to-r from-segundo-color-1 to-segundo-color-2'
								href='/projects'>
								Proyectos
							</a>
						</li>
						<li>
							<a
								className='p-1.5 hover:text-white hover:rounded-md hover:bg-gradient-to-r from-segundo-color-1 to-segundo-color-2'
								href='/contact'>
								Contactos
							</a>
						</li>
					</ul>
					<button className='hidden max-md:bg-slate-500 max-md:flex'>
						Menu
					</button>
				</nav>{" "}
			</header>
		</>
	);
};
