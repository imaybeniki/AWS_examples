//This tutorial reads in SQS messages without deleting
//Used help of the tutorial on Amazon
//Before this step, download Node.JS and configure in terminal the keys
var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

var queueURL = "https://sqs.us-east-1.amazonaws.com/258476513244/Temperature";

var params = {
 //change the URL to the SQS URL you are using
 QueueUrl: "https://sqs.us-east-1.amazonaws.com/258476513244/Temperature",
 VisibilityTimeout: 0,
 WaitTimeSeconds: 0
};

sqs.receiveMessage(params, function(err, data) {
  if (err) {
    console.log("Receive Error", err);
  } else {
    var deleteParams = {
      QueueUrl: queueURL,
      ReceiptHandle: data.Messages[0].ReceiptHandle
    };
	console.log(data.Messages[0]);
	//This var temp is for use in my HTML document
	var temp = data.Messages[0].value;
  }
});

//To test, in the terminal, go to the directory with your file name and type:
//node yourfilename.js