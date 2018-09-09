const request = require('request');
const cheerio = require('cheerio');

module.exports = async (ctx, next) => {
	// var workNo=;

	function getWorkInfo() {
		return new Promise(function(resolve, reject) {
			request('http://cubephone.newtouch.com:9999/EDS36Web/Weixin/WorkProjectMng.aspx?workNo=' + ctx.request.query.workNo, function(err, res, body) {

				console.log("--------=======---");
				resolve(body)
			});
		})
	}

	const $ = cheerio.load(await getWorkInfo());
	var rows = $('DataTable').find('row');
	var works=[];
	rows.each(function(){
		works.push({
			"workProID":$(this).attr('workproid'),
			"workProName":$(this).attr('workproname')
		})
	})
	console.log(JSON.stringify(works));
	 ctx.state.data=works;
	 ctx.state.code=1;
}
