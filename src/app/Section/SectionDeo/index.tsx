import Image from "next/image";
import Button from "../../components/Button";

export default function SectionDeo() {
  return (
    <section className="flex mt-20 justify-center gap-28 mb-6 flex-wrap">
      <div className="flex flex-col col-span-full justify-center items-center mb-3">
        <h1 className="text-[44px] font-light text-center">
          Jogue o jogo dos grandes
        </h1>
        <div className="text-center mb-6 max-w-[514px]">
          <p className="text-2xl">
            Transforme cada clique em comissão.{" "}
            <span className="text-primary-500">Cadastre-se agora,</span> receba
            seu link exclusivo e comece a lucrar hoje mesmo!
          </p>
        </div>
        <Button text="Seja um afiliado" />
      </div>
      <img
        src="/img/desktop/deo.svg"
        alt="Deolane"
        className="hidden md:block"
      />
      <img
        src="/img/mobile/love-deo-mobile.svg"
        alt="deolane"
        className="block md:hidden"
      />
    </section>
  );
}
