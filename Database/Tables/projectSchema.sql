USE JituConstructions

BEGIN 
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
    END CATCH

-- USE JituConstructions
 
 DROP TABLE IF EXISTS projectsTable

-- SELECT * FROM projectsTable
