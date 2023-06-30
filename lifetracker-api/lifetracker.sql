\echo 'Delete and recreate lifetracker database?'
\prompt 'Return for yes and control-C to cancel>' answer

DROP DATABASE lifetracker;
CREATE DATABASE lifetracker;
\connect lifetracker;

\i lifetracker-schema.sql