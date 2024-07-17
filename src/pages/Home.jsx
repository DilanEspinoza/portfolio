import { Header } from "../components/Header";
import imageDilanEspinoza from "../assets/dilan-espinoza.jpg";

export const Home = () => {
	return (
		<div className='relative flex-col items-center justify-center h-scree flex '>
			<Header />
			<div className='top-4 h-full'>
				<main className='flex justify-between w-5/6  h-2/4 mx-auto my-6 items-center  '>
					<div className='flex flex-col w-2/4 gap-2 flex-shrink-0'>
						<h1 className='text-5xl text-violet-900 font-bold '>
							Bienvenido a mi portafolio
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatibus reprehenderit praesentium repellat eaque repudiandae
							ducimus at dolor quia iure nam fuga quae veniam ipsa magni, nulla
							tenetur commodi, vel est?
						</p>
					</div>
					<div className=''>
						<img className='' src={imageDilanEspinoza} alt='Dilan Espinoza' />
					</div>
				</main>
			</div>
		</div>
	);
};
