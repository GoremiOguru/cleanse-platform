import { createClient } from '@libsql/client';
import dotenv from 'dotenv';
dotenv.config();

const client = createClient({
  url: process.env.DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

async function main() {
  try {
    console.log("Altering User table to add firstName...");
    await client.execute('ALTER TABLE User ADD COLUMN firstName TEXT;');
    console.log("Added firstName.");
  } catch (e) {
    if (e.message.includes('duplicate column name')) {
      console.log("firstName already exists.");
    } else {
      console.error(e);
    }
  }

  try {
    console.log("Altering User table to add lastName...");
    await client.execute('ALTER TABLE User ADD COLUMN lastName TEXT;');
    console.log("Added lastName.");
  } catch (e) {
    if (e.message.includes('duplicate column name')) {
      console.log("lastName already exists.");
    } else {
      console.error(e);
    }
  }

  const newColumns = [
    'personalityType',
    'personalityLabel',
    'personalityTraits',
    'personalityDescription'
  ];

  for (const col of newColumns) {
    try {
      console.log(`Altering User table to add ${col}...`);
      await client.execute(`ALTER TABLE User ADD COLUMN ${col} TEXT;`);
      console.log(`Added ${col}.`);
    } catch (e) {
      if (e.message.includes('duplicate column name')) {
        console.log(`${col} already exists.`);
      } else {
        console.error(e);
      }
    }
  }

  console.log("Done.");
}

main();
