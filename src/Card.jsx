import React from "react";


// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();



export default function Card() {
    // Quizas cambiar los colores pq ta feo
    const Genres = {
        Action: "bg-red-500",
        Adventure: "bg-blue-500",
        Animation: "bg-green-500",
        Biography: "bg-purple-500",
        Comedy: "bg-yellow-500",
        Crime: "bg-pink-500",
        Documentary: "bg-indigo-500",
        Drama: "bg-teal-500",
        Family: "bg-cyan-500",
        Fantasy: "bg-orange-500",
        FilmNoir: "bg-lime-500",
        History: "bg-red-600",
        Horror: "bg-blue-600",
        Music: "bg-green-600",
        Musical: "bg-purple-600",
        Mystery: "bg-yellow-600",
        Romance: "bg-pink-600",
        SciFi: "bg-indigo-600",
        ShortFilm: "bg-teal-600",
        Sport: "bg-cyan-600",
        Superhero: "bg-orange-600",
        Thriller: "bg-lime-600",
        War: "bg-red-700",
        Western: "bg-blue-700",
    };
      
	// Select a random genre once
	const randomGenre = () => {
        const keys = Object.keys(Genres);
        const RandomKey = keys[Math.floor(Math.random() * keys.length)];
        return [RandomKey,Genres[RandomKey]];
    }

	return (
		<div className="m-auto bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 rounded-2xl p-4 text-white w-72 flex flex-col justify-center grow-0">
			<div className="flex flex-col relative">
				<h2 className="font-bold text-xl p-2 absolute bottom-10">
					Título de la película
				</h2>
				<img
					className="mb-2 rounded-xl"
					src="https://picsum.photos/200/250"
					alt=""
				/>
				<div className="Tags py-2 flex absolute bottom-2">
					{/* Falta ver el overflow*/}
					{Array(3)
						.fill()
						.map((_, index) => (
							<Tag key={index} tag={randomGenre()} />
						))}
					<div>
						<Rating age="12" />
					</div>
				</div>
			</div>
			<p className="text-justify p-2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis
				pariatur, dolorum aliquam ipsam eius molestias id temporibus eveniet
				facilis possimus libero consectetur sunt. Possimus mollitia beatae
				maiores commodi sunt.
			</p>
			<Controls />
		</div>
	);
}

function Tag({ tag }) {
	// seleccionar un color aleatorio
	return (
		<div className= {`rounded-full p-1 mx-2 ${tag[1]}`}>
			<h3 className="font-semibold text-center text-xs">{tag[0]}</h3>
		</div>
	);
}

function Controls() {
	return (
		<div className="flex justify-between bg-white rounded-full">
			<button className="bg-violet-900 rounded-full p-2 m-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="icon icon-tabler icon-tabler-thumb-up stroke-white"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					strokeWidth="2"
					stroke="#ffff"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
				</svg>
			</button>
			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="icon icon-tabler icon-tabler-heart"
					width="30"
					height="30"
					viewBox="0 0 24 24"
					strokeWidth="2"
					stroke="#000000"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
				</svg>
			</button>

			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="icon icon-tabler icon-tabler-heart-off"
					width="30"
					height="30"
					viewBox="0 0 24 24"
					strokeWidth="2"
					stroke="#000000"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M3 3l18 18" />
					<path d="M19.5 12.572l-1.5 1.428m-2 2l-4 4l-7.5 -7.428a5 5 0 0 1 -1.288 -5.068a4.976 4.976 0 0 1 1.788 -2.504m3 -1c1.56 0 3.05 .727 4 2a5 5 0 1 1 7.5 6.572" />
				</svg>
			</button>

            <button className="bg-slate-900 rounded-full p-2 m-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="icon icon-tabler icon-tabler-thumb-down"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					strokeWidth="2"
					stroke="#ffff"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" />
				</svg>
			</button>
		</div>
	);
}

function Rating({ age }) {
	age = parseInt(age, 10);

	switch (age) {
		case 12:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="icon icon-tabler icon-tabler-rating-12-plus"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="#ffff"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
					<path d="M7 15v-6" />
					<path d="M15.5 12h3" />
					<path d="M17 10.5v3" />
					<path d="M10 10.5a1.5 1.5 0 0 1 3 0c0 .443 -.313 .989 -.612 1.393l-2.388 3.107h3" />
				</svg>
			);
			break;

		case 16:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="icon icon-tabler icon-tabler-rating-16-plus"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="#ffff"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
					<path d="M11.5 13.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
					<path d="M7 15v-6" />
					<path d="M15.5 12h3" />
					<path d="M17 10.5v3" />
					<path d="M10 13.5v-3a1.5 1.5 0 0 1 1.5 -1.5h1" />
				</svg>
			);
			break;

		case 18:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="icon icon-tabler icon-tabler-rating-18-plus"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="#ffff"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
					<path d="M11.5 10.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
					<path d="M11.5 13.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
					<path d="M7 15v-6" />
					<path d="M15.5 12h3" />
					<path d="M17 10.5v3" />
				</svg>
			);
			break;
		default:
			return;
			break;
	}
}
