import lqipModern from "lqip-modern";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ imageUrl, previewImageUrl }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>LQIP demo with Next.js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://nextjs.org">this demo of LQIP with Next.js!</a>
        </h1>

        <h2 className={styles.description}>
          Read the blog post{" "}
          <a href="https://blog.anishde.dev/making-a-blog-with-directus-mdx-and-nextjs-on-demand-isr">
            Here
          </a>
        </h2>

        <div style={{ marginTop: "4rem" }}>
          <Image
            src={imageUrl}
            alt="Vercel mug with computer peripherals"
            height={480}
            width={320}
            placeholder="blur"
            blurDataURL={previewImageUrl}
          />
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const unsplashImageUrl =
    "https://images.unsplash.com/photo-1642083139428-9ee5fa423c46";
  const image = await fetch(unsplashImageUrl);
  const imageBuffer = Buffer.from(await image.arrayBuffer());
  const previewImage = await lqipModern(imageBuffer, { outputFormat: "jpeg" });

  return {
    props: {
      imageUrl: unsplashImageUrl,
      previewImageUrl: previewImage.metadata.dataURIBase64,
    },
  };
};
