import Card from "../../components/Card";

type CardTimesData = {
  id: number;
  image: string;
}[];

type CardsListData = {
  number: string;
  description: string;
}[];

const cardTimesList: CardTimesData = [
  {
    id: 1,
    image: "/times/time1.png",
  },
  {
    id: 2,
    image: "/times/time2.png",
  },
  {
    id: 3,
    image: "/times/time3.png",
  },
  {
    id: 4,
    image: "/times/time4.png",
  },
  {
    id: 5,
    image: "/times/time5.png",
  },
  {
    id: 6,
    image: "/times/time6.png",
  },
  {
    id: 7,
    image: "/times/time7.png",
  },
  {
    id: 8,
    image: "/times/time8.png",
  },
  {
    id: 9,
    image: "/times/time9.png",
  },
  {
    id: 10,
    image: "/times/time10.png",
  },
  {
    id: 11,
    image: "/times/time11.png",
  },
  {
    id: 12,
    image: "/times/time12.png",
  },
];

const cardList: CardsListData = [
  {
    number: "1",
    description: "Cadastre-se gratuitamente no programa de afiliados.",
  },
  {
    number: "2",
    description: "Receba seu link exclusivo para divulgação.",
  },
  {
    number: "3",
    description: "Indique novos jogadores para a Zero Um Bet.",
  },
  {
    number: "4",
    description: "Ganhe comissões a cada depósito ou aposta realizada.",
  },
];

export default function SectionTimes() {
  return (
    <section className="row-span-6 pt-16 flex justify-center flex-col items-center px-4 bg-gradient-to-b from-[#494949] to-[#151515]">
      <div className="flex justify-center text-3xl mb-10">
        <h3>
          O maior apoiador do <strong className="">Futebol Brasileiro</strong>
        </h3>
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {cardTimesList.map((card) => (
          <div
            key={card.id}
            className="flex items-center justify-center bg-[#282828] w-[67px] h-[67px] p-3 rounded-2xl"
          >
            <img
              className="rounded-lg"
              src={card.image}
              alt={`Time ${card.id}`}
            />
          </div>
        ))}
      </div>
      <div className="mt-16">
        <h3 className="text-[44px] text-center font-light">Como Funciona?</h3>
        <div className="flex flex-wrap gap-6 justify-center mt-10">
          {cardList.map((card, index) => {
            return (
              <Card
                key={index}
                className="w-[471px] scale-75 md:scale-100 rounded-2xl"
              >
                <div className="bg-white text-primary-500 font-bold text-[42px] rounded-2xl h-[60px] w-[60px] flex items-center justify-center">
                  {card.number}
                </div>
                <p>{card.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
      <p className="text-primary-500 text-center text-xl mt-10 max-w-[980px]">
        Indique apenas 10 clientes por semana e veja sua renda crescer mês a
        mês. Quanto mais você divulga, mais você ganha!
      </p>
    </section>
  );
}
