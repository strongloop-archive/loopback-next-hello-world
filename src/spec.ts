import { OpenApiSpec } from "@loopback/core";

export const spec: OpenApiSpec = {
  swagger: "2.0",
  info: {
    title: "Hello world app",
    version: require("../package.json").version
  },
  basePath: "/",
  paths: {
    /*
    "/deals": {
      get: {
        "x-operation-name": "search",
        "x-controller-name": "DealController",
        parameters: [{ name: "DealResource", type: "string", in: "query" }],
        responses: {
          "200": {
            description: "successful response",
            schema: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: {
                    description: "The unique identifier for a product",
                    type: "integer"
                  },
                  name: { type: "string" },
                  slug: { type: "string" },
                  price: {
                    type: "number",
                    minimum: 0,
                    exclusiveMinimum: true
                  },
                  category: {
                    description: "the category",
                    type: "string"
                  },
                  available: { type: "boolean" },
                  description: {
                    description: "the product description",
                    type: "string"
                  },
                  label: { type: "string" },
                  endDate: { type: "string", format: "date" }
                }
              }
            }
          }
        }
      }
    },
    "/deal/{slug}": {
      get: {
        "x-operation-name": "getDetails",
        "x-controller-name": "Controller",
        parameters: [{ name: "slug", type: "string", in: "path" }],
        responses: {
          "200": {
            description: "successful response",
            schema: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: {
                    description: "The unique identifier for a product",
                    type: "integer"
                  },
                  name: { type: "string" },
                  slug: { type: "string" },
                  price: {
                    type: "number",
                    minimum: 0,
                    exclusiveMinimum: true
                  },
                  category: {
                    description: "the category",
                    type: "string"
                  },
                  available: { type: "boolean" },
                  description: {
                    description: "the product description",
                    type: "string"
                  },
                  label: { type: "string" },
                  endDate: { type: "string", format: "date" }
                }
              }
            }
          }
        }
      }
    },
    "/category/{slug}/products": {
      get: {
        "x-operation-name": "search",
        "x-controller-name": "ProductController",
        parameters: [{ name: "CategoryResource", type: "string", in: "query" }],
        responses: {
          "200": {
            description: "successful response",
            schema: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: {
                    description: "The unique identifier for a product",
                    type: "integer"
                  },
                  name: { type: "string" },
                  slug: { type: "string" },
                  price: {
                    type: "number",
                    minimum: 0,
                    exclusiveMinimum: true
                  },
                  category: {
                    description: "the category",
                    type: "string"
                  },
                  available: { type: "boolean" },
                  description: {
                    description: "the product description",
                    type: "string"
                  },
                  label: { type: "string" },
                  endDate: { type: "string", format: "date" }
                }
              }
            }
          }
        }
      }
    },
    "/category/{slug}": {
      get: {
        "x-operation-name": "getDetails",
        "x-controller-name": "Controller",
        parameters: [{ name: "slug", type: "string", in: "path" }],
        responses: {
          "200": {
            description: "successful response",
            schema: { type: "array", items: {} }
          }
        }
      }
    },
    */
    "/products": {
      get: {
        "x-operation-name": "search",
        "x-controller-name": "ProductController",
        parameters: [{ name: "ProductResource", type: "string", in: "query" }],
        responses: {
          "200": {
            description: "successful response",
            schema: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: {
                    description: "The unique identifier for a product",
                    type: "integer"
                  },
                  name: { type: "string" },
                  slug: { type: "string" },
                  price: {
                    type: "number",
                    minimum: 0,
                    exclusiveMinimum: true
                  },
                  category: {
                    description: "the category",
                    type: "string"
                  },
                  available: { type: "boolean" },
                  description: {
                    description: "the product description",
                    type: "string"
                  },
                  label: { type: "string" },
                  endDate: { type: "string", format: "date" }
                }
              }
            }
          }
        }
      }
    },
    "/product/{slug}": {
      get: {
        "x-operation-name": "getDetails",
        "x-controller-name": "ProductController",
        parameters: [
          {
            name: "slug",
            type: "string",
            in: "path",
            required: true,
            "x-example": "pen",
          }
        ],
        responses: {
          "200": {
            description: "successful response",
            schema: {
              type: "object",
              properties: {
                id: {
                  description: "The unique identifier for a product",
                  type: "integer"
                },
                name: { type: "string" },
                slug: { type: "string" },
                price: {
                  type: "number",
                  minimum: 0,
                  exclusiveMinimum: true
                },
                category: {
                  description: "the category",
                  type: "string"
                },
                available: { type: "boolean" },
                description: {
                  description: "the product description",
                  type: "string"
                },
                label: { type: "string" },
                endDate: { type: "string", format: "date" }
              }
            }
          }
        }
      }
    }
  }
};
