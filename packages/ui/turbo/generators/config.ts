import type { PlopTypes } from "@turbo/gen"

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator("react-component", {
    description: "Adds a new react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "templates/Component.test.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "templates/Component.stories.tsx.hbs",
      },
      {
        type: "modify",
        // last line
        pattern: /$/,
        path: "src/index.ts",
        template:
          'export { {{pascalCase name}}, type {{pascalCase name}}Props } from "./components/{{pascalCase name}}/{{pascalCase name}}"\n',
      },
    ],
  })
}
