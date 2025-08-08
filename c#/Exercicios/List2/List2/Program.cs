using System;
using System.Collections.Generic;

namespace Course
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> list = new List<string>();

            /* Adiciona item no final da lista*/

            list.Add("Maria");
            list.Add("Alex");
            list.Add("Bob");
            list.Add("Anna");

            /* Insere item na posiçao escolhida*/

            list.Insert(2, "Marco");

            foreach (string obj in list)
            {
                Console.WriteLine(obj);
            }

            /* Conta quantos itens tem na lista*/

            Console.WriteLine("List count: " + list.Count);

            /* Procura primeiro caracter na lista*/

            string s1 = list.Find(x => x[0] == 'A');
            Console.WriteLine("First 'A': " + s1);

            /* Procura o ultimo caracter na lista*/

            string s2 = list.FindLast(x => x[0] == 'A');
            Console.WriteLine("Last 'A': " + s2);

            /* Mostra a posição do primeiro carecter na lista*/

            int pos1 = list.FindIndex(x => x[0] == 'A');
            Console.WriteLine("First position 'A': " + pos1);

            /* Mostra a posiçao do ultimo caracter na lista*/

            int pos2 = list.FindLastIndex(x => x[0] == 'A');
            Console.WriteLine("Last position 'A': " + pos2);

            /* Cria uma lista nova baseada na " original " */

            List<string> list2 = list.FindAll(x => x.Length == 5);

            Console.WriteLine();

            foreach (string obj in list2)
            {
                Console.WriteLine(obj);
            }

            /* Remove string da lista*/

            list.Remove("Alex");
            Console.WriteLine();
            foreach (string obj in list)
            {
                Console.WriteLine(obj);
            }

            /* Remove tudo com um predicato*/

            list.RemoveAll(x => x[0] == 'M');
            Console.WriteLine();
            foreach (string obj in list)
            {
                Console.WriteLine(obj);
            }

            /*Remove pela posição na lista*/

            /*list.RemoveAt(3);
            Console.WriteLine();
            foreach (string obj in list)
            {
                Console.WriteLine(obj);
            }*/

            /*Remove os elementos de uma faixa*/

            /*list.RemoveRange(2, 2);
            Console.WriteLine();
            foreach (string obj in list)
            {
                Console.WriteLine(obj);

            }*/
        }
    }
}