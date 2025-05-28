export async function fetchGraphQL(query: string, variables = {}) {
  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_API_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch GraphQL data.");
  }

  return json.data;
}
