/* Parse topics and return only necessary information to
build the word cloud. */

class WordCloud {

    constructor(topics) {
        this.topics = topics;
    }
    
    buildTopics() {
        var results = [];
        for (var i = 0; i < this.topics.length; i++) {
            var item = this.parseTopic(this.topics[i]);
            results.push(item);
        }

        return results;
    }

    getColor(sentimentScore) {
        if (sentimentScore > 60)  {
            return 'green';
        } else if (sentimentScore < 40) {
            return 'red';
        } else {
            return 'grey';
        }
    }

    getSentiment(sentiment) {
        if (sentiment == null) {
            return 0;
        } else {
            return sentiment;
        }
    }

    parseTopic(topic) {
        return  {
            text: topic.label, 
            weight: Math.floor(topic.volume / 6),
            link: '#',
            positive: this.getSentiment(topic.sentiment.positive),
            negative: this.getSentiment(topic.sentiment.negative),
            neutral: this.getSentiment(topic.sentiment.neutral),
            color: this.getColor(topic.sentimentScore),
            volume: topic.volume
        };
    }
}


