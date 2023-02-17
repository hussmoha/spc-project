const Pool = require('pg').Pool 
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'SPC',
  password: 'qwerty',
  port: 5432,
});

const getMeasurements = (request, response) => {
  pool.query('SELECT * FROM spc_schema.measurement', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getMeasurementByPartId = (request, response) => {
  const partId = request.params.partId;

  pool.query(
    'SELECT * FROM spc_schema.measurement WHERE part_Id = $1',
    [partId],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createMeasurement = async (request, response) => {
  try {
    const {
      batch_number,
      creator,
      date,
      approved,
      fz1,
      hxy2,
      fy3,
      fx4,
      fx5,
    } = request.body;
    const newMeasure = await pool.query(
      `INSERT INTO spc_schema.measurement ( creator, approved, date, batch_number, fz1, hxy2, fy3, fx4, fx5) 
      VALUES ($1, $2, $3,$4, $5, $6, $7, $8, $9)`,[ creator, approved, date, batch_number, fz1, hxy2, fy3, fx4, fx5])
    response.json(newMeasure)
  } catch (err) {
    console.error(err.message)
  }

};

const updateMeasurement = (request, response) => {
  const partId = request.params.partId;
  const {
    batchNumber,
    creator,
    date,
    approved,
    Fz1,
    Hxy2,
    Fy3,
    Fx4,
    Fx5,
  } = request.body;

  pool.query(
    'UPDATE spc_schema.measurement SET Batch_number = $1, creator = $2, date = $3, approved = $4, 1Fz = $5, 2Hxy = $6, 3Fy = $7, 4Fx = $8, 5Fx = $9 WHERE part_Id = $10',
    [batchNumber, creator, date, approved, Fz1, Hxy2, Fy3, Fx4, Fx5, partId],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Measurement modified with partId: ${partId}`);
    }
  );
};

const deleteMeasurement = (request, response) => {
  const partId = request.params.partId;

  pool.query(
    'DELETE FROM spc_schema.measurement WHERE part_Id = $1',
    [partId],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Measurement deleted with partId: ${partId}`);
    }
    );
  };

module.exports = {
  getMeasurements,
  getMeasurementByPartId,
  createMeasurement,
  updateMeasurement,
  deleteMeasurement,
};

