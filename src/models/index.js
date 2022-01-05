// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Answer, Question, Category } = initSchema(schema);

export {
  Answer,
  Question,
  Category
};