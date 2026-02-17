actual_cost=float(input("Please Enter the actual product price: "))
sale_amount=float(input("Please Enter the sales amount: "))

if(sale_amount>actual_cost):
    amount=sale_amount - actual_cost
    print("Total Profit={0}".format(amount))

else:
    print("No profit!!")