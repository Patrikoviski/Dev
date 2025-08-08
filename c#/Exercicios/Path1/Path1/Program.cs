using System;
using System.IO;

namespace Path1
{
    class Program
    {
        static void Main(string[] args)
        {
            string path = @"C:\Windows\Temp\myfolder\file1.txt";

            Console.WriteLine($"DirectorySeparatorChat: {Path.DirectorySeparatorChar}");
            Console.WriteLine($"PathSeparator: {Path.PathSeparator}");
            Console.WriteLine($"GetDirectoryName: {Path.GetDirectoryName(path)}");
            Console.WriteLine($"GetFileName: {Path.GetFileName(path)}");
            Console.WriteLine($"GetExtension: {Path.GetExtension(path)}");
            Console.WriteLine($"GetFileNameWithout: {Path.GetFileNameWithoutExtension(path)}");
            Console.WriteLine($"GetFullPath: {Path.GetFullPath(path)}");
            Console.WriteLine($"GetTempPath: {Path.GetTempPath()}");
        }
    }
}