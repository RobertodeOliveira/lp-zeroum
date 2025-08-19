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
    <section className="col-span-full -col-span-1">
      <div className="flex flex-col col-span-full justify-center items-center mb-3">
        <h1 className="text-[40px] md:text-[44px] font-light text-center">
          Venha para a <strong className="font-bold">ZeroUm</strong>
        </h1>
        <div className="text-center mb-6">
          <h2 className="text-[28px] md:text-[32px]">
            Faça parte do programa de afiliados na{" "}
            <strong className="text-primary-500">ZeroUm.</strong>
          </h2>
          <p className="text-lg md:text-xl">
            A ZeroUm não para de crescer e agora você pode fazer parte do nosso
            time. Vem pra ZeroUm
          </p>
        </div>
        <Button text="Quero ser um afiliado" />
      </div>
      <div className="mt-6 h-[530px] md:h-[480px] flex items-center justify-center col-span-full relative">
        <img
          className="rounded-t-3xl self-end max-w-96 shadow-[0_4px_20px_rgba(0,0,0,0.15),0_10px_40px_rgba(0,0,0,0.12),0_20px_80px_rgba(0,0,0,0.10)] hidden md:block"
          src="/img/desktop/img-deo.png"
          alt=""
        />
        <img
          className="rounded-t-3xl self-end max-w-96 shadow-[0_4px_20px_rgba(0,0,0,0.15),0_10px_40px_rgba(0,0,0,0.12),0_20px_80px_rgba(0,0,0,0.10)] block md:hidden"
          src="/img/mobile/img-deo-mobile.svg"
          alt=""
        />
        <Card className="absolute right-0 w-80 top-20 scale-65 md:scale-100">
          <div className="bg-white rounded-[20px] w-14 h-14 p-2 flex">
            <img src="/icons/users.svg" alt="" width="38px" height="38px" />
          </div>
          <p>Gerente de contas</p>
        </Card>
        <Card className="absolute -right-10 w-80 bottom-6 md:top-0 scale-65 md:scale-100">
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
        <Card className="absolute -left-5  bottom-44 md:bottom-90 scale-65 md:scale-100">
          <div className="bg-white rounded-[20px] w-14 h-14 p-4 flex">
            <img src="/icons/percent.svg" alt="" />
          </div>
          <p
            className="block md:hidden
          "
          >
            Media Kit <br /> Completo
          </p>
          <p className="hidden md:block">Media Kit Completo</p>
        </Card>
        <Card
          className="absolute left-0 w-fit
         top-0 md:bottom-0 scale-65 md:scale-100"
        >
          <div className="bg-white rounded-[20px] w-14 h-14 p-4 flex">
            <img src="/icons/percent.svg" alt="" />
          </div>
          <p></p>
          <p
            className="block md:hidden
          "
          >
            Códigos <br /> promocionais <br /> exclusivos
          </p>
          <p className="hidden md:block">Códigos promocionais exclusivos</p>
        </Card>

        <img
          src="/img/self.svg"
          alt=""
          className=" absolute left-60 hidden md:block"
        />
        <img
          src="/img/iconcontainer.svg"
          alt=""
          className="absolute top-36 left-0 md:left-72 md:bottom-32"
        />
        <img
          src="/img/telemarket.svg"
          alt=""
          className="absolute right-6 bottom-14 -z-100 hidden md:block"
        />
        <img
          src="/img/mobile/telemarket-mobile.svg"
          alt=""
          className="absolute right-6 top-0 -z-100 md:hidden"
        />
        {/* className="absolute right-6 bottom-14 -z-100" */}
      </div>
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
    </section>
  );
}
