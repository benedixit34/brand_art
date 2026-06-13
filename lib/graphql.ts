const WP_GRAPHQL_URL =
  "https://aquamarine-tapir-885588.hostingersite.com/graphql";

export async function fetchGraphQL(query: string, variables = {}) {
  const res = await fetch(WP_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("GraphQL error");
  }

  return json.data;
}