import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/IMG_5287.jpg"
          alt="An image showing Haidra"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Haidra</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
}
