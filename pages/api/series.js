import { sql_query } from "../../lib/db";

const handlerWebseries = async (_, res) => {
  try {
    const results = await sql_query(`
      SELECT * FROM movies
  `);
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handlerWebseries;