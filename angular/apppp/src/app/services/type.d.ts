declare interface Joke {
  id: number;
  joke: string;
  categories: Array<string>;
}

declare interface JokeResponse {
  type: string;
  value: Array<Joke>;
}
