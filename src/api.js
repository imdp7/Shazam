export const charts = {
	method: 'GET',
	url: 'https://shazam.p.rapidapi.com/charts/track',
	params: {locale: 'en-US', pageSize: '20', startFrom: '0'},
	headers: {
	  'x-rapidapi-host': 'shazam.p.rapidapi.com',
	  'x-rapidapi-key': '8be226908emsh037a6844bf11d3ap1be370jsn96a5781429d1'
	}
      };