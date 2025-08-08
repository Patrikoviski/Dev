using System;

namespace TryCatch
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Console.WriteLine("--------------------------");
                Console.Write("Type a integer number: ");
                int number1 = int.Parse(Console.ReadLine());
                Console.Write("Type other integer number: ");
                int number2 = int.Parse(Console.ReadLine());
                int result = number1 / number2;
                Console.WriteLine("--------------------------");
                Console.WriteLine($"Result: {result}");
                Console.WriteLine("--------------------------");
            }
            catch (DivideByZeroException)
            {
                Console.WriteLine("--------------------------");
                Console.WriteLine($"Division by zero is not allowed");
            }
            catch (FormatException e)
            {
                Console.WriteLine("--------------------------");
                Console.WriteLine($"Format error! {e.Message}");
            }
        }
    }
}