#!/usr/bin/env python
import pymongo

# no need to import sys

# establish a connection to the database
connection = pymongo.MongoClient("mongodb://localhost:27017/")

# get a handle to the school database
db = connection.school
students = db.students


def find():
    print("find, reporting for duty")
    # current_student_id = 0
    # query = {'type': 'homework'}
    try:
        cursor = students.find()
        cursor.sort([('scores.type', pymongo.ASCENDING),
                    ('score', pymongo.ASCENDING)])

    except Exception as e:
        print("Unexpected error:", type(e), e)

    for doc in cursor:
        if doc['student_id'] == current_student_id:
            print(doc)
            # get the ID of this doc
            curr_id = doc['_id']
            # delete this doc
            result = scores.delete_one({'_id': curr_id})
            print("Deleted: ", result.deleted_count)
            current_student_id += 1
        else:
            print("Skipping over high score for student_id: ", doc['student_id'], doc['score'])


if __name__ == '__main__':
    find()
