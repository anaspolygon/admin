export interface Category {
    key: React.Key;
    name: string;
    description: string;
    slug: string;
    products: number; // Number of products in the category
  }


  export const data: Category[] = [
    { key: 1, name: "Electronics", description: "Electronic gadgets", slug: "electronics", products: 150 },
    { key: 2, name: "Clothing", description: "Fashionable clothes", slug: "clothing", products: 85 },
    { key: 3, name: "Books", description: "Various kinds of books", slug: "books", products: 120 },
    { key: 4, name: "Furniture", description: "Home and office furniture", slug: "furniture", products: 60 },
    { key: 5, name: "Toys", description: "Children's toys and games", slug: "toys", products: 200 },
  ];
