using System;
using Hotel.Entities;
using Hotel.Entities.Exceptions;

namespace Hotel
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Console.WriteLine("---------------------------------------------------------------------------------------");
                Console.Write("Room number: ");
                int room = int.Parse(Console.ReadLine());
                Console.Write("Check-in date (dd/MM/yyyy): ");
                DateTime checkIn = DateTime.Parse(Console.ReadLine());
                Console.Write("Check-out date (dd/MM/yyyy): ");
                DateTime checkOut = DateTime.Parse(Console.ReadLine());

                Reservation reservation = new Reservation(room, checkIn, checkOut);
                Console.WriteLine($"Reservation: {reservation}");

                Console.WriteLine("---------------------------------------------------------------------------------------");
                Console.WriteLine("Enter data to update the reservation:");
                Console.Write("Check-in date (dd/MM/yyyy): ");
                checkIn = DateTime.Parse(Console.ReadLine());
                Console.Write("Check-out date (dd/MM/yyyy): ");
                checkOut = DateTime.Parse(Console.ReadLine());

                Console.WriteLine($"Reservation: {reservation}");
                Console.WriteLine("---------------------------------------------------------------------------------------");
            }
            catch (DomainException e)
            {
                Console.WriteLine("---------------------------------------------------------------------------------------");
                Console.WriteLine($"Error in reservation: {e.Message}");
                Console.WriteLine("---------------------------------------------------------------------------------------");
            }
            catch (FormatException e)
            {
                Console.WriteLine("---------------------------------------------------------------------------------------");
                Console.WriteLine($"Format error: {e.Message}");
            }
            catch (Exception e)
            {
                Console.WriteLine($"Unexpected error: {e.Message}");
            }
        }
    }
}