export function SectionProviders() {
  type ProvideData = {
    id: number;
    icon: string;
    name: string;
  };

  const providersList = [
    {
      id: 1,
      icon: "/icons/pragmaticPlay.svg",
      name: "PragmaticPlay",
    },
    {
      id: 2,
      icon: "/icons/redrake.svg",
      name: "RedRake",
    },
    {
      id: 3,
      icon: "/icons/evolution.svg",
      name: "Evolution",
    },
    {
      id: 4,
      icon: "/icons/ezugi.svg",
      name: "Ezugi",
    },
    {
      id: 5,
      icon: "/icons/netent.svg",
      name: "NetEnt",
    },
    {
      id: 6,
      icon: "/icons/coleta.svg",
      name: "Coleta",
    },
    {
      id: 7,
      icon: "/icons/pgsoft.svg",
      name: "PG Soft",
    },
    {
      id: 8,
      icon: "/icons/spribe.svg",
      name: "Spribe",
    },
    {
      id: 9,
      icon: "/icons/smartsoft.svg",
      name: "SmartSoft",
    },
  ];

  return (
    <section className="py-12">
      <div className="flex overflow-hidden justify-center items-center gap-2">
        <div className="flex">
          {providersList.map((providers) => {
            return (
              <div
                key={providers.id}
                className="flex gap-3.5 items-center p-4 bg-primary-600 w-[167px] rounded-lg"
              >
                <img src={providers.icon} alt={`logo ${providers.name}`} />
                <p>{providers.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
