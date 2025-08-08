using System;

namespace Course021
{
    class Program
    {
        static void Main(string[] args)
        {
            DateTime d = new DateTime(2001, 8, 15, 13, 45, 58);

            var s1 = d.ToLongDateString();
            var s2 = d.ToLongTimeString();
            var s3 = d.ToShortDateString();
            var s4 = d.ToShortTimeString();
            var s5 = d.ToString();
            var s6 = d.ToString("yyyy-MM-dd HH:mm:ss");
            var s7 = d.ToString("yyyy-MM-dd HH:mm:ss.fff");

            Console.WriteLine(s1);
            Console.WriteLine(s2);
            Console.WriteLine(s3);
            Console.WriteLine(s4);
            Console.WriteLine(s5);
            Console.WriteLine(s6);
            Console.WriteLine(s7);
        }
    }
}