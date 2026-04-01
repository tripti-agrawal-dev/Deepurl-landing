import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '311a4b43f89953cd097a5618727a266f35d49d11', queries,  });
export default client;
  