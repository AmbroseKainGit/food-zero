import Link from "next/link";

interface Props {
  image: string;
  title: string;
}

export const CallToMenuCard = ({ image, title }: Props) => {
  const backgroundImg = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <Link href={"/menu"} className="calltomenu-card-link">
      <div className="calltomenu-card-container" style={backgroundImg}>
        <div className="title-calltomenu">
          <h2>{title}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="28"
            viewBox="0 0 48 28"
            fill="none"
          >
            <g clip-path="url(#clip0_8003_392)">
              <path
                d="M39.6221 14.9692H1.71875V13.0317H39.6221H41.962L40.3068 11.3777L32.6866 3.76283L34.0591 2.36005L45.6961 14.0005L34.0592 25.6409L32.6884 24.2399L40.307 16.6231L41.9612 14.9692H39.6221Z"
                fill="#233000"
                stroke="black"
                stroke-width="1.9375"
              />
            </g>
            <defs>
              <clipPath id="clip0_8003_392">
                <rect width="48" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </Link>
  );
};
