export function About() {
  return (
    <div className="sm:min-h-screen relative ">
      {/* Conteúdo */}
      <div className="flex flex-col justify-center items-center px-8 pt-16 sm:pt-24 lg:pt-32">
        <div className="text-white max-w-4xl">
          <h1 className="text-6xl mb-6 select-none font-bold text-center reveal">
            Sobre
          </h1>
          <div className="text-center">
            <p className="text-left sm:text-base lg:text-xl lg:text-balance tracking-wider mb-8 reveal">
              O que me motiva como desenvolvedor é a capacidade de transformar
              ideias em soluções reais e funcionais através da programação.
              Tenho paixão por resolver problemas complexos e criar projetos que
              agregam valor e inovação. Para mim, a tecnologia é uma área em
              constante evolução, sempre trazendo novos desafios, o que me
              impulsiona a continuar aprendendo e aprimorando minhas
              habilidades, seja em uma nova linguagem, framework ou metodologia.
              Minha trajetória na programação começou com uma curiosidade
              natural sobre o funcionamento do mundo digital.
            </p>

            <p className="text-left sm:text-base lg:text-xl lg:text-balance tracking-wider reveal">
              Além de estar imerso no mundo da programação, acredito na
              importância de equilibrar a vida profissional com outras
              atividades. Gosto de explorar diferentes áreas do conhecimento,
              especialmente através da leitura de livros sobre comunicação,
              finanças e psicologia, que ampliam minha visão de mundo. Também
              valorizo a prática de esportes ao ar livre, como corrida e
              voleibol, para manter a mente e o corpo em equilíbrio. Momentos de
              lazer com a família são essenciais para renovar a energia e trazer
              novas perspectivas criativas para os projetos. Se você está em
              busca de um desenvolvedor comprometido, que busca inovação e
              entrega soluções sob medida para suas necessidades, ficarei feliz
              em contribuir com seu próximo projeto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
