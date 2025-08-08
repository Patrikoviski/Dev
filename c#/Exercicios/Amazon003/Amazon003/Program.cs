using System;
using System.IO;

namespace Amazon
{
    class Program
    {
        static void Main(string[] args)
        {
            string searchFile = @"E:\Out\summary.csv";

            try
            {
                var files = Directory.EnumerateFiles(searchFile, "*.*", SearchOption.AllDirectories);
                Console.WriteLine("FILES:");
                foreach (var file in files)
                {
                    Console.WriteLine(file);
                }
            }
            catch (IOException e)
            {
                Console.WriteLine("An error occurred");
                Console.WriteLine(e.Message);
            }
        }
    }
}