import estilo from './Conteudo.module.css';
import capa from '../assets/capa.jpg';

export function Conteudo() {
    return (
        <main className={estilo.container}>
            <h1 className={estilo.titulo}>Sherlock Holmes - A liga dos cabeças-vermelhas</h1>

            <section>
                <figure>
                    <img src={capa} alt="Capa do livro A liga dos cabeças-vermelhas" className={estilo.capa} />
                </figure>
            </section>

            <section className={estilo.resumo}>
                <p>"A Liga dos Ruivos" a história começa com Watson chegando na casa de Sherlock Holmes. Holmes estava visitando o Sr. Jabez Wilson. Wilson é um joalheiro conta algo que esta acontecendo sem saber se é algo criminoso aconteceu ou não, ele está sendo enganado pelo seu assistente John Clay, mas Clay é um membro da "A Liga dos cabeças-vermelhas", será que Holmes vai conseguir parar o assalto ser concluído.</p>
            </section>
        </main>
    )
}