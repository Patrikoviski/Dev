using System;

namespace Insta
{
    class Program
    {
        static void Main(string[] args)
        {
            // cada linha é um usuario e senha separado por ;
            while (true)
            {
                // se usar continue vc volta pra ca
                Console.WriteLine("-----------------------------");
                Console.WriteLine("[1] To login");
                Console.WriteLine("[2] To register");
                Console.WriteLine("[3] To delete");
                Console.WriteLine("[4] List all Users");

                string userRawInput = Console.ReadLine();
                if (userRawInput != null && !userRawInput.All(char.IsDigit)) {
                    Console.WriteLine("Select a valid option");
                    continue;
                }

                int userInput = int.Parse(userRawInput);

                string sourcePath = @"C:\Users\griff\OneDrive\Área de Trabalho\login_e_senha.txt";

                string[] lines = File.ReadAllLines(sourcePath);

                if (userInput < 1 || userInput > 4) 
                {
                    Console.WriteLine("Select a valid option");
                    continue;
                }

                if (userInput == 4)
                {
                    Console.WriteLine("---------;--------------------");
                    Console.WriteLine("User list");
                    int userCount = 0;
                    foreach(string line in lines)
                    {
                        if (line != null && line.Length > 0)
                        {
                            Console.WriteLine($"{userCount} - {line.Split(";")[0]}");
                            userCount++;
                        }
                    }
                    continue;
                }

                Console.WriteLine("-----------------------------");
                Console.WriteLine("User: ");
                var name = Console.ReadLine();
                while (!isInputValid(name))
                {
                    // error
                    Console.WriteLine("-----------------------------");
                    Console.WriteLine("Invalid user");
                    Console.WriteLine("-----------------------------");
                    Console.WriteLine("Enter a new user: ");
                    name = Console.ReadLine();
                }

                Console.WriteLine("Password: ");
                var password = Console.ReadLine();
                while (!isInputValid(password))
                {
                    // error
                    Console.WriteLine("-----------------------------");
                    Console.WriteLine("Invalid password");
                    Console.WriteLine("-----------------------------");
                    Console.WriteLine("Enter a new password: ");
                    password = Console.ReadLine();
                }

                Console.WriteLine("-----------------------------");

                if (userInput == 1)
                {
                    if (validateUserAndPassword(lines, name, password))
                    {
                        Console.WriteLine("Logged");
                        break;
                    }
                }
                else if (userInput == 2)
                {
                    if (!validateUserAndPassword(lines, name, null))
                    {
                        try
                        {
                            using (StreamWriter sw = File.AppendText(sourcePath))
                            {
                                sw.Write($"\n{name};{password}");
                                Console.WriteLine("SAVED!");
                            }
                        }
                        catch
                        {
                            Console.WriteLine("error in write file");
                        }

                    }
                    else
                    {
                        Console.WriteLine("User already exists!");
                    }
                }
                else if (userInput == 3)
                {
                    deleteUser(lines, name, password, sourcePath);
                }

            }
            Console.WriteLine("-----------------------------");
        }



        public static void deleteUser(string[] lines, string nameToCheck, string passwordToCheck, string sourcePath)
        {
            for (int i = 0; i < lines.Length; i++)
            {
                string line = lines[i];
                string userPass = nameToCheck + ";" + passwordToCheck;
                if (line.Equals(userPass))
                {
                    try
                    {
                        List<string> newLines = new List<string>(lines);
                        newLines.RemoveAt(i);
                        
                        using (StreamWriter sw = new StreamWriter(sourcePath))
                        {
                            foreach (string newLine in newLines)
                            {
                                if (!"".Equals(newLine)) {
                                    sw.WriteLine(newLine);
                                }
                            }
                        }

                        Console.WriteLine("DELETED!");
                    }
                    catch
                    {
                        Console.WriteLine("error in write file");
                    }
                }
            }
        }

        public static bool validateUserAndPassword(string[] lines2, string userToCheck, string passwordToCheck)
        {
            foreach (string line in lines2)
            {
                if (line == null || line.Length == 0)
                {
                    continue;
                }
                string[] split = line.Split(';');
                string user = split[0];
                string password = split[1];

                if (userToCheck.Equals(user))
                {
                    if (passwordToCheck != null && passwordToCheck.Equals(password))
                    {
                        return true;
                    }
                    else if (passwordToCheck != null) 
                    {
                        Console.WriteLine("Wrong password");
                        return false;
                    }

                    return true;
                }
            }
            return false;
        }
        public static bool isInputValid(string userInput)
        {
            //  adicionar todos os testes de string
            if (userInput == null || userInput.Length == 0)
            {
                Console.WriteLine("User can't be empty");
                return false;
            }
            if (userInput.Contains(" "))
            {
                Console.WriteLine("You can't user space");
                return false;
            }
            if (userInput.Contains("!"))
            {
                Console.WriteLine("You can't user \"!\"");
                return false;
            }

            return true;
        }

    }
}