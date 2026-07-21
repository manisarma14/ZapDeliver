numbers = [10,20,30,40]
def calculate_sum(numbers):
    total = 0
    for i in numbers:
        total += i
    print(total)

print(calculate_sum(numbers))


def calculate_even(numbers):
    even_num = []
    for i in numbers:
        if i % 2 == 0 :
            even_num.append(i)
    return even_num
print(calculate_even(numbers))
            
string = "manisarma"
def reverse_string(string):
    reversed_string = string[::-1]
    return reversed_string
print(reverse_string(string))

words = ["hi", "mani", "cat", "elephant", "ok"]
def calculate_length(words):
    long = []
    for i in words:
        if len(i) > 3:
            long.append(i)
    return long
print(calculate_length(words))

