using Ex033;
using System;
using System.Threading.Channels;
using System.Globalization;

namespace Course
{
    class Program
    {
        static void Main(string[] args)
        {

            Student student = new Student();
            Console.Write("Student Name: ");
            student.Name = Console.ReadLine();
            Console.WriteLine("Type the three notes of student:");
            student.Note = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            student.Note2 = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            student.Note3 = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            Console.WriteLine();
            Console.WriteLine("FINAL NOTE = " + student.FinalNote().ToString("F2", CultureInfo.InvariantCulture));

            if (student.Aprovated())
            {
                Console.WriteLine("APROVATED");
            }
            else
            {
                Console.WriteLine("REPROVATED");
                Console.WriteLine($"MISSING {student.RemaiderNote().ToString("F2", CultureInfo.InvariantCulture)} POINTS");
            }
        }
    }
}