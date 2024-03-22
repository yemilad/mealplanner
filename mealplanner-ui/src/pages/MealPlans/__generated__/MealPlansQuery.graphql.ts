/**
 * @generated SignedSource<<984c30565cc126180a9d2c0a60532215>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MealPlansQuery$variables = {};
export type MealPlansQuery$data = {
  readonly mealPlans: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly cursor: any | null;
      readonly node: {
        readonly id: string;
        readonly rowId: any;
        readonly nameEn: string;
        readonly descriptionEn: string | null;
        readonly isTemplate: boolean | null;
        readonly person: {
          readonly fullName: string;
        } | null;
        readonly tags: ReadonlyArray<string | null> | null;
        readonly mealPlanEntries: {
          readonly nodes: ReadonlyArray<{
            readonly meal: {
              readonly id: string;
              readonly photoUrl: string | null;
            } | null;
          }>;
        };
      };
    }>;
  } | null;
  readonly gqLocalState: {
    readonly selectedMealPlanTags: ReadonlyArray<string> | null;
  };
  readonly " $fragmentSpreads": FragmentRefs<"MealPlansTags_tags">;
};
export type MealPlansQuery = {
  variables: MealPlansQuery$variables;
  response: MealPlansQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "Literal",
  "name": "orderBy",
  "value": [
    "CREATED_AT_DESC"
  ]
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nameEn",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "descriptionEn",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isTemplate",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tags",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "Meal",
  "kind": "LinkedField",
  "name": "meal",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "photoUrl",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endCursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasNextPage",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v12 = {
  "kind": "ClientExtension",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__id",
      "storageKey": null
    }
  ]
},
v13 = {
  "kind": "ClientExtension",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "GQLocalState",
      "kind": "LinkedField",
      "name": "gqLocalState",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "selectedMealPlanTags",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ]
},
v14 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1000
  },
  (v0/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MealPlansQuery",
    "selections": [
      {
        "alias": "mealPlans",
        "args": [
          (v0/*: any*/)
        ],
        "concreteType": "MealPlansConnection",
        "kind": "LinkedField",
        "name": "__connection_mealPlans_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MealPlansEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "MealPlan",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Person",
                    "kind": "LinkedField",
                    "name": "person",
                    "plural": false,
                    "selections": [
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MealPlanEntriesConnection",
                    "kind": "LinkedField",
                    "name": "mealPlanEntries",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "MealPlanEntry",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v9/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v10/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v11/*: any*/),
          (v12/*: any*/)
        ],
        "storageKey": "__connection_mealPlans_connection(orderBy:[\"CREATED_AT_DESC\"])"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "MealPlansTags_tags"
      },
      (v13/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MealPlansQuery",
    "selections": [
      {
        "alias": null,
        "args": (v14/*: any*/),
        "concreteType": "MealPlansConnection",
        "kind": "LinkedField",
        "name": "mealPlans",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MealPlansEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "MealPlan",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Person",
                    "kind": "LinkedField",
                    "name": "person",
                    "plural": false,
                    "selections": [
                      (v7/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MealPlanEntriesConnection",
                    "kind": "LinkedField",
                    "name": "mealPlanEntries",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "MealPlanEntry",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v9/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v10/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v11/*: any*/),
          (v12/*: any*/)
        ],
        "storageKey": "mealPlans(first:1000,orderBy:[\"CREATED_AT_DESC\"])"
      },
      {
        "alias": null,
        "args": (v14/*: any*/),
        "filters": [
          "orderBy"
        ],
        "handle": "connection",
        "key": "connection_mealPlans",
        "kind": "LinkedHandle",
        "name": "mealPlans"
      },
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 100
          }
        ],
        "concreteType": "AllMealPlanTagsConnection",
        "kind": "LinkedField",
        "name": "allMealPlanTags",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AllMealPlanTagEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "node",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "allMealPlanTags(first:100)"
      },
      (v13/*: any*/)
    ]
  },
  "params": {
    "cacheID": "4e3e01d91e65e556379dcec273f10159",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "mealPlans"
          ]
        }
      ]
    },
    "name": "MealPlansQuery",
    "operationKind": "query",
    "text": "query MealPlansQuery {\n  mealPlans(orderBy: [CREATED_AT_DESC], first: 1000) {\n    edges {\n      cursor\n      node {\n        id\n        rowId\n        nameEn\n        descriptionEn\n        isTemplate\n        person {\n          fullName\n          id\n        }\n        tags\n        mealPlanEntries {\n          nodes {\n            meal {\n              id\n              photoUrl\n            }\n            id\n          }\n        }\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  ...MealPlansTags_tags\n}\n\nfragment MealPlansTags_tags on Query {\n  allMealPlanTags(first: 100) {\n    edges {\n      node\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "463d2cac84ba2599ca68d7f03aa5d63e";

export default node;
