var strftime = require('strftime');

module.exports = {
	parse: function(url){
		var unix;
		var date;
		var re = /^[0-9]+$/;
		var string = url.substr(1);
		if(re.test(string)){
      unix = Number(string);
      date = strftime("%B %e, %Y", new Date(unix*1000));
      return {unix: unix, natural: date};
		}else{
			var fixed = string.split(/%20/).join(" ");
			unix = Date.parse(fixed)/1000;
			if(isNaN(unix)){return {unix: null, natural: null};};
			date = strftime("%B %e, %Y", new Date(fixed));
			return {unix: unix, natural: date};
		}
	}
};
