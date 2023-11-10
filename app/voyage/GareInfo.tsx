export default function GareInfo({ clickedGare }) {
	return (
		<div
			css={`
				position: fixed;
				right: 1rem;
				top: 50%;
				transform: translateY(-50%);
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 20rem;
				height: 30rem;

				iframe {
					width: 100%;
					border: 6px solid var(--color);
					height: 100%;
				}
				h2 {
					margin-bottom: 0rem;
					font-size: 120%;
					background: var(--color);
					width: 100%;
					text-align: center;
					padding: 0.2rem 0;
					max-width: 20rem;
				}
				@media (max-width: 800px) {
					bottom: 0;
					left: 0;
					transform: initial;
					width: 100vw;
					height: 14rem;
				}
			`}
		>
			<h2>Gare de {clickedGare.nom}</h2>
			<iframe
				src={`https://tableau-sncf.vercel.app/station/stop_area:SNCF:${clickedGare.uic.slice(
					2
				)}`}
				css={``}
			/>
		</div>
	)
}
