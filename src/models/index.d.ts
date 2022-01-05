import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AnswerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuestionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Answer {
  readonly id: string;
  readonly Title?: string;
  readonly questionID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Answer, AnswerMetaData>);
  static copyOf(source: Answer, mutator: (draft: MutableModel<Answer, AnswerMetaData>) => MutableModel<Answer, AnswerMetaData> | void): Answer;
}

export declare class Question {
  readonly id: string;
  readonly Title?: string;
  readonly categoryID?: string;
  readonly Answers?: (Answer | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Question, QuestionMetaData>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question, QuestionMetaData>) => MutableModel<Question, QuestionMetaData> | void): Question;
}

export declare class Category {
  readonly id: string;
  readonly Title?: string;
  readonly Description?: string;
  readonly Questions?: (Question | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}