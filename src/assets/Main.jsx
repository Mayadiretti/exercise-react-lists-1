import './Main.css'
const Main = ({ imgUrl, imgAlt}) => {
    return (
        <main>
            <figure>
                <img src={imgUrl} alt={imgAlt} />
            </figure>
            <div>
                <h3>Gianni's posts</h3>
                <h1>I am a singer and I love cats</h1>
                <p>Bella Belinda è innamorata
                    Parla da sola con l'insalata
                    E non guarda il piatto, ma la finestra
                    Scende una lacrima nella minestra

                    Gioca col pane, bella Belinda
                    Fa le palline con la mollica
                    Nel suo bicchiere, bella Belinda
                    Lei vede i suoi occhi pieni d'amore

                    E mille pensieri come farfalle
                    E mille carezze sui suoi capelli
                    E brividi dolci lungo le spalle
                    E più è innamorata e più si fa bella
                </p>
                <button>Read More →</button>
                <div>
                    <button>← Back</button>
                    <button>Next →</button>
                </div>
            </div>

        </main>
    )
}


export default Main