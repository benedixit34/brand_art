import { fetchGraphQL } from "./graphql";

function getColor(index: number) {
  const colors = [
    "bg-rose-500",
    "bg-amber-900",
    "bg-yellow-600",
    "bg-blue-500",
    "bg-green-500",
  ];

  return colors[index % colors.length];
}

export type PortfolioCase = {
  id: string;
  num: string;
  title: string;
  slug: string;
  color: string;
  img: string;
  alt: string;
};

export async function GetPortfolios(): Promise<PortfolioCase[]> {
  const QUERY = `
    query GetPortfolios {
      portfolios {
        nodes {
          id
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL(QUERY);

  const nodes = data?.portfolios?.nodes ?? [];

  const total = nodes.length;

  return nodes.map((item: any, index: number) => ({
    id: item.id,
    num: `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`,
    title: item.title,
    slug: item.slug,
    color: getColor(index),
    img: item.featuredImage?.node?.sourceUrl ?? "",
    alt: item.title,
  }));
}