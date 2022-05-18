import { Container } from "reactstrap";
import { sql_query } from "../../lib/db";
import Head from 'next/head'
import Image from "next/image";
import Styled from '../../styles/Series.module.css'

export default function Card(props) {
  const { posts } = props;
  console.log(posts);
  if (!posts) return <p>Something went wrong....</p>
  return <div className={Styled.tudo} >
    {
      posts.map(
        (item) =>
          <>
            <Head>
            <title>{process.env.SITE_TITLE} - Series</title>
            </Head>
            <br />
            <Container className={Styled.Container} onClick>
              <Image
                className={Styled.img}
                alt=""
                width={150}
                height={200}
                src={item.poster}
                layout="intrinsic"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+PmxHgAFVgJrwNxZ0wAAAABJRU5ErkJggg=="
              />
              <h2 className={Styled.h2}>{item.name}</h2>
            </Container>
          </>
      )

    }
  </div>
}

export async function getStaticProps(context) {
  const title = process.env.SITE_TITLE
  try {
    const result = await sql_query(`
          SELECT * FROM movies
          LIMIT 10
      `);
    let posts = JSON.parse(JSON.stringify(result))
    return {
      props: { posts }
    };
  } catch (e) {
    return { props: { posts: false } }
  }
}