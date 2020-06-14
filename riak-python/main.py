#Ubuntu 18.04
#apt-get install python3-pip
#pip3 install riak
import riak

myBucket = riak.RiakClient(protocol='http', host='127.0.0.1', http_port=8098).bucket('s20833')

#Tworzenie nowego dokumntu
myBucket.new('person-jarek', data={
    'name': 'Jaroslaw Slabik',
    'age': 25,
    'company': 'PJATK'
}).store()

print('Created')
print(myBucket.get('person-jarek').encoded_data)

#Modyfikacja istniejącaego dokumntu
myBucket.new('person-jarek', data={
    'name': 'Jaroslaw Slabik Wielki',
    'age': 25,
    'company': 'PJATK v2.0'
}).store()

print('Modified')
print(myBucket.get('person-jarek').encoded_data)

#Usuwanie istniejącego dokumentu
person = myBucket.get('person-jarek')
person.delete()

print('Deleted')
print(myBucket.get('person-jarek').encoded_data)
