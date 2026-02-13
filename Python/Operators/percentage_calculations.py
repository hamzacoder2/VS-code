#take marks from inputs from users
print("enter marks obtained in 4 subjects: ")
math=int(input("maths: "))
english=int(input("english: "))
science=int(input("science: "))
history=int(input("history: "))

# letscalculate the percentage of the marks
sum=math+english+science+history
print("sum ofmath,english,science and history: ",sum)

perc=(sum/400)*100

print(end="Percentage Mark = ")
print(perc)