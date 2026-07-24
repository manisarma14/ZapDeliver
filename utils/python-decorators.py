import time

def timer(func):
    def wrapper():
        start = time.time()
        func()
        end = time.time()
        print(f"{func.__name__} took {end-start:.4f} seconds")
    return wrapper

@timer
def get_user():
    time.sleep(0.5)  # simulate DB call
    print("Getting user...")

@timer
def get_orders():
    time.sleep(0.5)
    print("Getting orders...")

@timer
def get_restaurants():
    time.sleep(0.4)
    print("Getting restaurants...")

get_user()
get_orders()
get_restaurants()