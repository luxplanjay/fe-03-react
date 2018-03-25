module.exports = {
  type: 'object',
  properties: {
    notes: {
      type: 'array',
      minItems: 2,
      maxItems: 5,
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            unique: true,
            minimum: 1,
          },
          title: {
            type: 'string',
            faker: 'lorem.words',
          },
          text: {
            type: 'string',
            faker: 'lorem.paragraph',
          },
          completed: {
            type: 'boolean',
          },
          tags: {
            type: 'array',
            items: {
              type: 'string',
              faker: 'lorem.word',
            },
            minItems: 1,
            maxItems: 3,
            uniqueItems: false,
          },
        },
        required: ['id', 'title', 'text', 'completed', 'tags'],
      },
    },
  },
};
