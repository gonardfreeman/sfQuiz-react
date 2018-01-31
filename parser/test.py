import re
import json
from pprint import pprint

ANSWER = r"^\??(\+|\-|\?|\+\?)?[A-F]\.\s.+"
NUMB = r"^\d+\."
QUESTION = r"^\d+\.\s+.+"

data=list()


with open('text_questions.txt', 'r') as f:
    for i in f:
        if re.match(NUMB, i) is not None:
            q_number = re.match(NUMB, i)
        if len(i) > 1 and re.match(ANSWER, i, re.MULTILINE) is None: #get question
            data.append(
                    {
                        q_number.group(0)[:-1]:i.rstrip(),
                        'question':True
                    }
                )
        if re.match(ANSWER, i, re.MULTILINE) is not None: #get answer
            answer = re.match(ANSWER, i, re.MULTILINE)
            data.append({
                q_number.group(0)[:-1]:answer.group(0).rstrip(),
                'question':False
                })
                
with open('test_data.json', 'w') as js:
    json.dump(data, js)