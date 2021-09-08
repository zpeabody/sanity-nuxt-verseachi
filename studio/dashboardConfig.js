export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-verseachi-studio',
                  apiId: '1a6fcc27-8af3-4b7f-b562-8010086cf031'
                },
                {
                  buildHookId: '61391b5684731a1ab73399b0',
                  title: 'Events Website',
                  name: 'sanity-nuxt-verseachi',
                  apiId: '2caa39cb-029c-4879-889a-4181a14f2229'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zpeabody/sanity-nuxt-verseachi',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-verseachi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
