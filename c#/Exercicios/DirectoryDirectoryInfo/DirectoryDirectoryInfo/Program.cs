using System;
using System.IO;


namespace DirectoryDirectoryInfo
{
    class Program
    {
        static void Main(string[] args)
        {
            string path = @"C:\Windows\Temp\myfolder";

            try
            {
               var folder = Directory.EnumerateDirectories(path, "*.*", SearchOption.AllDirectories);
                Console.WriteLine("FOLDERS: ");
                foreach (string item in folder)
                {
                    Console.WriteLine(item);
                }

                Console.WriteLine();
                var files = Directory.EnumerateFiles(path, "*.*", SearchOption.AllDirectories);
                Console.WriteLine("FILES: ");
                foreach (string item in files)
                {
                    Console.WriteLine(item);
                }

                Directory.CreateDirectory(path + @"\newfolder");
            }
            catch (IOException e)
            {
                Console.WriteLine("An error occurred");
                Console.WriteLine(e.Message);
            }
        }
    }
}