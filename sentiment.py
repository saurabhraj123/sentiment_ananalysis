#importing packages
import pandas as pd
import numpy as np
import sys

#import text blob
from textblob import TextBlob

#sentimental Analysis
def check_sentiment(text):
    blob=TextBlob(text)
    sentiment=blob.sentiment.polarity
    if sentiment > 0:
        result= "Positive"
    elif sentiment < 0:
        result= "Negative"
    else:
        result="Neutral"
    return result

inputText = sys.argv[1]

print(check_sentiment(inputText))

