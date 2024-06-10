import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  documents: ['./src/shared/api/queries/**/*.ts'],
  generates: {
    'src/': {
      config: {
        withHooks: true,
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'shared/types/apollo.ts',
        extension: '.generated.tsx',
      },
    },
    'src/shared/types/apollo.ts': { plugins: ['typescript'] },
  },
  ignoreNoDocuments: true,
  schema: 'https://main.inctagram.fun/api/v1/graphql',
}

export default config
