var assert = chai.assert;

describe('Word Cloud', function() {
  var wc = new WordCloud(testData);

  describe('Build Topics', function() {
    var topics = wc.buildTopics();
    it('topics length should be 3', function() {
      assert.equal(topics.length, 3);
    });
  });

  describe('Color Sentiment Score', function() {
    it('sentiment color for Berlin should be green', function() {
      assert.equal(wc.getColor(testData[0].sentimentScore), 'green');
    });

    it('sentiment color for Brighton should be red', function() {
      assert.equal(wc.getColor(testData[1].sentimentScore), 'red');
    });

    it('sentiment color for California should be grey', function() {
      assert.equal(wc.getColor(testData[2].sentimentScore), 'grey');
    });
  });

  describe('Get Sentiment', function() {
    it('Berlin negative sentiment should be 3', function() {
      assert.equal(wc.getSentiment(testData[0].sentiment.negative), 3);
    });

    it('Berlin neutral sentiment should be 133', function() {
      assert.equal(wc.getSentiment(testData[0].sentiment.neutral), 133);
    });

    it('California neutral sentiment (undefined) should be 0', function() {
      assert.equal(wc.getSentiment(testData[2].sentiment.neutral), 0);
    });
  });

  describe('Parse Topic', function() {
    var t2 = wc.parseTopic(testData[2]);
    var t1 = wc.parseTopic(testData[1]);
    var t0 = wc.parseTopic(testData[0]);
    it('California word color should be grey', function() {
      assert.equal(t2.color, 'grey');
    });

    it('Brighton word weight should be 6', function() {
      assert.equal(t1.weight, 6);
    });

    it('Berlin volume should be 165', function() {
      assert.equal(t0.volume, 165);
    });

    it('Brighton positive sentiment should be 22', function() {
      assert.equal(t1.positive, 22);
    });

    it('Brighton negative sentiment should be 0', function() {
      assert.equal(t1.negative, 0);
    });
  });

});