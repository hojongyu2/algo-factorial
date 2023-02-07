def factorial(num):
    total = 1
    while num > 0:
        total *= num
        num -= 1
    print(total)
    return total