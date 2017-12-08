'use strict';

/* Create and prepare new topic and metadata to be
presented in the browser. */
function createNewTopic(topic, template) {
    
    var html = template.replace(/\{positive\}/g, topic.positive)
                    .replace(/\{negative\}/g, topic.negative)
                    .replace(/\{neutral\}/g, topic.neutral)
                    .replace(/\{label\}/g, topic.text)
                    .replace(/\{color\}/g, topic.color)
                    .replace(/\{volume\}/g, topic.volume);

    return {
        text: topic.text, 
        weight: Math.floor(topic.volume / 6),
        link: '#',
        html: {'class': 'sentiment-'+topic.color},
        handlers: {
            click: function() {
                document.getElementById('meta-data-view').innerHTML = html;
            }
        }
    }
}

/* Build word cloud array used by JQCloud object and
present the information in the browser. */
function show(data) {
    var wc = new WordCloud(data);
    var topics = wc.buildTopics();
    var wordCloudArray = [];
    var template = document.getElementById('meta-data-template').innerHTML;
    
    for (var i = 0; i < topics.length; i++) {
        var topic = createNewTopic(topics[i], template);
        wordCloudArray.push(topic);        
    }
    $("#word_cloud").jQCloud(wordCloudArray);
}

var buildWordCloud = (function() {
    requests.get('/api/v1/topics/', function(data) {
        show(data);
    });
}());

