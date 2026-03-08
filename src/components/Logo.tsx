import { Link } from "react-router-dom";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showSubtitle?: boolean;
  linkTo?: string;
  className?: string;
  inverted?: boolean;
}

const Logo = ({ size = "md", showSubtitle = true, linkTo = "/", className = "", inverted = false }: LogoProps) => {
  const sizes = {
    sm: { icon: 32, title: "text-lg", subtitle: "text-[8px]", gap: "gap-2" },
    md: { icon: 40, title: "text-xl", subtitle: "text-[9px]", gap: "gap-2.5" },
    lg: { icon: 48, title: "text-2xl", subtitle: "text-[10px]", gap: "gap-3" },
  };

  const s = sizes[size];
  const textColor = inverted ? "text-white" : "text-[#4a4a4a]";
  const subtitleColor = inverted ? "text-white/70" : "text-[#6b7280]";

  const content = (
    <div className={`flex items-center ${s.gap} ${className}`}>
      {/* House + Flame Icon */}
      <svg
        width={s.icon}
        height={s.icon * 1.1}
        viewBox="0 0 60 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* House outline */}
        <path
          d="M10 28L30 8L50 28V54C50 56.2 48.2 58 46 58H14C11.8 58 10 56.2 10 54V28Z"
          stroke="#6b7280"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Wrench handle */}
        <line x1="18" y1="58" x2="18" y2="66" stroke="#6b7280" strokeWidth="3" strokeLinecap="round" />
        <path d="M15 66C15 64 18 62 18 62C18 62 21 64 21 66" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Flame - red part */}
        <path
          d="M30 20C30 20 22 30 22 37C22 42.5 25.5 46 30 46C34.5 46 38 42.5 38 37C38 30 30 20 30 20Z"
          fill="#d42427"
        />
        {/* Flame - blue drop */}
        <path
          d="M30 32C30 32 25 37 25 40.5C25 43.5 27.2 46 30 46C32.8 46 35 43.5 35 40.5C35 37 30 32 30 32Z"
          fill="#2856a3"
        />
      </svg>

      {/* Text */}
      <div className="flex flex-col">
        <span className={`font-heading font-bold leading-tight tracking-tight ${s.title} ${textColor}`}>
          Home Tec
        </span>
        {showSubtitle && (
          <>
            <span className={`font-body font-semibold leading-tight ${s.subtitle} ${subtitleColor}`}>
              B. Fröhlich Haustechnik &amp; Service GmbH
            </span>
            <span className={`font-body leading-tight ${s.subtitle} ${subtitleColor} opacity-80`}>
              Heizung · Sanitär · Klima · Lüftung · Solar
            </span>
          </>
        )}
      </div>
    </div>
  );

  if (linkTo) {
    return <Link to={linkTo}>{content}</Link>;
  }
  return content;
};

export default Logo;
