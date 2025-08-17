import "./styles.css";

type SocialMedia = {
  name: string;
  url: string;
  icon: string;
}[];

const socialMediaList: SocialMedia = [
  {
    name: "Whatsapp",
    url: "/icons/whatsapp.svg",
    icon: "whatsapp",
  },
  {
    name: "Telegram",
    url: "/icons/telegram.svg",
    icon: "facebook",
  },
  {
    name: "Instagram",
    url: "/icons/instagram.svg",
    icon: "instagram",
  },
  {
    name: "Twitter",
    url: "/icons/x.svg",
    icon: "twitter",
  },
];

export default function Header() {
  return (
    <header className="header">
      <div>
        <img src="/icons/logo.svg" alt="" />
      </div>
      <div className="social-media">
        {socialMediaList.map((media, index) => (
          <a className="anchor" href={media.url} key={index}>
            <img src={media.url} />
          </a>
        ))}
      </div>
    </header>
  );
}
