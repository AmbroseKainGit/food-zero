import Image from "next/image";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <div className="call-container">
      <h2>Our Menu</h2>
      <p>
        Indulge your taste buds and explore our exquisite menu. Join us and
        savor the flavors of Food Zero today
      </p>
      <Image
        src="/static/vegetation-bg.webp"
        width={880}
        height={946}
        alt="vegetation"
      />

    <button><Link href={"/"}>View Menu</Link></button>
    </div>
  );
};
