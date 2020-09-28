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
                  buildHookId: '5f7180a01619915d658eb1c8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5pr6hrgp',
                  apiId: '1b8f6c6a-cfc6-4b69-9358-9cc3ca9e4715'
                },
                {
                  buildHookId: '5f7180a10684ae49519466bb',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-rz2sq9u6',
                  apiId: '6da460e3-a6ee-4897-8f56-79feaa35bda3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/siddu-nc/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-rz2sq9u6.netlify.app', category: 'apps' }
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
