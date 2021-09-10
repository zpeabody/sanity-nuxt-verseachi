export default {
  name: 'episode',
  type: 'document',
  title: 'Episode',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
      {
      name: 'episodeTitle',
      type: 'string',
      title: 'Title'
    },
	{
      name: 'episodeImage',
      type: 'episodeImage',
      title: 'Image'
    },
    {
	  name: 'episodeSummary',
	  type: 'string'
	  title: 'Episode Summary'
	}
	],
  preview: {
    select: {
      title: 'episodeTitle',
      media: 'episodeImage',
      summary: 'episodeSummary',
      
    },
    prepare ({title, media, episodeSummary}) {
      return {
        title,
        media,
        summary: `${episodeSummary} `` : ''}`
    }
  }
