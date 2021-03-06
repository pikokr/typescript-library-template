/*
 * Copyright (c) 2022 pikokr. Licensed under the MIT License.
 */

import { runGenerator } from '@discordjs/ts-docgen'

runGenerator({
  existingOutput: 'docs/typedoc-out.json',
  custom: 'docs/index.yml',
  output: 'docs/docs.json',
})
