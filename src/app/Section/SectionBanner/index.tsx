import Button from "../../components/Button";
import Card from "../../components/Card";

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
    <section className="contents col-span-full -col-span-1">
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
      <div className="h-[50vh] flex items-center justify-center col-span-full relative">
        <img
          className="rounded-t-3xl self-end max-w-96 shadow-[0_4px_20px_rgba(0,0,0,0.15),0_10px_40px_rgba(0,0,0,0.12),0_20px_80px_rgba(0,0,0,0.10)]"
          src="/img/img-deo.png"
          alt=""
        />

        <Card className="absolute right-0 w-80 bottom-3 rounded-lg">
          <div className="bg-white rounded-[20px] w-14 h-14 p-2 flex">
            <img src="/icons/users.svg" alt="" width="38px" height="38px" />
          </div>
          <p>Gerente de contas</p>
        </Card>
        <Card className="absolute right-12 w-80 bottom-80 scale-75 md:scale-100 rounded-lg">
          <div className=" flex flex-col w-full gap-3">
            <div className="flex gap-4">
              <div className="bg-white rounded-[20px] w-14 h-14 p-4 flex">
                <img src="/icons/percent.svg" alt="" />
              </div>
              <p className="font-bold">
                CPA
                <br /> + REVSHARE
              </p>
            </div>
            <div className="flex justify-between items-end">
              <div className="flex flex-col justify-end">
                <small className="text-sm">Seus Ganhos</small>
                <div className="flex gap-2">
                  <span className="text-primary-500 text-base">R$</span>
                  <p className="text-[28px] font-bold">1.990,93</p>
                </div>
              </div>
              <img src="/icons/payments.svg" alt="" />
            </div>
          </div>
        </Card>
        <Card className="absolute left-0 w-80 bottom-90 scale-75 md:scale-100 rounded-lg">
          <div className="bg-white rounded-[20px] w-14 h-14 p-4 flex">
            <img src="/icons/percent.svg" alt="" />
          </div>
          <p>Media Kit Completo</p>
        </Card>
        <Card className="absolute left-0 w-80 bottom-3 scale-75 md:scale-100 rounded-lg">
          <div className="bg-white rounded-[20px] w-14 h-14 p-4 flex">
            <img src="/icons/percent.svg" alt="" />
          </div>
          <p>Códigos promocionais exclusivos</p>
        </Card>

        <img src="/img/self.svg" alt="" className=" absolute left-60" />
        <img
          src="/img/iconcontainer.svg"
          alt=""
          className="absolute left-72 bottom-32"
        />
        <img
          src="/img/telemarket.svg"
          alt=""
          className="absolute right-6 bottom-14 -z-100"
        />
      </div>
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
    </section>
  );
}
