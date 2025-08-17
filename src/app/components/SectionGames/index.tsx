import Button from "../Button";
import "./styles.css";

export default function SectionGames() {
  return (
    <main className="contents -col-span-1 teste]">
      <div className="flex flex-col col-span-full justify-center items-center mb-3 max-w-[980px]">
        <h1 className="text-[44px] font-light text-center">
          Mais de <strong className="text-primary-500 font-bold">4000</strong>{" "}
          jogos
        </h1>
        <div className="text-center mb-6">
          <h2 className="text-[44px]"></h2>
          <p className="text-3xl">Transforme sua audiência em lucro real!</p>
          <p className="text-xl">
            No Programa de Afiliados ZeroUm Bet, você tem a chance de monetizar
            seu tráfego e conquistar ganhos consistentes, promovendo a
            plataforma de apostas que mais cresce no Brasil.
          </p>
        </div>
        <Button text="Quero ser um afiliado" />
      </div>
      <div className="flex gap-2">
        <div className="w-[131px] h-[167px] bg-purple-900 rounded-lg"></div>
        <div className="w-[210px] h-[267px] bg-pink-900 rounded-lg"></div>
        <div className="w-[159px] h-[202px] bg-yellow-300 rounded-lg"></div>
        <div className="w-[210px] h-[267px] bg-blue-700 rounded-lg"></div>
        <div className="w-[210px] h-[266px] bg-green-900 rounded-lg"></div>
        <div className="w-[138px] h-[176px] bg-red-900 rounded-lg"></div>
      </div>
    </main>
  );
}
