using Rental.Entities;
using Rental.Services;
using System;
using System.Globalization;

namespace Rental
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter rental data");
            Console.Write("Car model: ");
            var car = Console.ReadLine(); // Vehicle
            Console.Write("Pickup (dd/MM/yyyy hh:mm): ");
            var start = DateTime.ParseExact(Console.ReadLine(), "dd/MM/yyyy HH:mm", CultureInfo.InvariantCulture); // CarRental
            Console.Write("Return (dd/MM/yyyy hh:mm): ");
            var finish = DateTime.ParseExact(Console.ReadLine(), "dd/MM/yyyy HH:mm", CultureInfo.InvariantCulture); // CarRental
            
            Console.Write("Enter price per hour: ");
            var pricePerHour = double.Parse(Console.ReadLine());
            Console.Write("Enter price per day: ");
            var pricePerDay = double.Parse(Console.ReadLine());

            CarRental carRental = new CarRental(start, finish, new Vehicle(car));

            RentalService service = new RentalService(pricePerHour, pricePerDay, new BrazilTaxService());

            service.ProcessInvoice(carRental);

            Console.WriteLine("------------------------");
            Console.WriteLine("INVOICE:");
            Console.WriteLine(carRental.Invoice);
        }
    }
}