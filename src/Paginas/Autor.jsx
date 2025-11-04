import estilo from '../Paginas/Autor.module.css';
import autor from '../assets/autor.jpg';

export function Autor() {
    return (
        <main className={estilo.container}>
            <h1 className={estilo.titulo}>Sir Arthur Conan Doyle</h1>

            <section>
                <figure>
                    <img src={autor} alt="foto do Sir Arthur Conan Doyle" className={estilo.autor} />
                </figure>
            </section>

            <section className={estilo.bio}>
                <h2>Um pouco sobre o autor</h2>
                <p>Arthur Conan Doyle (1859-1930) foi um escritor e médico britânico, autor das histórias do imortal detetive Sherlock Holmes que superou a fama de seu criador. Nasceu em Edimburgo, Escócia, no dia 22/05/1859. Em 1876 ingressou na Universidade de Edimburgo concluindo o curso de Medicina em 1881. Entre 1882 e 1890 exerceu a profissão em Southsea, Inglaterra.</p>
            </section>

        </main>
    )
}