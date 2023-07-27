const mssql = require ('mssql');
const { sqlConfig } = require('../../Config/config');


const CreateProjectsTable = async (req, res) => {
  try {
    const table = `BEGIN 
  TRY
    CREATE TABLE projectsTable(
        id VARCHAR(255) PRIMARY KEY,
        project_name VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        start_date DATE NOT NULL,
        end_date DATE NOT NULL
    )
    END TRY
BEGIN
    CATCH
        THROW 50001, 'Table already exist', 1;
    END CATCH`;

    const pool = await mssql.connect(sqlConfig);

    await pool.query(table, (err) => {
      if (err instanceof mssql.RequestError) {
        console.log({ Error: err.message });
      } else {
        console.log("Table created successfully");
      }
    });
  } catch (error) {
    return res({ Error: error });
  }
};

// CreateProjectsTable();

module.exports = {
    CreateProjectsTable
}
