class Driver:
    def __init__(self,name: str, phone: str) -> None:
        self.name = name
        self.phone = phone
        self.available: bool = True
    
    def go_offline(self) -> None:
        self.available= False
        print(f"{self.name} is offline")

    def go_online(self) -> None:
        self.available = True
        print(f"{self.name} is available")
    
    def __str__(self) -> str:
        return f"Driver({self.name},{self.phone}, available: bool = {self.available})"
    
    def __repr__(self) -> str:
        return f"Driver(name = {self.name!r}, phone = {self.phone!r})"
    
    

class BikeDriver(Driver):
    def __init__(self,name : str,phone : str,bike_number : str) -> None:
        super().__init__(name,phone)
        self.bike_number = bike_number
    

driver1 = Driver("Mani","9999999999")
driver2 = Driver("Arjun", "8888888888")
print(driver1.name)
print(driver2.name)
driver1.go_offline()
print(driver1.available)
driver1.go_online()
print(driver1.available)
driver3 = BikeDriver("Rahul","8080808080","AP31EW3329")
print(driver3.bike_number)
driver3.go_offline()
print(driver3.available)

driver = Driver("Mani","9999999999")
print(driver)
print(repr(driver))