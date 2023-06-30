\echo 'Delete and recreate lifetracker_test database?'
\prompt 'Return for yes and control-C to cancel>' answer

DROP DATABASE lifetracker_test;
CREATE DATABASE lifetracker_test;
\connect lifetracker_test;

\i lifetracker-schema.sql