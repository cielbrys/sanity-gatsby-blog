export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea43d3c4c181e8c9f2d52ed',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-c56fkikm',
                  apiId: 'b4d07420-141a-4cb7-b056-d1faad11adf0'
                },
                {
                  buildHookId: '5ea43d3c1a021b96010bad03',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5khkkpc5',
                  apiId: '53d8574a-a64e-49d5-9e81-45c9bacc463a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cielbrys/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5khkkpc5.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
