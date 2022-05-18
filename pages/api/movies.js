import { sql_query } from "../../lib/db";

const handlerMovies = async (_, res) => {
  try {
    const results = await sql_query(`
      SELECT * FROM movies
  `);
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export async function getServerSideProps(context) {
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


export default handlerMovies;