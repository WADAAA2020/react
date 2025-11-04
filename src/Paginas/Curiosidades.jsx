import estilo from '../Paginas/Curiosidades.module.css';
import icon from '../assets/icon.jpg'

export function Curiosidades() {
    return(
        <main className={estilo.container}>
            <h1 className={estilo.titulo}>Curiosidades</h1>

            <section>
                <figure>
                    <img src={icon} alt="desenho do Sherlock Holmes e Watson" />
                </figure>
            </section>
            
            <section className={estilo.curiosidade}>
            <ul className={estilo.lista}> 
                <li>Conan Doyle foi um dos primeiros motoristas na Grã-Bretanha.</li>
                <li>Conan Doyle jogava cricket com JM Barrie, criador de Peter Pan.</li>
                <li>Conan Doyle era um investigador entusiasta e resolveu alguns mistérios.</li>
                <li>A casa de Holmes existe na vida real e está em Londres.</li>
                <li>A obra ganhou tantas adaptações que entrou para o Guiness.</li>
            </ul>
            </section>
        </main>
    )
}