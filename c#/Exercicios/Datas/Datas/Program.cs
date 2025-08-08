using System;

namespace Datas
{
    class Program
    {
        static void Main(string[] args)
        {
            DateTime d = new DataTime(2001, 8, 15, 13, 45, 58);

            Console.WriteLine(d.ToLongDateString);
        }
    }
}