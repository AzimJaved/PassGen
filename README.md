# Password Generator

[![HitCount](http://hits.dwyl.io/AzimJaved/passgen.svg)](http://hits.dwyl.io/AzimJaved/passgen)

This takes 2 inputs : A key and length, and generates a password having an Upper Case and a lower case letter, A number, and a Special Character. 

The key is taken to be lowercase, or is converted into lowercase internally

### How does it work

Each letter in the key is assigned a prime number, taking into account the index on which it occurs. 'a' occuring at the first index and 'a' occuring at the second index while have different primes being assigned to them.
All the corresponding primes are then multiplied, and then split into pairs. Each pair is assigned a character from the keyboard. All the assigned characters are added into a string

### Personalisations

You can supply your own PrimeTable.json and, CharMap.json
PrimeTable.json is an array of the primes to be considered, and have atleast 105 elements.
CharMap.json determines what pair of numbers is assigned what character. The elements andz the number of elements must be the same, although the order can be adjusted to suit your needs.
