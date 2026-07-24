array = [1,2,3,4,5]
prefix = [0]
x = 1
y = 3
for num in array:
    prefix.append(prefix[-1] + num)

print(prefix[y+1] - prefix[x])