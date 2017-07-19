#This is the most simple way to read in each SQS message
import boto3
import time
from boto3.session import Session
 
# Start your session using Boto3
session = Session(
    aws_access_key_id='YOUR_ACCESS_KEY',
    aws_secret_access_key='YOUR_SECRET_ACCESS',
    region_name='us-east-1',
)
client = session.client('sqs')

#Read in SQS messages until going through all
while True:
   message = client.receive_message(
   #Change to your SQS URL
   QueueUrl='https://sqs.us-east-1.amazonaws.com/258476513244/Temperature'
   )
   print(message['Messages'][0]['Body'])
   time.sleep(5)
   
   
