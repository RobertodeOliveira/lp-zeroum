import Button from "../Button";
import Card from "../Card";

type CardData = {
  id: number;
  icon: string;
  description: string;
}[];

const cardList: CardData = [
  {
    id: 1,
    icon: "",
    description: "Media Kit Completo",
  },
  {
    id: 2,
    icon: "",
    description: "Codigos promocionais exclusivos",
  },
  {
    id: 3,
    icon: "",
    description: `PA <br> + REVSHARE`,
  },
  {
    id: 4,
    icon: "",
    description: `Gerente de contas`,
  },
];

export default function SectionBanner() {
  return (
    <main className="contents col-span-full">
      <div className="flex flex-col col-span-full justify-center items-center mb-3">
        <h1 className="text-[44px] font-light text-center">
          Venha para a <strong className="font-bold">ZeroUm</strong>
        </h1>
        <div className="text-center mb-6">
          <h2 className="text-3xl">
            Faça parte do programa de afiliados na{" "}
            <strong className="text-primary-500">ZeroUm.</strong>
          </h2>
          <p className="text-xl">
            A ZeroUm não para de crescer e agora você pode fazer parte do nosso
            time. Vem pra ZeroUm
          </p>
        </div>
        <Button text="Quero ser um afiliado" />
      </div>
      <div className="h-[60vh] flex items-center justify-center col-span-full relative">
        <img
          className="rounded-t-3xl self-end max-w-96"
          src="/iphone.svg"
          alt=""
        />
        <Card className="absolute right-0 bottom-3 ">
          <div className="bg-white rounded-lg p-4">
            <img src="/icons/users.svg" alt="" />
          </div>
          <p>Geretas</p>
        </Card>
        <Card className="absolute right-0 bottom-80 scale-75 md:scale-100">
          <div className="bg-white rounded-lg p-4">
            <img src="/icons/users.svg" alt="" />
          </div>
          <p>teste de contas</p>
        </Card>
        <Card className="absolute left-0 bottom-90 scale-75 md:scale-100">
          <div className="bg-white rounded-lg p-4">
            <img src="/icons/users.svg" alt="" />
          </div>
          <p>Geren contas</p>
        </Card>
        <Card className="absolute left-0 bottom-3 scale-75 md:scale-100">
          <div className="bg-white rounded-lg p-4">
            <img src="/icons/users.svg" alt="" />
          </div>
          <p>contas</p>
        </Card>
      </div>
    </main>
  );
}
