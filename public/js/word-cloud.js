class WordCloud {

	constructor() {
		this.data = [];
		this.results = [];
		this.topicsEndpoint = '/api/v1/topics/';
		this.templateMetaData = 'meta-data-template';
	}
    
    fetchData() {
        var context = this;
        api.getResource(context.topicsEndpoint, function(data) {
            context.data = data;
        }).then(() => {
            context.build();
        });
    }

    build() {
        for (var i = 0; i < this.data.length; i++) {
            var item = this.getItem(this.data[i]);
		    this.results.push(item);
	    }
        $("#word_cloud").jQCloud(this.results);
    }

    getItem(data) {
    	var positive = data.sentiment.positive;
    	var neutral = data.sentiment.neutral;
    	var negative = data.sentiment.negative;
    	var sentimentScore = data.sentimentScore;

    	if (positive == null) {
    		positive = 0;
    	}

    	if (neutral == null) {
    		neutral = 0;
    	}

    	if (negative == null) {
    		negative = 0;
    	}
    	
    	var color = 'sentiment-grey';
    	if (sentimentScore > 60)  {
    		color = 'sentiment-green';
    	} else if (sentimentScore < 40) {
            color = 'sentiment-red';
    	}

        var template = document.getElementById(this.templateMetaData).innerHTML;
	    return  {
	    	text: data.label, 
	    	weight: Math.floor(data.volume / 6),
	    	link: '#',
	    	html: {'class': color},
	    	handlers: {
                click: function() {
                	var html = template.replace(/\{positive\}/g, positive)
                	    .replace(/\{negative\}/g, negative)
                	    .replace(/\{neutral\}/g, neutral);
                    document.getElementById('word_meta_data').innerHTML = html;
                }
            }
        };
    }

}

var wc = new WordCloud();
wc.fetchData();

