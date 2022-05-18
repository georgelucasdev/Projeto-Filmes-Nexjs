import { Container } from "reactstrap";
import { sql_query } from "../../lib/db";
import Image from "next/image";
import Styled from '../../styles/Movie.module.css'
import Head from 'next/head'
import Link from "next/link";
import { useRouter } from 'next/router'

export default function Movie(props) {

    const { posts } = props;
    const router = useRouter()
    const { slug } = router.query
    console.log(posts);
    if (!posts) return <p>Something went wrong....</p>
    return <div className={Styled.tudo} >
      {
        posts.map(
          (item) =>
            <>
              <Head>
                <title>{process.env.TITLE} - Filmes</title>
              </Head>
              <br />
              <Link href={`/movie/${slug}`} >
                <Container className={Styled.Container} onclick="/movie/${item.title}" >
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
              </Link>
            </>
        )

      }
    </div>
  }

  export async function getStaticProps(context) {
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
