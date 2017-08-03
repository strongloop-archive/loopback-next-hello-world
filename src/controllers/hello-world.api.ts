export const def = {
    basePath: '/',
    paths: {
        '/helloworld': {
            get: {
                'x-operation-name': 'helloWorld',
                parameters: [
                    {
                        name: 'name',
                        in: 'query',
                        description: 'Your name.',
                        required: false,
                        type: 'string',
                    },
                ],
                responses: {
                    200: {
                        schema: {
                            response: {
                                type: 'string',
                                description: 'Returns a hello world with your (optional) name.',
                            },
                        },
                    },
                },
            },
        },
    },
};

